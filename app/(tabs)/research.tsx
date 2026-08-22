import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { PrimaryButton, SectionCard, StatusPill } from "@/components/assistant-ui";
import { useAssistantStore } from "@/hooks/use-assistant-store";
import { useColors } from "@/hooks/use-colors";

export default function ResearchScreen() {
  const colors = useColors();
  const { snapshot, saveResearchDraft } = useAssistantStore();
  const [query, setQuery] = useState(snapshot.savedResearchQuery ?? "");

  const handleSave = async () => {
    if (!(await saveResearchDraft(query))) {
      Alert.alert("Enter a question", "Add a research question before saving it locally.");
      return;
    }
    Alert.alert("Saved locally", "No web search has been started. Configure an approved research source before requesting evidence.");
  };

  return (
    <ScreenContainer className="px-5">
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={[styles.title, { color: colors.foreground }]}>Research</Text>
          <Text style={[styles.subtitle, { color: colors.muted }]}>Evidence, citations, and source provenance are only shown after verified sources are connected.</Text>
        </View>
        <SectionCard title="Research workspace" subtitle="Draft your question now; source retrieval remains deliberately off until configured.">
          <TextInput
            accessibilityLabel="Research question"
            value={query}
            onChangeText={setQuery}
            placeholder="What would you like to investigate?"
            placeholderTextColor={colors.muted}
            multiline
            maxLength={500}
            style={[styles.input, { color: colors.foreground, borderColor: colors.border, backgroundColor: colors.background }]}
          />
          <View style={styles.buttonWrap}><PrimaryButton label="Save question locally" onPress={() => void handleSave()} /></View>
        </SectionCard>
        <SectionCard title="Source status" subtitle="No external source connector has been approved for this app.">
          <StatusPill label="Research unavailable" tone="warning" />
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
  input: { minHeight: 118, borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, padding: 14, fontSize: 16, lineHeight: 22, textAlignVertical: "top" },
  buttonWrap: { marginTop: 12 },
});
