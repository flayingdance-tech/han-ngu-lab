"""Local-only Demucs reference preview; never publishes audio or replaces source."""
import argparse
import json
import subprocess
import time
from pathlib import Path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    if not args.source.is_file():
        parser.error("Source audio does not exist")
    args.output.mkdir(parents=True, exist_ok=True)
    import soundfile as sf
    import torch
    from demucs.apply import apply_model
    from demucs.pretrained import get_model

    torch.set_num_threads(4)
    torch.hub.set_dir(str(args.output / "models" / "hub"))
    started = time.monotonic()
    audio, rate = sf.read(args.source, dtype="float32", always_2d=True)
    model = get_model("htdemucs").cpu().eval()
    if rate != model.samplerate or audio.shape[1] != model.audio_channels:
        parser.error("Decode source to stereo 44100 Hz WAV first")
    mixture = torch.from_numpy(audio.T.copy())
    reference = mixture.mean(0)
    mean, std = reference.mean(), reference.std()
    if std < 1e-8:
        parser.error("Source is silent")
    mixture = (mixture - mean) / std
    with torch.inference_mode():
        stems = apply_model(model, mixture[None], device="cpu", shifts=1,
                            split=True, overlap=0.25, progress=True)[0]
    stems = stems * std + mean
    vocals = stems[model.sources.index("vocals")].T.numpy()
    vocal_path = args.output / "vocals.wav"
    sf.write(vocal_path, vocals, rate, subtype="FLOAT")
    # Normalization is identical across A/B; B changes pitch by only 0.5 semitone.
    loudness = "loudnorm=I=-18:TP=-1.5:LRA=7"
    variants = {
        "01-giong-goc.mp3": (args.source, loudness),
        "02-giong-tach-nhac.mp3": (vocal_path, loudness),
        "03-giong-thanh-nhe.mp3": (vocal_path,
            "highpass=f=65,equalizer=f=300:t=q:w=0.8:g=-1,"
            "equalizer=f=3000:t=q:w=0.8:g=1.2,"
            "rubberband=pitch=1.0293022366:formant=preserved," + loudness),
    }
    for name, (source, filters) in variants.items():
        subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                        "-i", str(source), "-af", filters, "-ar", "44100",
                        "-c:a", "libmp3lame", "-q:a", "2", str(args.output / name)],
                       check=True)
    report = {"model": "htdemucs", "device": "cpu", "shifts": 1,
              "source_duration_seconds": len(audio) / rate,
              "elapsed_seconds": round(time.monotonic() - started, 2),
              "pitch_change_semitones": 0.5,
              "files": list(variants), "voice_cloning": False,
              "human_audio_review": "pending"}
    (args.output / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2), flush=True)


if __name__ == "__main__":
    main()
