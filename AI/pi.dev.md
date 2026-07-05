# pi.dev coding agent app

## Setup

Install

	npm install -g --ignore-scripts @earendil-works/pi-coding-agent

Install extensions

	pi install npm:pi-lmstudio
	pi install npm:pi-subagents

Launch

	pi

## Configuration

Configure extension `pi-lmstudio` in file `~/.pi/agent/lmstudio.json`

```json
{ "url": "http://127.0.0.1:1235" }
```

Configure LM Studio integration without extension, in file `~/.pi/agent/models.json`.
Without extension, we do not have context fill ratio indicator.

```json
{
    "providers": {
        "lmstudio": {
            "baseUrl": "http://localhost:1235/v1",
            "api": "openai-completions",
            "apiKey": "lm-studio",
            "models": [
                {
                    "id": "qwen/qwen3.6-27b",
                    "input": [
                        "text"
                    ]
                }
            ]
        }
    }
}
```

Configure extension `pi-subagents` in file `~/.pi/agent/extensions/subagent`

```json
{ "globalConcurrencyLimit": 1 }
```
