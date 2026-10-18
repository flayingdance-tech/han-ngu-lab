"""Offline rendering using VoiceStudio's pinned OmniVoice engine; resumable per clip."""
import argparse
import hashlib
import json
import os
import subprocess
import sys
import time
import faulthandler
import gc
from datetime import datetime, timezone
from pathlib import Path
from voice_io import atomic_replace

VOICE = "hnl-original-v1"
ROOT = Path(__file__).resolve().parents[1]


def main():
    faulthandler.enable()
    p = argparse.ArgumentParser()
    p.add_argument("--batch-size", type=int, default=4)
    p.add_argument("--limit", type=int, default=0)
    p.add_argument("--steps", type=int, default=16)
    p.add_argument("--allow-preview", action="store_true")
    p.add_argument("--int8", action="store_true", help="CPU dynamic INT8 for the language backbone; codec stays float32")
    p.add_argument("--recover-only", action="store_true", help="Restore valid cached WAVs without loading the synthesis model")
    p.add_argument("--trace-interval", type=int, default=0)
    args = p.parse_args()
    if args.trace_interval > 0:
        faulthandler.dump_traceback_later(args.trace_interval, repeat=True)
    if args.limit < 0 or args.trace_interval < 0 or not 1 <= args.batch_size <= 8 or not 8 <= args.steps <= 64:
        p.error("batch-size must be 1..8; steps must be 8..64; limit/trace-interval must be non-negative")
    workspace = ROOT / ".local" / "voice"
    targets = json.loads((workspace / "targets.json").read_text(encoding="utf-8"))
    if targets["localPreview"] and not args.allow_preview:
        p.error("Preview content needs --allow-preview; it stays unreviewed")
    # Nothing contacts a model service. Downloads/setup happen separately.
    os.environ["HF_HUB_OFFLINE"] = "1"
    os.environ["TRANSFORMERS_OFFLINE"] = "1"
    os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"
    os.environ["TORCH_COMPILE_DISABLE"] = "1"
    os.environ["TORCHDYNAMO_DISABLE"] = "1"
    reference = json.loads((workspace / "reference.json").read_text(encoding="utf-8"))
    if reference.get("permission") != "owner-confirmed" or not reference.get("text", "").strip():
        raise ValueError("A permitted reference and non-empty transcript are required")
    if reference.get("language") != "zh":
        raise ValueError("This project profile requires a Chinese reference for Chinese lessons")
    reference_path = workspace / "reference.wav"
    reference_hash = hashlib.sha256(reference_path.read_bytes()).hexdigest()
    if reference_hash != reference["sha256"]:
        raise ValueError("Reference changed; prepare and verify a new profile")
    fingerprint = hashlib.sha256(f"{reference_hash}|VoiceStudio-d819ff5|OmniVoice-c5fdb5c|steps={args.steps}|speed=0.9|int8={args.int8}".encode()).hexdigest()
    for item in targets["targets"]:
        item["id"] = hashlib.sha256(f"{fingerprint}|{item['key']}".encode()).hexdigest()[:24]
    output = ROOT / "public" / "audio" / VOICE
    output.mkdir(parents=True, exist_ok=True)
    staging = workspace / "generated"
    staging.mkdir(parents=True, exist_ok=True)
    manifest_path = output.parent / "manifest.json"
    manifest = {"version": 1, "voiceId": VOICE, "label": "Giọng Hán Ngữ Lab",
                "engine": "VoiceStudio / OmniVoice (local CPU)",
                "profileFingerprint": fingerprint,
                "generatedAt": datetime.now(timezone.utc).isoformat(), "entries": {}}
    if manifest_path.exists():
        previous = json.loads(manifest_path.read_text(encoding="utf-8"))
        if previous["voiceId"] != VOICE:
            raise ValueError("Refusing to overwrite another voice manifest")
        if previous.get("profileFingerprint") == fingerprint:
            manifest = previous
    done, failed = 0, []
    todo = []
    for item in targets["targets"]:
        entry = manifest["entries"].get(item["key"])
        expected = {kind: f"/audio/{VOICE}/{item['id']}{suffix}.mp3" for kind, suffix in (("normal", ""), ("slow", "-slow"))}
        complete = entry and all(entry.get(kind) == path and (ROOT / "public" / path.lstrip("/")).is_file()
                                 and (ROOT / "public" / path.lstrip("/")).stat().st_size >= 500 for kind, path in expected.items())
        if complete:
            continue
        if entry and entry.get("review") == "approved":
            raise ValueError(f"Approved audio is missing/changed: {item['key']}. Restore the approved file from backup.")
        todo.append(item)
    if args.limit:
        todo = todo[:args.limit]
    # Similar lengths share a batch so short words do not pay sentence padding cost.
    todo.sort(key=lambda item: len(item["text"]))
    recovered = 0
    if todo:
        import numpy as np
        import soundfile as sf

    def deliver(item):
        nonlocal done
        wav_path = staging / f"{item['id']}.wav"
        for suffix, filters in (("", "loudnorm=I=-18:TP=-1.5:LRA=7"),
                                ("-slow", "atempo=0.8,loudnorm=I=-18:TP=-1.5:LRA=7")):
            target = output / f"{item['id']}{suffix}.mp3"
            temporary = target.with_suffix(".tmp.mp3")
            subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(wav_path),
                            "-af", filters, "-ar", "24000", "-c:a", "libmp3lame", "-q:a", "2", str(temporary)], check=True)
            atomic_replace(temporary, target)
        manifest["entries"][item["key"]] = {"text": item["text"], "pinyin": item["pinyin"],
            "normal": f"/audio/{VOICE}/{item['id']}.mp3", "slow": f"/audio/{VOICE}/{item['id']}-slow.mp3",
            "review": "unreviewed"}
        temporary_manifest = manifest_path.with_suffix(".tmp.json")
        temporary_manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
        atomic_replace(temporary_manifest, manifest_path)
        done += 1
        print(f"{len(manifest['entries'])}/{len(targets['targets'])}: {item['text']}", flush=True)

    pending = []
    for item in todo:
        wav_path = staging / f"{item['id']}.wav"
        if wav_path.exists():
            try:
                wave, rate = sf.read(wav_path, dtype="float32")
                valid = rate == 24000 and wave.ndim == 1 and len(wave) >= rate * .2 and np.isfinite(wave).all() and np.max(np.abs(wave)) >= 1e-5
            except (OSError, RuntimeError, ValueError):
                valid = False
            if valid:
                deliver(item)
                recovered += 1
                continue
        pending.append(item)
    todo = pending
    if not todo or args.recover_only:
        report = {"generated": 0, "recoveredFromWav": recovered, "totalEntries": len(manifest["entries"]), "pending": len(todo), "cacheHit": not bool(todo), "apiCalls": 0}
        (workspace / "cache-check.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
        print(json.dumps(report), flush=True)
        faulthandler.cancel_dump_traceback_later()
        return
    source = ROOT / ".local" / "VoiceStudio"
    sys.path.insert(0, str(source))
    import numpy as np
    import soundfile as sf
    import torch
    from omnivoice import OmniVoice
    from omnivoice.models.omnivoice import VoiceClonePrompt

    torch.set_num_threads(4)
    torch.set_num_interop_threads(1)
    torch.manual_seed(20261018)
    print("Loading local VoiceStudio engine...", flush=True)
    model = OmniVoice.from_pretrained(str(ROOT / ".local" / "audio-preview" / "tts-model"),
                                     device_map="cpu", dtype=torch.float32)
    if args.int8:
        print("Preparing CPU INT8 backbone...", flush=True)
        torch.ao.quantization.quantize_dynamic(model.llm, {torch.nn.Linear}, dtype=torch.qint8, inplace=True)
        # Remaining embeddings/norms still share the large original safetensors mmap.
        # Own those small remaining tensors so obsolete float Linear pages can be released.
        with torch.inference_mode():
            for part in (model.llm, model.audio_embeddings, model.audio_heads):
                for parameter in part.parameters():
                    parameter.data = parameter.data.clone()
        gc.collect()
    prompt_path = workspace / f"prompt-{reference_hash[:16]}.pt"
    if prompt_path.exists():
        prompt = VoiceClonePrompt.load(str(prompt_path))
    else:
        wave, rate = sf.read(reference_path, dtype="float32")
        with torch.inference_mode():
            prompt = model.create_voice_clone_prompt((torch.from_numpy(wave).unsqueeze(0), rate),
                                                     ref_text=reference["text"], preprocess_prompt=False)
        prompt.save(str(prompt_path))
    print(f"Pending {len(todo)} clips; batch={args.batch_size}, steps={args.steps}", flush=True)
    for start in range(0, len(todo), args.batch_size):
        batch = todo[start:start + args.batch_size]
        started = time.monotonic()
        try:
            with torch.inference_mode():
                waves = model.generate(text=[x["text"] for x in batch], language="zh",
                                       voice_clone_prompt=prompt, num_step=args.steps, speed=0.9)
            # Persist the whole expensive batch before encoding/publishing any clip.
            # A restart can then recover every WAV without running synthesis again.
            for item, wave in zip(batch, waves, strict=True):
                wave = wave.detach().float().cpu().squeeze().numpy()
                if not np.isfinite(wave).all() or len(wave) < model.sampling_rate * 0.2 or np.max(np.abs(wave)) < 1e-5:
                    raise ValueError(f"Invalid/silent generated audio: {item['id']}")
                wav_path = staging / f"{item['id']}.wav"
                temporary_wav = wav_path.with_suffix(".tmp.wav")
                sf.write(temporary_wav, wave, model.sampling_rate, subtype="FLOAT")
                atomic_replace(temporary_wav, wav_path)
            for item in batch:
                deliver(item)
            print(f"Batch {time.monotonic()-started:.1f}s", flush=True)
        except Exception as error:
            failed.extend(x["id"] for x in batch if x["key"] not in manifest["entries"])
            print(f"Batch failed: {error}", file=sys.stderr, flush=True)
            raise
    report = {"generated": done - recovered, "recoveredFromWav": recovered, "totalEntries": len(manifest["entries"]), "failed": failed,
              "referenceSha256": reference_hash, "steps": args.steps,
              "int8": args.int8,
              "humanReviewed": False, "apiCalls": 0}
    (workspace / "render-report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report), flush=True)
    faulthandler.cancel_dump_traceback_later()


if __name__ == "__main__":
    from filelock import FileLock
    lock_path = ROOT / '.local' / 'voice' / 'render.lock'
    lock_path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(lock_path), timeout=0):
        main()
