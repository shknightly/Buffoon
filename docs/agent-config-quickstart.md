# Agent Config Quickstart

## Overview
Agent Config files let non-developers assemble Buffoon-compatible ADK agents using declarative YAML rather than Python. Each config names the model, describes the agent's responsibilities, and can reference tools or sub-agents to expand capabilities. This quickstart distills the workflow for authoring, running, and iterating on these definitions.

## Prerequisites
- Install the Google Agent Development Kit Python libraries so the `adk` CLI is available.
- Provision Gemini access either with a Google API key or a Vertex AI project/location pair.
- Confirm `adk --version` succeeds to verify your virtual environment is active.

## Project Scaffolding
1. Create a new config-driven agent project:
   ```bash
   adk create --type=config my_agent
   ```
2. Populate `.env` with credentials. Use `GOOGLE_API_KEY` with `GOOGLE_GENAI_USE_VERTEXAI=0` for Gemini API, or define `GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`, and `GOOGLE_GENAI_USE_VERTEXAI=1` for Vertex AI.
3. Edit `root_agent.yaml` to describe your agent. The minimal structure contains the agent name, Gemini model, description, and a natural-language instruction block that guides responses.

## Execution Options
Run the agent from the generated project directory using one of the following CLI commands:
- `adk web` — Launches a web UI for conversational testing.
- `adk run` — Streams interactions directly in the terminal.
- `adk api_server` — Exposes the agent as an HTTP service for programmatic access.

## Patterns & Examples
### Built-in Tooling
Reference an ADK built-in such as `google_search` inside the `tools` section to enable automatic web lookups for relevant prompts.

### Custom Tools
Expose local Python functionality by packaging a module and referencing its dotted path (for example, `ma_llm.check_prime`) under `tools` so the agent can call it when reasoning about user requests.

### Sub-agent Delegation
List additional YAML configs under `sub_agents` to create delegating coordinators. Root agents can route math and coding questions to separate specialists, enabling modular workflows without custom code.

## Deployment Notes
Config-based agents deploy with the same Cloud Run and Agent Engine pipelines as code-first projects. Package the generated project, supply the `.env` secrets, and follow the existing Buffoon deployment scripts to run declarative agents in production.

## Limitations & Guidance
- Gemini models are required today; third-party model hooks remain experimental.
- Only Python-backed custom tools are supported, so polyglot tooling must expose Python shims.
- Several advanced ADK tool integrations (for example, `LangGraphAgent` or `A2aAgent`) are not yet compatible with Agent Config and should be avoided until support lands.
- Ensure any URLs referenced by `load_web_page` are fully qualified to prevent runtime fetch errors.
