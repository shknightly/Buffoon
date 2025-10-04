from __future__ import annotations

from typing import Optional

import httpx


async def fetch_page(url: str, timeout: Optional[float] = 10.0) -> str:
    async with httpx.AsyncClient(timeout=timeout) as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.text
