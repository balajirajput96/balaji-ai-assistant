# Product Analysis — First Foundation

The endorsed product scope combines chat, task execution, research, documents, memory, automation, connected tools, usage visibility, and privacy controls. This scope cannot responsibly be represented by a single “chat” screen. The product therefore starts with a narrow but real local assistant workspace and exposes unavailable capabilities as configuration states rather than mock outputs.

| User expectation | Initial product response | Evidence threshold before claiming availability |
| --- | --- | --- |
| “Talk to the assistant” | A local composer persists the request and creates an inspectable task. | A server request must return a verified model response. |
| “Research a question” | A research prompt can be saved locally. | Sources must be retrieved, attributable, and linked to citations. |
| “Automate this” | The automation screen explains that no background scheduler is configured. | A server-side workflow needs logs, status, retry behavior, and a tested trigger. |
| “Connect my tool” | The connector status remains empty. | Provider, permission scope, consent, health check, and revoke path must exist. |
| “Keep my data private” | Local retention and deletion controls are visible. | Any cloud retention requires a disclosed policy and a tested deletion path. |

The near-term product priority is not feature count. It is a trustworthy request-to-status loop that lets users understand whether data stayed local, is queued, is blocked, or has actually been processed.
