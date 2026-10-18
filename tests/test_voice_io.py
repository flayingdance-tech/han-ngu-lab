import importlib.util
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("voice_io", Path(__file__).resolve().parents[1] / "scripts/voice_io.py")
voice_io = importlib.util.module_from_spec(spec)
spec.loader.exec_module(voice_io)


class AtomicReplaceTests(unittest.TestCase):
    def test_temporary_lock_retries_without_touching_previous_file(self):
        with tempfile.TemporaryDirectory() as folder:
            source, destination = Path(folder) / "new.json", Path(folder) / "manifest.json"
            source.write_text("new")
            destination.write_text("previous")
            replace = voice_io.os.replace
            attempts = []

            def transient(a, b):
                attempts.append(1)
                if len(attempts) < 3:
                    self.assertEqual(destination.read_text(), "previous")
                    raise PermissionError("reader holds a Windows handle")
                replace(a, b)

            with patch.object(voice_io.os, "replace", side_effect=transient), patch.object(voice_io.time, "sleep"):
                voice_io.atomic_replace(source, destination)
            self.assertEqual(len(attempts), 3)
            self.assertEqual(destination.read_text(), "new")

    def test_permanent_lock_stops_and_preserves_both_files(self):
        with tempfile.TemporaryDirectory() as folder:
            source, destination = Path(folder) / "new.json", Path(folder) / "manifest.json"
            source.write_text("new")
            destination.write_text("previous")
            with patch.object(voice_io.os, "replace", side_effect=PermissionError("locked")) as replace, patch.object(voice_io.time, "sleep"):
                with self.assertRaises(PermissionError):
                    voice_io.atomic_replace(source, destination)
            self.assertEqual(replace.call_count, 12)
            self.assertEqual(destination.read_text(), "previous")
            self.assertEqual(source.read_text(), "new")


if __name__ == "__main__":
    unittest.main()
