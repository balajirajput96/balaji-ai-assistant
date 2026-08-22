# Troubleshooting

| Symptom | Likely cause | Safe response |
| --- | --- | --- |
| A request only creates a task | The first foundation intentionally has no model provider. | Review the provider status; do not claim the request was processed remotely. |
| Research has no citations | No approved research source is configured. | Save the question locally; configure provenance and source retrieval before enabling research. |
| Automation is paused | There is no verified server-side scheduler. | Record the blocker; do not promise 24×7 mobile background execution. |
| Connector shows no connection | No OAuth/MCP/API integration is configured. | Start only from an explicit, authenticated provider connection flow. |
| Local history disappears | Local data was reset or device storage was cleared. | Restore only from a user-approved backup or future sync mechanism; do not fabricate history. |
| Native feature does not work in browser | Browser behavior differs from the mobile runtime. | Test on an Expo-compatible device or emulator with the relevant permission flow. |
