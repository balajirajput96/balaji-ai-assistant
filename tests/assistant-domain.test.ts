import { describe, expect, it } from "vitest";
import { initialAssistantSnapshot, makeLocalAcknowledgement, makeTaskFromRequest, stageLabel } from "../lib/assistant/domain";

describe("assistant local domain", () => {
  it("ships a transparent local-only initial state", () => {
    expect(initialAssistantSnapshot.messages[0].content).toContain("on this device");
    expect(initialAssistantSnapshot.tasks[0].stage).toBe("blocked");
  });

  it("creates a bounded local task without claiming provider execution", () => {
    const task = makeTaskFromRequest("Research neuroplasticity", new Date("2026-08-22T01:00:00.000Z"));
    expect(task.title).toBe("Research neuroplasticity");
    expect(task.stage).toBe("blocked");
    expect(task.detail).toContain("approved AI provider");
  });

  it("creates an honest local acknowledgement", () => {
    expect(makeLocalAcknowledgement(new Date("2026-08-22T01:00:00.000Z")).content).toContain("not sent");
    expect(stageLabel("blocked")).toBe("Needs setup");
  });
});
