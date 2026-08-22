# Setup

## Local Development

Install dependencies with the project package manager and then run the verification scripts:

```bash
pnpm test
pnpm check
pnpm lint
```

Start the development services with `pnpm dev`. Use an Expo-compatible device or emulator for native feature validation; do not treat a browser render as proof of microphone, local storage, notification, or background behavior.

## Configuration

The first foundation needs no user-supplied API key. It stores assistant state locally. Do not add model, OAuth, MCP, or storage credentials to application source, app assets, logs, or the mobile bundle.

## Future Feature Setup

Before enabling a remote capability, create a server-side implementation, define the data path and retention behavior, add focused tests, update `docs/PRIVACY.md`, document an unavailable/failure state, and then add the user-facing setting or consent flow.
