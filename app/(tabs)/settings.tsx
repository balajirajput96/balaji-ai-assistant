import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { SectionCard, StatusPill, TextAction } from "@/components/assistant-ui";
import { useAssistantStore } from "@/hooks/use-assistant-store";
import { useColors } from "@/hooks/use-colors";

const destinations = [
  { slug: "documents", title: "Documents", detail: "Local document capabilities" },
  { slug: "memory", title: "Memory & privacy", detail: "Local retention and deletion controls" },
  { slug: "connectors", title: "Connectors", detail: "Integrations and permission health" },
  { slug: "usage", title: "Usage", detail: "Provider and quota visibility" },
] as const;

export default function SettingsScreen() {
  const colors = useColors();
  const { clearLocalData } = useAssistantStore();
  const confirmReset = () => Alert.alert("Delete local assistant data?", "This removes saved messages, tasks, research drafts, and local automation notes from this device.", [
    { text: "Cancel", style: "cancel" },
    { text: "Delete", style: "destructive", onPress: () => void clearLocalData() },
  ]);

  return (
    <ScreenContainer className="px-5">
      <View style={styles.content}>
        <View style={styles.heading}><Text style={[styles.title, { color: colors.foreground }]}>Settings</Text><Text style={[styles.subtitle, { color: colors.muted }]}>Control what stays on this device and review what is not yet configured.</Text></View>
        <SectionCard title="Assistant mode" subtitle="This is a local-first foundation. No external AI, connector, or cloud sync is active."><StatusPill label="Local only" tone="success" /></SectionCard>
        <View style={styles.group}>
          {destinations.map((item) => <Pressable key={item.slug} onPress={() => router.push({ pathname: "/feature/[feature]", params: { feature: item.slug } } as never)} accessibilityRole="button" accessibilityLabel={item.title} style={({ pressed }) => [styles.row, { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.65 : 1 }]}><View><Text style={[styles.rowTitle, { color: colors.foreground }]}>{item.title}</Text><Text style={[styles.rowDetail, { color: colors.muted }]}>{item.detail}</Text></View><Text style={[styles.chevron, { color: colors.muted }]}>›</Text></Pressable>)}
        </View>
        <TextAction label="Delete local assistant data" accessibilityHint="Permanently clears data stored on this device" onPress={confirmReset} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 18, gap: 16 },
  heading: { gap: 6 },
  title: { fontSize: 34, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 15, lineHeight: 21 },
  group: { gap: 8 },
  row: { minHeight: 74, borderRadius: 16, borderWidth: StyleSheet.hairlineWidth, paddingHorizontal: 16, paddingVertical: 13, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  rowTitle: { fontSize: 16, fontWeight: "700" },
  rowDetail: { marginTop: 3, fontSize: 13 },
  chevron: { fontSize: 30, fontWeight: "300" },
});
