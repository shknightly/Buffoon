FROM python:3.11-slim

WORKDIR /app

COPY agent_runner.py ./agent_runner.py
COPY tools ./tools

RUN pip install --no-cache-dir httpx==0.25.2 beautifulsoup4==4.12.2

ENTRYPOINT ["python", "agent_runner.py"]
