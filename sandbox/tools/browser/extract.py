from __future__ import annotations

from bs4 import BeautifulSoup


def extract_links(html: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    return [link.get("href", "") for link in soup.find_all("a") if link.get("href")]
