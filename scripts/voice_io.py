"""Atomic file replacement with bounded retries for transient Windows readers."""
import os
import time


def atomic_replace(source, destination):
    for attempt in range(12):
        try:
            os.replace(source, destination)
            return
        except PermissionError:
            if attempt == 11:
                raise
            time.sleep(min(0.05 * 2 ** attempt, 1))
