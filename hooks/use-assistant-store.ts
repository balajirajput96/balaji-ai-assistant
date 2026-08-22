import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import {
  initialAssistantSnapshot,
  makeLocalAcknowledgement,
  makeTaskFromRequest,
  type AssistantSnapshot,
} from "@/lib/assistant/domain";

const STORAGE_KEY = "balaji-ai-assistant.snapshot.v1";

async function readSnapshot(): Promise<AssistantSnapshot> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return initialAssistantSnapshot;
  try {
    const parsed = JSON.parse(raw) as AssistantSnapshot;
    return {
      ...initialAssistantSnapshot,
      ...parsed,
      messages: Array.isArray(parsed.messages) ? parsed.messages : initialAssistantSnapshot.messages,
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : initialAssistantSnapshot.tasks,
    };
  } catch {
    return initialAssistantSnapshot;
  }
}

async function writeSnapshot(next: AssistantSnapshot) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function useAssistantStore() {
  const [snapshot, setSnapshot] = useState<AssistantSnapshot>(initialAssistantSnapshot);
  const [isReady, setIsReady] = useState(false);

  const refresh = useCallback(async () => {
    const next = await readSnapshot();
    setSnapshot(next);
    setIsReady(true);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const submitRequest = useCallback(async (input: string) => {
    const normalized = input.trim();
    if (!normalized) return false;
    const current = await readSnapshot();
    const now = new Date();
    const next: AssistantSnapshot = {
      ...current,
      messages: [
        ...current.messages,
        { id: `user-${now.getTime()}`, role: "user", content: normalized, createdAt: now.toISOString() },
        makeLocalAcknowledgement(now),
      ],
      tasks: [makeTaskFromRequest(normalized, now), ...current.tasks],
    };
    await writeSnapshot(next);
    setSnapshot(next);
    return true;
  }, []);

  const saveResearchDraft = useCallback(async (query: string) => {
    const normalized = query.trim();
    if (!normalized) return false;
    const current = await readSnapshot();
    const next = { ...current, savedResearchQuery: normalized };
    await writeSnapshot(next);
    setSnapshot(next);
    return true;
  }, []);

  const recordAutomationBlocker = useCallback(async () => {
    const current = await readSnapshot();
    const next = {
      ...current,
      lastAutomationEvent: "Automation remains paused because no verified background scheduler has been configured.",
    };
    await writeSnapshot(next);
    setSnapshot(next);
  }, []);

  const clearLocalData = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setSnapshot(initialAssistantSnapshot);
  }, []);

  return {
    snapshot,
    isReady,
    refresh,
    submitRequest,
    saveResearchDraft,
    recordAutomationBlocker,
    clearLocalData,
  };
}
