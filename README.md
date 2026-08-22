# Balaji AI Assistant

Balaji AI Assistant is a mobile-first, privacy-first assistant foundation. It is designed to grow into an AI chat, task, research, document, connector, memory, and automation workspace without pretending that unconfigured providers or background services are already working.

## Verified First Foundation

The current build provides a local Chat workspace, a device-local task timeline, local research-question drafting, an automation readiness screen, privacy controls, status surfaces for documents/connectors/usage, accessible dark/light styling, and a destructive local-data reset control. Requests are saved as local tasks; **no external AI model, web research source, document processor, connector, scheduler, cloud sync, or deployment is active**.

## Product Boundaries

| Capability | Current state | What must exist before it is enabled |
| --- | --- | --- |
| AI responses | Not connected | Server-side provider routing, error handling, request limits, and transparent usage disclosure. |
| Voice input/output | Not connected | Permission flow, audio capture/playback handling, transcription/voice service path, and failure states. |
| Document understanding | Not configured | Upload storage, parse/index/retrieve pipeline, retention choice, and citations. |
| Web research | Not configured | Approved source adapter, provenance, cross-checking, and attribution. |
| Connected tools / MCP | Not connected | User-initiated consent, scopes, health checks, OAuth/token security, and audit controls. |
| Automation | Paused safely | Server-side scheduler, run logs, retries, owner controls, and a defined operating cost. |
| Google Play release | Not prepared | Final Android target, policy/disclosure review, signing, test evidence, assets, and Play Console configuration. |

## Development

Use the project’s package manager scripts from the project root.

```bash
pnpm test
pnpm check
pnpm lint
pnpm dev
```

The test suite verifies deterministic local assistant-domain behavior. Native preview validation should be performed on an Expo-compatible device or emulator once the relevant features are complete.

## Documentation

The `research/` directory records the initial architecture, product, UX, agent, MCP, RAG, service, community-feedback, and source-license analysis. `docs/` contains the engineering log, security and privacy boundaries, architecture details, setup notes, and troubleshooting guidance.

## Safety and Privacy

The application does not embed third-party credentials. Local data can be deleted from Settings. New networked features must be implemented server-side, must disclose their data behavior, and must never circumvent account security, quotas, payment requirements, or access controls.
