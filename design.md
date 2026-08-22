# Balaji AI Assistant — Mobile Interface Design

## Product Intent

Balaji AI Assistant is a privacy-first, mobile-first personal assistant. The first release prioritizes an immediate chat experience while giving the user a truthful view of research, tasks, local memory, connected services, and automation readiness. The design is optimized for **one-handed portrait use (9:16)** and follows mainstream iOS conventions: a clear large-title hierarchy, 44-point minimum touch targets, calm surfaces, native sheets for secondary actions, and visibly disabled states where a capability has not yet been configured.

## Screen List and Primary Content

| Screen | Primary content and functionality | Portrait layout |
| --- | --- | --- |
| Home / Chat | Conversation thread, new-task composer, voice affordance, attachment entry point, quick actions, current task status, and recent work. | Large greeting and status chip at the top; scrollable conversation in the middle; bottom composer with attachment, microphone, and send controls within thumb reach. |
| Task Detail | Objective, state, step timeline, tool activity, output, errors, and retry guidance. | A compact status header followed by chronological cards; destructive actions live in a bottom sheet. |
| Research | Search query, saved evidence, source cards, citations, and research status. | Search field at top, segmented filter below, then source cards with publication/source provenance. |
| Documents | Local documents, processing state, searchable excerpts, and source references. | List-first view with an upload action in the navigation bar; empty state describes supported local processing. |
| Memory | User preferences, saved items, semantic-memory readiness, export/delete actions. | Grouped Settings-style sections; each row makes retention status explicit. |
| Automation | Scheduled workflows, run history, pause/resume controls, and blocker states. | A primary workflow card followed by chronological execution rows; unavailable remote scheduling is labelled, not simulated. |
| Connectors | GitHub, MCP/API-compatible services, permissions, health status, and disconnect/revoke entry points. | Grouped connection cards with state labels: Connected, Not configured, or Needs attention. |
| Usage | Provider state, local feature availability, quota disclosures, and fallback state. | Simple metric cards only for verified data; unknown values show “Not available”. |
| Settings | Appearance, privacy, notifications, permission explanations, model/provider configuration, data export/delete. | Native grouped-list pattern with disclosure rows and confirmations for sensitive changes. |

## Key User Flows

| User goal | Flow |
| --- | --- |
| Start an assistant request | Open app → type or tap microphone → request is classified locally → chat displays a progress state → user receives a response or a clear unavailable/configuration state. |
| Review an agent task | From Home tap task status → Task Detail → inspect timeline and result → retry only when a recoverable local error is shown. |
| Save research | Open Research → submit a query → inspect source cards → open citation details → save evidence to local research history. |
| Manage a future automation | Open Automation → inspect workflow state → enable/disable only when a verified scheduler/backend is configured → otherwise see the exact prerequisite. |
| Control privacy | Open Settings → Privacy & Memory → review local retention → export or delete using explicit confirmation. |

## Information Architecture

The initial tab bar uses five top-level destinations: **Chat**, **Tasks**, **Research**, **Automation**, and **Settings**. Documents, Memory, Connectors, and Usage are entered from contextual cards or Settings, preventing the tab bar from becoming crowded. This preserves direct access to the most frequent actions and keeps one-handed navigation practical.

## Color and Type Choices

The product uses a calm technical palette tailored to an AI assistant rather than a generic neon treatment. The primary brand color is **Indigo Ink `#3F3CFF`**, paired with **Signal Cyan `#18B6C9`** for active progress. Surfaces are **Cloud `#F7F8FC`** in light mode and **Midnight `#10121D`** in dark mode. Primary text is **Graphite `#171923`** / **Mist `#F1F2F8`**, while success, warning, and error states use **Verified Green `#1E9B61`**, **Amber `#B86A00`**, and **Rose `#C83E5A`**. Typography uses the platform system font with a 34-point large title, 22-point section title, 17-point body, and 13-point metadata size.

## Accessibility and Truthfulness Rules

Every interactive element has a visible label, voice-over accessible name, pressed feedback, and 44-point target. Color never carries status alone. No feature is represented as working until a local or server-backed implementation has been verified. Provider, connector, sync, voice, and automation cards disclose whether they are available, locally ready, or blocked by a required configuration.
