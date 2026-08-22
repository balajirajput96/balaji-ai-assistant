# Architecture Research — First Foundation

## Current Architecture Decision

The first foundation is a **local-first Expo mobile client**. Conversation drafts, task records, saved research questions, and automation blocker notes are persisted in device storage. This prevents the app from implying that user content is being sent to an AI provider before such a provider has been explicitly enabled and tested.

| Capability | First-foundation state | Rationale | Future boundary |
| --- | --- | --- | --- |
| Chat workspace | Implemented as local request/task capture | A truthful assistant entry point is more useful than an empty prototype. | Server-side LLM procedure after provider routing, safety controls, and cost limits are implemented. |
| Task history | Implemented locally | Tasks must be inspectable even when processing is unavailable. | Optional authenticated sync after a cloud-account requirement is explicit. |
| Research | Local query drafting only | Sources and citations must not be fabricated. | Source adapter with provenance, extraction, cross-checking, and citations. |
| Document understanding | Not configured | Uploading or processing a document needs an approved storage/processing path. | Private upload, parse, index, retrieve, cite flow. |
| Connected tools | Not configured | External services need explicit permissions, OAuth, health checks, and audit controls. | MCP/OAuth connection broker with consent and least privilege. |
| Automation | Paused with a visible blocker | A mobile client should not claim 24×7 execution. | Server-side scheduler with logs, retries, and owner controls. |

The app does not embed credentials. Any model or tool invocation will remain server-side. If an MCP client is added, it must treat remote authorization and discovery as security-sensitive: the protocol specification requires HTTPS OAuth endpoints, PKCE, resource binding, secure token handling, and rejection of token passthrough.[1]

## Deployment and Play Preparation Constraint

No deployment or Play submission has been performed. Current Google guidance states that, from 31 August 2026, new Play submissions must target Android 16 / API level 36 or higher. The final release checklist must also include an accurate Data safety declaration and privacy policy, even if the app does not collect user data.[2] [3]

## References

[1] [Model Context Protocol — Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)

[2] [Android Developers — Target API level requirement](https://developer.android.com/google/play/requirements/target-sdk)

[3] [Google Play Console Help — Data safety section](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)
