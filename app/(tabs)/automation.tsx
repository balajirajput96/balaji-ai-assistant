import { StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { PrimaryButton, SectionCard, StatusPill } from "@/components/assistant-ui";
import { useAssistantStore } from "@/hooks/use-assistant-store";
import { useColors } from "@/hooks/use-colors";

export default function AutomationScreen() {
  const colors = useColors();
  const { snapshot, recordAutomationBlocker } = useAssistantStore();
  return (
    <ScreenContainer className="px-5">
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={[styles.title, { color: colors.foreground }]}>Automation</Text>
          <Text style={[styles.subtitle, { color: colors.muted }]}>Workflows are designed to be reviewable. This local build does not claim a persistent scheduler.</Text>
        </View>
        <SectionCard title="Daily assistant review" subtitle="A future server-side scheduler can run provider-approved, logged workflows.">
          <StatusPill label="Not configured" tone="warning" />
          <View style={styles.buttonWrap}><PrimaryButton label="Record setup requirement" onPress={() => void recordAutomationBlocker()} /></View>
        </SectionCard>
        <SectionCard title="Latest event" subtitle={snapshot.lastAutomationEvent ?? "No automation events have been recorded locally."}>
          <StatusPill label="Paused safely" tone="neutral" />
        </SectionCard>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 18, gap: 16 },
  heading: { gap: 6 },
  title: { fontSize: 34, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 15, lineHeight: 21 },
  buttonWrap: { marginTop: 14 },
});
