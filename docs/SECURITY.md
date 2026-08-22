# Security Boundaries

The current foundation keeps assistant requests and task state in local device storage. It does not contain an API key, OAuth token, MCP token, third-party connector, active model invocation, background worker, or remote deployment.

Future external capabilities must be server-side, validated, permission-scoped, logged without secrets, and independently tested. Connected tools must not be trusted solely because an endpoint is supplied in a prompt; connection setup requires explicit user action, provider identity, consent, scope visibility, and health checking. Any MCP implementation must adopt the authorization and SSRF controls documented in `research/mcp-analysis.md`.

Data deletion is currently implemented as deletion of the app’s local assistant snapshot. This does not claim deletion from any external system because none is configured.
