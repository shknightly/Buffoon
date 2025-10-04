from __future__ import annotations

import asyncio


async def simulate_click(selector: str) -> str:
    await asyncio.sleep(0.1)
    return f"Clicked {selector}"
