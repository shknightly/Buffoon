        Agent Config - Agent Development Kit       Agent Development Kit                

[Skip to content](#build-agents-with-agent-config)

[![logo](../../assets/agent-development-kit.png)](../.. "Agent Development Kit")

[Agent Development Kit](../.. "Agent Development Kit")

Agent Config

 

Initializing search

[adk-python](https://github.com/google/adk-python "Go to repository")
[adk-java](https://github.com/google/adk-java "adk-java")

 [![logo](../../assets/agent-development-kit.png)](../.. "Agent Development Kit")Agent Development Kit

[adk-python](https://github.com/google/adk-python "Go to repository")
[adk-java](https://github.com/google/adk-java "adk-java")

*   [Home](../..)
*   [Get Started](../../get-started/)
    
    Get Started
    
    *   [Installation](../../get-started/installation/)
    *   [Quickstart](../../get-started/quickstart/)
    *   [Quickstart (Streaming)](../../get-started/streaming/)
        
        Quickstart (Streaming)
        
        *   [Python](../../get-started/streaming/quickstart-streaming/)
        *   [Java](../../get-started/streaming/quickstart-streaming-java/)
        
    *   [Testing](../../get-started/testing/)
    *   [Sample agents](https://github.com/google/adk-samples)
    *   [About ADK](../../get-started/about/)
    
*   [Tutorials](../../tutorials/)
    
    Tutorials
    
    *   [Agent Team](../../tutorials/agent-team/)
    
*   [Agents](../)
    
    Agents
    
    *   [LLM agents](../llm-agents/)
    *   [Workflow agents](../workflow-agents/)
        
        Workflow agents
        
        *   [Sequential agents](../workflow-agents/sequential-agents/)
        *   [Loop agents](../workflow-agents/loop-agents/)
        *   [Parallel agents](../workflow-agents/parallel-agents/)
        
    *   [Custom agents](../custom-agents/)
    *   [Multi-agent systems](../multi-agents/)
    *    Agent Config [Agent Config](./)
        
        Table of contents
        
        *   [Get started](#get-started)
            
            *   [Setup](#setup)
            *   [Build an agent](#build-an-agent)
            *   [Run the agent](#run-the-agent)
            
        *   [Example configs](#example-configs)
            
            *   [Built-in tool example](#built-in-tool-example)
            *   [Custom tool example](#custom-tool-example)
            *   [Sub-agents example](#sub-agents-example)
            
        *   [Deploy agent configs](#deploy-agent-configs)
        *   [Known limitations](#known-limitations)
        *   [Next steps](#next-steps)
        
    *   [Models & Authentication](../models/)
    
*   [Tools](../../tools/)
    
    Tools
    
    *    Function tools
        
        Function tools
        
        *   [Overview](../../tools/function-tools/)
        *   [Tool performance](../../tools/performance/)
        *   [Action confirmations](../../tools/confirmation/)
        
    *   [Built-in tools](../../tools/built-in-tools/)
    *   [Third party tools](../../tools/third-party-tools/)
    *   [Google Cloud tools](../../tools/google-cloud-tools/)
    *   [MCP tools](../../tools/mcp-tools/)
    *   [OpenAPI tools](../../tools/openapi-tools/)
    *   [Authentication](../../tools/authentication/)
    
*   [Running Agents](../../runtime/)
    
    Running Agents
    
    *   [Runtime Config](../../runtime/runconfig/)
    
*   [Deploy](../../deploy/)
    
    Deploy
    
    *   [Agent Engine](../../deploy/agent-engine/)
    *   [Cloud Run](../../deploy/cloud-run/)
    *   [GKE](../../deploy/gke/)
    
*   [Sessions & Memory](../../sessions/)
    
    Sessions & Memory
    
    *   [Session](../../sessions/session/)
    *   [State](../../sessions/state/)
    *   [Memory](../../sessions/memory/)
    *   [Vertex AI Express Mode](../../sessions/express-mode/)
    
*   [Callbacks](../../callbacks/)
    
    Callbacks
    
    *   [Types of callbacks](../../callbacks/types-of-callbacks/)
    *   [Callback patterns](../../callbacks/design-patterns-and-best-practices/)
    
*   [Artifacts](../../artifacts/)
    
    Artifacts
    
*   [Events](../../events/)
    
    Events
    
*   [Context](../../context/)
    
    Context
    
*    Observability
    
    Observability
    
    *   [Logging](../../observability/logging/)
    *   [Cloud Trace](../../observability/cloud-trace/)
    *   [AgentOps](../../observability/agentops/)
    *   [Arize AX](../../observability/arize-ax/)
    *   [Phoenix](../../observability/phoenix/)
    *   [W&B Weave](../../observability/weave/)
    
*   [Evaluate](../../evaluate/)
    
    Evaluate
    
*   [MCP](../../mcp/)
    
    MCP
    
*   [Plugins](../../plugins/)
    
    Plugins
    
*   [Bidi-streaming (live)](../../streaming/)
    
    Bidi-streaming (live)
    
    *   [Streaming Quickstarts](../../get-started/streaming/)
    *   [Custom Audio Bidi-streaming app sample (SSE)](../../streaming/custom-streaming/)
    *   [Custom Audio Bidi-streaming app sample (WebSockets)](../../streaming/custom-streaming-ws/)
    *   [Bidi-streaming development guide series](../../streaming/dev-guide/part1/)
    *   [Streaming Tools](../../streaming/streaming-tools/)
    *   [Configurating Bidi-streaming behaviour](../../streaming/configuration/)
    *   [Google ADK + Vertex AI Live API (blog post)](https://medium.com/google-cloud/google-adk-vertex-ai-live-api-125238982d5e)
    
*    Grounding
    
    Grounding
    
    *   [Understanding Google Search Grounding](../../grounding/google_search_grounding/)
    *   [Understanding Vertex AI Search Grounding](../../grounding/vertex_ai_search_grounding/)
    
*   [Safety and Security](../../safety/)
*   [A2A Protocol](../../a2a/)
    
    A2A Protocol
    
    *   [Introduction to A2A](../../a2a/intro/)
    *   [A2A Quickstart (Exposing)](../../a2a/quickstart-exposing/)
    *   [A2A Quickstart (Consuming)](../../a2a/quickstart-consuming/)
    *   [A2A Protocol Documentation](https://a2a-protocol.org)
    
*   [Community Resources](../../community/)
*   [Contributing Guide](../../contributing-guide/)
*   [API Reference](../../api-reference/)
    
    API Reference
    
    *   [Python ADK](../../api-reference/python/)
    *   [Java ADK](../../api-reference/java/)
    *   [CLI Reference](../../api-reference/cli/)
    *   [Agent Config reference](../../api-reference/agentconfig/)
    *   [REST API](../../api-reference/rest/)
    

Table of contents

*   [Get started](#get-started)
    
    *   [Setup](#setup)
    *   [Build an agent](#build-an-agent)
    *   [Run the agent](#run-the-agent)
    
*   [Example configs](#example-configs)
    
    *   [Built-in tool example](#built-in-tool-example)
    *   [Custom tool example](#custom-tool-example)
    *   [Sub-agents example](#sub-agents-example)
    
*   [Deploy agent configs](#deploy-agent-configs)
*   [Known limitations](#known-limitations)
*   [Next steps](#next-steps)

Build agents with Agent Config
===================================================================================

The ADK Agent Config feature lets you build an ADK workflow without writing code. An Agent Config uses a YAML format text file with a brief description of the agent, allowing just about anyone to assemble and run an ADK agent. The following is a simple example of an basic Agent Config definition:

```
name: assistant_agent
model: gemini-2.5-flash
description: A helper agent that can answer users' questions.
instruction: You are an agent to help answer users' various questions.

```


You can use Agent Config files to build more complex agents which can incorporate Functions, Tools, Sub-Agents, and more. This page describes how to build and run ADK workflows with the Agent Config feature. For detailed information on the syntax and settings supported by the Agent Config format, see the [Agent Config syntax reference](https://google.github.io/adk-docs/api-reference/agentconfig/).

Experimental

The Agent Config feature is experimental and has some [known limitations](#known-limitations). We welcome your [feedback](https://github.com/google/adk-python/issues/new?template=feature_request.md&labels=agent%20config)!

Get started
---------------------------------------------

This section describes how to set up and start building agents with the ADK and the Agent Config feature, including installation setup, building an agent, and running your agent.

### Setup

You need to install the Google Agent Development Kit libraries, and provide an access key for a generative AI model such as Gemini API. This section provides details on what you must install and configure before you can run agents with the Agent Config files.

Note

The Agent Config feature currently only supports Gemini models. For more information about additional; functional restrictions, see [Known limitations](#known-limitations).

To setup ADK for use with Agent Config:

1.  Install the ADK Python libraries by following the [Installation](https://google.github.io/adk-docs/get-started/installation/#python) instructions. _Python is currently required._ For more information, see the [Known limitations](?tab=t.0#heading=h.xefmlyt7zh0i).
2.  Verify that ADK is installed by running the following command in your terminal:
    
    ```
adk --version

```

    
    This command should show the ADK version you have installed.
    

Tip

If the `adk` command fails to run and the version is not listed in step 2, make sure your Python environment is active. Execute `source .venv/bin/activate` in your terminal on Mac and Linux. For other platform commands, see the [Installation](https://google.github.io/adk-docs/get-started/installation/#python) page.

### Build an agent

You build an agent with Agent Config using the `adk create` command to create the project files for an agent, and then editing the `root_agent.yaml` file it generates for you.

To create an ADK project for use with Agent Config:

1.  In your terminal window, run the following command to create a config-based agent:
    
    ```
adk create --type=config my_agent

```

    
    This command generates a `my_agent/` folder, containing a `root_agent.yaml` file and an `.env` file.
    
2.  In the `my_agent/.env` file, set environment variables for your agent to access generative AI models and other services:
    
    1.  For Gemini model access through Google API, add a line to the file with your API key:
        
        ```
GOOGLE_GENAI_USE_VERTEXAI=0
GOOGLE_API_KEY=<your-Google-Gemini-API-key>

```

        
        You can get an API key from the Google AI Studio [API Keys](https://aistudio.google.com/app/apikey) page.
        
    2.  For Gemini model access through Google Cloud, add these lines to the file:
        
        ```
GOOGLE_GENAI_USE_VERTEXAI=1
GOOGLE_CLOUD_PROJECT=<your_gcp_project>
GOOGLE_CLOUD_LOCATION=us-central1

```

        
        For information on creating a Cloud Project, see the Google Cloud docs for [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
        
3.  Using text editor, edit the Agent Config file `my_agent/root_agent.yaml`, as shown below:
    

```
# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json
name: assistant_agent
model: gemini-2.5-flash
description: A helper agent that can answer users' questions.
instruction: You are an agent to help answer users' various questions.

```


You can discover more configuration options for your `root_agent.yaml` agent configuration file by referring to the ADK [samples repository](https://github.com/search?q=repo%3Agoogle%2Fadk-python+path%3A%2F%5Econtributing%5C%2Fsamples%5C%2F%2F+.yaml&type=code) or the [Agent Config syntax](https://google.github.io/adk-docs/api-reference/agentconfig/) reference.

### Run the agent

Once you have completed editing your Agent Config, you can run your agent using the web interface, command line terminal execution, or API server mode.

To run your Agent Config-defined agent:

1.  In your terminal, navigate to the `my_agent/` directory containing the `root_agent.yaml` file.
2.  Type one of the following commands to run your agent:
    *   `adk web` - Run web UI interface for your agent.
    *   `adk run` - Run your agent in the terminal without a user interface.
    *   `adk api_server` - Run your agent as a service that can be used by other applications.

For more information on the ways to run your agent, see the _Run Your Agent_ topic in the [Quickstart](https://google.github.io/adk-docs/get-started/quickstart/#run-your-agent). For more information about the ADK command line options, see the [ADK CLI reference](https://google.github.io/adk-docs/api-reference/cli/).

Example configs
-----------------------------------------------------

This section shows examples of Agent Config files to get you started building agents. For additional and more complete examples, see the ADK [samples repository](https://github.com/search?q=repo%3Agoogle%2Fadk-python+path%3A%2F%5Econtributing%5C%2Fsamples%5C%2F%2F+root_agent.yaml&type=code).

### Built-in tool example

The following example uses a built-in ADK tool function for using google search to provide functionality to the agent. This agent automatically uses the search tool to reply to user requests.

```
# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json
name: search_agent
model: gemini-2.0-flash
description: 'an agent whose job it is to perform Google search queries and answer questions about the results.'
instruction: You are an agent whose job is to perform Google search queries and answer questions about the results.
tools:
  - name: google_search

```


For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/tool_builtin_config/root_agent.yaml).

### Custom tool example

The following example uses a custom tool built with Python code and listed in the `tools:` section of the config file. The agent uses this tool to check if a list of numbers provided by the user are prime numbers.

```
# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json
agent_class: LlmAgent
model: gemini-2.5-flash
name: prime_agent
description: Handles checking if numbers are prime.
instruction: |
  You are responsible for checking whether numbers are prime.
  When asked to check primes, you must call the check_prime tool with a list of integers.
  Never attempt to determine prime numbers manually.
  Return the prime number results to the root agent.
tools:
  - name: ma_llm.check_prime

```


For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/multi_agent_llm_config/prime_agent.yaml).

### Sub-agents example

The following example shows an agent defined with two sub-agents in the `sub_agents:` section, and an example tool in the `tools:` section of the config file. This agent determines what the user wants, and delegates to one of the sub-agents to resolve the request. The sub-agents are defined using Agent Config YAML files.

```
# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json
agent_class: LlmAgent
model: gemini-2.5-flash
name: root_agent
description: Learning assistant that provides tutoring in code and math.
instruction: |
  You are a learning assistant that helps students with coding and math questions.

  You delegate coding questions to the code_tutor_agent and math questions to the math_tutor_agent.

  Follow these steps:
  1. If the user asks about programming or coding, delegate to the code_tutor_agent.
  2. If the user asks about math concepts or problems, delegate to the math_tutor_agent.
  3. Always provide clear explanations and encourage learning.
sub_agents:
  - config_path: code_tutor_agent.yaml
  - config_path: math_tutor_agent.yaml

```


For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/multi_agent_basic_config/root_agent.yaml).

Deploy agent configs
---------------------------------------------------------------

You can deploy Agent Config agents with [Cloud Run](https://google.github.io/adk-docs/deploy/cloud-run/) and [Agent Engine](https://google.github.io/adk-docs/deploy/agent-engine/), using the same procedure as code-based agents. For more information on how to prepare and deploy Agent Config-based agents, see the [Cloud Run](https://google.github.io/adk-docs/deploy/cloud-run/) and [Agent Engine](https://google.github.io/adk-docs/deploy/agent-engine/) deployment guides.

Known limitations
---------------------------------------------------------

The Agent Config feature is experimental and includes the following limitations:

*   **Model support:** Only Gemini models are currently supported. Integration with third-party models is in progress.
*   **Programming language:** The Agent Config feature currently supports only Python code for tools and other functionality requiring programming code.
*   **ADK Tool support:** The following ADK tools are supported by the Agent Config feature, but _not all tools are fully supported_:
    *   `google_search`
    *   `load_artifacts`
    *   `url_context`
    *   `exit_loop`
    *   `preload_memory`
    *   `get_user_choice`
    *   `enterprise_web_search`
    *   `load_web_page`: Requires a fully-qualified path to access web pages.
*   **Agent Type Support:** The `LangGraphAgent` and `A2aAgent` types are not yet supported.
    *   `AgentTool`
    *   `LongRunningFunctionTool`
    *   `VertexAiSearchTool`
    *   `MCPToolset`
    *   `CrewaiTool`
    *   `LangchainTool`
    *   `ExampleTool`

Next steps
-------------------------------------------

For ideas on how and what to build with ADK Agent Configs, see the yaml-based agent definitions in the ADK [adk-samples](https://github.com/search?q=repo:google/adk-python+path:/%5Econtributing%5C/samples%5C//+root_agent.yaml&type=code) repository. For detailed information on the syntax and settings supported by the Agent Config format, see the [Agent Config syntax reference](https://google.github.io/adk-docs/api-reference/agentconfig/).

Back to top

[

Previous

Multi-agent systems



](../multi-agents/)
[

Next

Models & Authentication

](../models/)

Copyright Google 2025  |  [Terms](https://policies.google.com/terms)  |  [Privacy](https://policies.google.com/privacy)  |  [Manage cookies](#__consent)

Made with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

#### Cookie consent

We use cookies to recognize repeated visits and preferences, as well as to measure the effectiveness of our documentation and whether users find the information they need. With your consent, you're helping us to make our documentation better.

*    Google Analytics
*    GitHub

Accept Manage settings

Concise rules for building accessible, fast, delightful UIs Use MUST/SHOULD/NEVER to guide decisions

## Interactions

- Keyboard
  - MUST: Full keyboard support per [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
  - MUST: Visible focus rings (`:focus-visible`; group with `:focus-within`)
  - MUST: Manage focus (trap, move, and return) per APG patterns
- Targets & input
  - MUST: Hit target ≥24px (mobile ≥44px) If visual <24px, expand hit area
  - MUST: Mobile `<input>` font-size ≥16px or set:
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
    ```
  - NEVER: Disable browser zoom
  - MUST: `touch-action: manipulation` to prevent double-tap zoom; set `-webkit-tap-highlight-color` to match design
- Inputs & forms (behavior)
  - MUST: Hydration-safe inputs (no lost focus/value)
  - NEVER: Block paste in `<input>/<textarea>`
  - MUST: Loading buttons show spinner and keep original label
  - MUST: Enter submits focused text input In `<textarea>`, ⌘/Ctrl+Enter submits; Enter adds newline
  - MUST: Keep submit enabled until request starts; then disable, show spinner, use idempotency key
  - MUST: Don’t block typing; accept free text and validate after
  - MUST: Allow submitting incomplete forms to surface validation
  - MUST: Errors inline next to fields; on submit, focus first error
  - MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`
  - SHOULD: Disable spellcheck for emails/codes/usernames
  - SHOULD: Placeholders end with ellipsis and show example pattern (eg, `+1 (123) 456-7890`, `sk-012345…`)
  - MUST: Warn on unsaved changes before navigation
  - MUST: Compatible with password managers & 2FA; allow pasting one-time codes
  - MUST: Trim values to handle text expansion trailing spaces
  - MUST: No dead zones on checkboxes/radios; label+control share one generous hit target
- State & navigation
  - MUST: URL reflects state (deep-link filters/tabs/pagination/expanded panels) Prefer libs like [nuqs](https://nuqs.dev)
  - MUST: Back/Forward restores scroll
  - MUST: Links are links—use `<a>/<Link>` for navigation (support Cmd/Ctrl/middle-click)
- Feedback
  - SHOULD: Optimistic UI; reconcile on response; on failure show error and rollback or offer Undo
  - MUST: Confirm destructive actions or provide Undo window
  - MUST: Use polite `aria-live` for toasts/inline validation
  - SHOULD: Ellipsis (`…`) for options that open follow-ups (eg, “Rename…”)
- Touch/drag/scroll
  - MUST: Design forgiving interactions (generous targets, clear affordances; avoid finickiness)
  - MUST: Delay first tooltip in a group; subsequent peers no delay
  - MUST: Intentional `overscroll-behavior: contain` in modals/drawers
  - MUST: During drag, disable text selection and set `inert` on dragged element/containers
  - MUST: No “dead-looking” interactive zones—if it looks clickable, it is
- Autofocus
  - SHOULD: Autofocus on desktop when there’s a single primary input; rarely on mobile (to avoid layout shift)

## Animation

- MUST: Honor `prefers-reduced-motion` (provide reduced variant)
- SHOULD: Prefer CSS > Web Animations API > JS libraries
- MUST: Animate compositor-friendly props (`transform`, `opacity`); avoid layout/repaint props (`top/left/width/height`)
- SHOULD: Animate only to clarify cause/effect or add deliberate delight
- SHOULD: Choose easing to match the change (size/distance/trigger)
- MUST: Animations are interruptible and input-driven (avoid autoplay)
- MUST: Correct `transform-origin` (motion starts where it “physically” should)

## Layout

- SHOULD: Optical alignment; adjust by ±1px when perception beats geometry
- MUST: Deliberate alignment to grid/baseline/edges/optical centers—no accidental placement
- SHOULD: Balance icon/text lockups (stroke/weight/size/spacing/color)
- MUST: Verify mobile, laptop, ultra-wide (simulate ultra-wide at 50% zoom)
- MUST: Respect safe areas (use env(safe-area-inset-*))
- MUST: Avoid unwanted scrollbars; fix overflows

## Content & Accessibility

- SHOULD: Inline help first; tooltips last resort
- MUST: Skeletons mirror final content to avoid layout shift
- MUST: `<title>` matches current context
- MUST: No dead ends; always offer next step/recovery
- MUST: Design empty/sparse/dense/error states
- SHOULD: Curly quotes (“ ”); avoid widows/orphans
- MUST: Tabular numbers for comparisons (`font-variant-numeric: tabular-nums` or a mono like Geist Mono)
- MUST: Redundant status cues (not color-only); icons have text labels
- MUST: Don’t ship the schema—visuals may omit labels but accessible names still exist
- MUST: Use the ellipsis character `…` (not ``)
- MUST: `scroll-margin-top` on headings for anchored links; include a “Skip to content” link; hierarchical `<h1–h6>`
- MUST: Resilient to user-generated content (short/avg/very long)
- MUST: Locale-aware dates/times/numbers/currency
- MUST: Accurate names (`aria-label`), decorative elements `aria-hidden`, verify in the Accessibility Tree
- MUST: Icon-only buttons have descriptive `aria-label`
- MUST: Prefer native semantics (`button`, `a`, `label`, `table`) before ARIA
- SHOULD: Right-clicking the nav logo surfaces brand assets
- MUST: Use non-breaking spaces to glue terms: `10&nbsp;MB`, `⌘&nbsp;+&nbsp;K`, `Vercel&nbsp;SDK`

## Performance

- SHOULD: Test iOS Low Power Mode and macOS Safari
- MUST: Measure reliably (disable extensions that skew runtime)
- MUST: Track and minimize re-renders (React DevTools/React Scan)
- MUST: Profile with CPU/network throttling
- MUST: Batch layout reads/writes; avoid unnecessary reflows/repaints
- MUST: Mutations (`POST/PATCH/DELETE`) target <500 ms
- SHOULD: Prefer uncontrolled inputs; make controlled loops cheap (keystroke cost)
- MUST: Virtualize large lists (eg, `virtua`)
- MUST: Preload only above-the-fold images; lazy-load the rest
- MUST: Prevent CLS from images (explicit dimensions or reserved space)

## Design

- SHOULD: Layered shadows (ambient + direct)
- SHOULD: Crisp edges via semi-transparent borders + shadows
- SHOULD: Nested radii: child ≤ parent; concentric
- SHOULD: Hue consistency: tint borders/shadows/text toward bg hue
- MUST: Accessible charts (color-blind-friendly palettes)
- MUST: Meet contrast—prefer [APCA](https://apcacontrastcom/) over WCAG 2
- MUST: Increase contrast on `:hover/:active/:focus`
- SHOULD: Match browser UI to bg
- SHOULD: Avoid gradient banding (use masks when needed)


├── apps/
│   ├── frontend/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   └── src/
│   │       ├── pages/
│   │       │   ├── index.tsx
│   │       │   ├── tasks.tsx
│   │       │   ├── agents/[agentId].tsx
│   │       └── components/
│   │           ├── TaskForm.tsx
│   │           ├── AgentConsole.tsx
│   │           └── VNCViewer.tsx
│   │
│   ├── backend/
│   │   ├── pyproject.toml / requirements.txt
│   │   ├── main.py or app.py
│   │   ├── buffoon/
│   │   │   ├── __init__.py
│   │   │   ├── routers/
│   │   │   │   ├── tasks.py
│   │   │   │   ├── agents.py
│   │   │   │   └── health.py
│   │   │   ├── services/
│   │   │   │   ├── sandbox_manager.py
│   │   │   │   └── agent_planner.py
│   │   │   ├── schemas/
│   │   │   │   ├── TaskRequest.py
│   │   │   │   └── AgentState.py
│   │   │   └── models/  # if using DB
│   │   └── backend_utils/
│   │       └── logger.py
│   │
│   └── sandbox/
│       ├── Dockerfile
│       ├── entrypoint.sh
│       ├── agent_runner.py
│       ├── cdp_client.py / playwright_runner.py
│       ├── tools/
│       │   ├── browser/
│       │   │   ├── navigate.py
│       │   │   ├── extract.py
│       │   │   └── click.py
│       │   ├── file/
│       │   │   ├── read.py
│       │   │   └── write.py
│       │   └── shell/
│       │       ├── execute.py
│       │       └── list_dir.py
│       ├── storage/
│       │   └── sessions/     # persistent agent state if needed
│       └── config/
│           ├── sandbox_config.yaml
│           └── tool_registry.json
│
├── packages/
│   ├── shared-types/
│   │   ├── package.json
│   │   ├── index.ts
│   │   └── agent.ts
│   └── utilities/
│       ├── package.json
│       ├── logger.ts
│       └── helpers.ts
│
├── docker-compose.yml
├── docker-compose.dev.yml
├── .env.example
├── scripts/
│   ├── dev.sh
│   ├── build.sh
│   └── deploy.sh
└── README.md


---

🧩 Technology Choices (Buffoon Plan)

Frontend: Next.js with TypeScript

Backend: FastAPI (good async support)

Agent Engine: either CDP or Playwright

Sandboxing: Docker containers (one container per agent)

Communication: WebSockets between frontend ↔ backend; backend ↔ sandbox

Streaming / UI: Use noVNC or WebRTC or periodic screenshots via WebSocket

State / Queues: Redis or RabbitMQ + Postgres (or Mongo)



---

🎬 First Milestone (MVP) Tasks

1. Scaffold monorepo and initialize git


2. Build a simple Next.js UI “Submit Task” screen


3. Build backend route POST /tasks that accepts a task string


4. Sandbox container minimal: logs “agent running task X”


5. Backend launches the sandbox container with task payload


6. Frontend shows a status page (pending / running / done)


7. Once container finishes, it writes a JSON result; backend collects it and shows to UI



That MVP doesn’t do real browsing yet — it ensures the pipeline is wired.


---
