from __future__ import annotations

from typing import List


class AgentPlanner:
    """Generates deterministic task plans for demonstration purposes."""

    def build_plan(self, description: str) -> List[str]:
        normalized = description.lower()
        if "research" in normalized:
            return [
                "Open documentation portals",
                "Aggregate relevant references",
                "Summarize findings into actionable insights",
            ]
        if "test" in normalized:
            return [
                "Run automated checks",
                "Capture logs",
                "Report pass/fail summary",
            ]
        return [
            "Prepare sandbox",
            "Execute primary task flow",
            "Persist results",
        ]


def get_planner() -> AgentPlanner:
    if not hasattr(get_planner, "_instance"):
        get_planner._instance = AgentPlanner()
    return get_planner._instance  # type: ignore[attr-defined]
