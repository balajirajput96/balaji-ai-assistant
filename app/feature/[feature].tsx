import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { SectionCard, StatusPill } from "@/components/assistant-ui";
import { useColors } from "@/hooks/use-colors";

const featureCopy = {
  documents: { title: "Documents", status: "Not configured", body: "Document upload, parsing, indexing, and source citations need an approved processing path. No file has been transmitted from this app." },
  memory: { title: "Memory & privacy", status: "Local ready", body: "Messages, tasks, research drafts, and automation notes are stored locally in this foundation. Use Settings to delete them from the device." },
  connectors: { title: "Connectors", status: "No connections", body: "This app has no external connectors. Each future connection must show its provider, permissions, and health before it can be used." },
  usage: { title: "Usage", status: "No provider usage", body: "No external AI provider has been called by this app, so there is no model usage or quota figure to display." },
} as const;

export default function FeatureScreen() {
  const colors = useColors();
  const { feature } = useLocalSearchParams<{ feature: keyof typeof featureCopy }>();
  const copy = useMemo(() => featureCopy[feature] ?? featureCopy.usage, [feature]);
  const tone = copy.status === "Local ready" ? "success" : "warning";
  return (
    <ScreenContainer className="px-5" edges={["top", "bottom", "left", "right"]}>
      <Stack.Screen options={{ title: copy.title, headerShown: true }} />
      <View style={styles.content}><Text style={[styles.title, { color: colors.foreground }]}>{copy.title}</Text><SectionCard title="Current state" subtitle={copy.body}><StatusPill label={copy.status} tone={tone} /></SectionCard></View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({ content: { paddingVertical: 18, gap: 16 }, title: { fontSize: 28, fontWeight: "800", letterSpacing: -0.5 } });
