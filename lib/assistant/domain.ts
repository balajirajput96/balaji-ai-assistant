export type TaskStage = "queued" | "blocked" | "completed";

export type AssistantMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

export type AssistantTask = {
  id: string;
  title: string;
  stage: TaskStage;
  createdAt: string;
  detail: string;
};

export type AssistantSnapshot = {
  messages: AssistantMessage[];
  tasks: AssistantTask[];
  savedResearchQuery?: string;
  lastAutomationEvent?: string;
};

export const initialAssistantSnapshot: AssistantSnapshot = {
  messages: [
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome. This foundation keeps your requests on this device until an AI provider is deliberately connected.",
      createdAt: "2026-08-22T00:00:00.000Z",
    },
  ],
  tasks: [
    {
      id: "provider-readiness",
      title: "Connect an AI provider",
      stage: "blocked",
      createdAt: "2026-08-22T00:00:00.000Z",
      detail: "No external model provider is configured in this local-first foundation.",
    },
  ],
};

export function makeTaskFromRequest(input: string, now = new Date()): AssistantTask {
  const title = input.trim().replace(/\s+/g, " ").slice(0, 72) || "Untitled request";
  return {
    id: `task-${now.getTime()}`,
    title,
    stage: "blocked",
    createdAt: now.toISOString(),
    detail: "Saved locally. An approved AI provider is required before this request can be processed.",
  };
}

export function makeLocalAcknowledgement(now = new Date()): AssistantMessage {
  return {
    id: `assistant-${now.getTime()}`,
    role: "assistant",
    createdAt: now.toISOString(),
    content:
      "Your request was saved locally as a task. This app has not sent it to an AI provider, because no provider is configured yet.",
  };
}

export function stageLabel(stage: TaskStage) {
  if (stage === "completed") return "Completed";
  if (stage === "queued") return "Queued";
  return "Needs setup";
}
