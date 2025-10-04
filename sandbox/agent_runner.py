from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

RESULT_PATH = Path(os.environ.get("BUFFOON_RESULT_PATH", "/tmp/buffoon-result.json"))


def log(message: str) -> None:
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")
    sys.stdout.flush()


def main() -> None:
    payload = {
        "status": "completed",
        "summary": "Sandbox executed successfully",
        "metrics": {"duration_seconds": 1.2},
    }
    RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with RESULT_PATH.open("w", encoding="utf-8") as file:
        json.dump(payload, file, indent=2)
    log(f"Result written to {RESULT_PATH}")


if __name__ == "__main__":
    main()
