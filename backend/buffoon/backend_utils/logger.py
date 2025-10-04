from __future__ import annotations

import sys
from typing import Any, Dict

from loguru import logger

_LOGGER_CONFIGURED = False


def configure_logging() -> None:
    global _LOGGER_CONFIGURED
    if _LOGGER_CONFIGURED:
        return

    logger.remove()
    logger.add(
        sys.stdout,
        colorize=True,
        format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan> - <level>{message}</level>",
    )
    _LOGGER_CONFIGURED = True


def get_logger() -> Any:
    configure_logging()
    return logger


def structured_log(message: str, **context: Dict[str, Any]) -> None:
    log = get_logger()
    log.bind(**context).info(message)
