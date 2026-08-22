# Architecture

## First-Foundation Topology

```text
Mobile UI (Expo Router)
        │
        ├── Local assistant domain model
        │      └── AsyncStorage snapshot
        │
        ├── Task / research / automation status surfaces
        │      └── Explicit local or unavailable state
        │
        └── Future server boundary
               ├── AI provider router
               ├── document storage and retrieval
               ├── research source adapters
               ├── connector/OAuth broker
               └── scheduler and notifications
```

The mobile client is intentionally not a direct bearer of model or tool credentials. A future server layer will be necessary for external AI, uploads, authenticated sync, webhooks, connector authorization, scheduled runs, and owner notifications.

## Domain Vocabulary

| Entity | Current representation | Future evolution |
| --- | --- | --- |
| Message | Local role, content, timestamp | Conversation IDs, provider metadata, citations, redaction state. |
| Task | Local title, stage, timestamp, detail | Plan, tool calls, retry count, audit trail, resumable execution. |
| Research query | Local saved string | Source records, extracts, citations, provenance, confidence. |
| Automation event | Local blocker note | Workflow definition, schedule, logs, controlled retries, outcome. |
| Connector | Status-only UI | Provider identity, scope, consent, OAuth state, health, revoke action. |

## Non-Goals of the First Foundation

This release does not claim autonomous tool use, AI reasoning, transcription, document parsing, RAG, external scheduling, background execution, cross-device sync, or Play Store readiness. These require independent implementation and verification.
