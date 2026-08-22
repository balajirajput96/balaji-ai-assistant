# MCP Analysis — First Foundation

MCP is a useful future interoperability layer for the assistant, but it is not safe to represent an arbitrary endpoint as trusted. The authorization specification describes OAuth 2.1 authorization for HTTP transports, protected-resource metadata discovery, PKCE, resource indicators, audience-bound tokens, and HTTPS requirements.[1]

The security guidance additionally identifies confused-deputy, token-passthrough, SSRF, redirect, and state-handle risks. It calls for per-client consent, exact redirect validation, server-side state binding, HTTPS, private-address blocking for discovery, and separation between inbound MCP tokens and downstream API tokens.[2]

The roadmap is therefore: show a read-only connector inventory, require explicit user-initiated authorization, persist only secure server-side connection metadata, show scopes and health, redact secrets from logs, and never execute tools from arbitrary prompt content.

## References

[1] [Model Context Protocol — Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)

[2] [Model Context Protocol — Security best practices](https://modelcontextprotocol.io/docs/draft/tutorials/security/security_best_practices)
