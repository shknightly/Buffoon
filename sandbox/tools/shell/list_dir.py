from __future__ import annotations

from pathlib import Path
from typing import List


def list_directory(path: str) -> List[str]:
    return [item.name for item in Path(path).iterdir()]
