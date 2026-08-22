# Free-First Services Analysis — First Foundation

The product must not bypass payment or quota requirements. The first foundation uses local storage and no external provider calls, so it has no provider usage charge attributable to app requests.

| Service category | Current state | Cost or quota risk | Planned control |
| --- | --- | --- | --- |
| Local request/task storage | Implemented on-device | Device storage capacity | Clear local data control and bounded payloads. |
| Built-in AI service | Available to the project platform but not connected to the UI | Project-credit consumption per request | Server-side only, provider status, budget/cap limits, and clear unavailable fallback. |
| Web research | Not configured | API limits, source terms, citation quality | Approved source adapter and source provenance. |
| MCP/connected tools | Not configured | OAuth permissions and third-party billing | Explicit connect, scope review, health check, revoke path. |
| Persistent automation | Not configured | Hosting and external-service usage | Server-side scheduler only after operating cost and retry bounds are defined. |

The “free-first” strategy means features degrade visibly when a limit or prerequisite is unavailable. It does not mean limits, payment, access controls, or provider policies are circumvented.
