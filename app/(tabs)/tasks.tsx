import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { SectionCard, StatusPill } from "@/components/assistant-ui";
import { stageLabel } from "@/lib/assistant/domain";
import { useAssistantStore } from "@/hooks/use-assistant-store";
import { useColors } from "@/hooks/use-colors";

export default function TasksScreen() {
  const colors = useColors();
  const { snapshot, refresh, isReady } = useAssistantStore();
  const renderTask = ({ item }: { item: (typeof snapshot.tasks)[number] }) => (
    <SectionCard title={item.title} subtitle={item.detail}>
      <View style={styles.metaRow}>
        <StatusPill label={stageLabel(item.stage)} tone={item.stage === "blocked" ? "warning" : "neutral"} />
        <Text style={[styles.time, { color: colors.muted }]}>{new Date(item.createdAt).toLocaleDateString()}</Text>
      </View>
    </SectionCard>
  );

  return (
    <ScreenContainer className="px-5">
      <FlatList
        data={snapshot.tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={styles.list}
        refreshControl={<RefreshControl refreshing={!isReady} onRefresh={() => void refresh()} tintColor={colors.primary} />}
        ListHeaderComponent={<View style={styles.heading}><Text style={[styles.title, { color: colors.foreground }]}>Tasks</Text><Text style={[styles.subtitle, { color: colors.muted }]}>Local task history stays on this device until you enable a provider.</Text></View>}
        ListEmptyComponent={<Text style={[styles.subtitle, { color: colors.muted }]}>No local tasks yet.</Text>}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: { paddingVertical: 18, gap: 12 },
  heading: { gap: 6, marginBottom: 6 },
  title: { fontSize: 34, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 15, lineHeight: 21 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  time: { fontSize: 13 },
});
