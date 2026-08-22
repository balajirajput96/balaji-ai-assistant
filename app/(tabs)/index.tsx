import { useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { PrimaryButton, SectionCard, StatusPill } from "@/components/assistant-ui";
import { useAssistantStore } from "@/hooks/use-assistant-store";
import { useColors } from "@/hooks/use-colors";

export default function HomeScreen() {
  const colors = useColors();
  const { snapshot, submitRequest } = useAssistantStore();
  const [input, setInput] = useState("");
  const inputRef = useRef<TextInput>(null);
  const handleSubmit = async () => {
    if (await submitRequest(input)) setInput("");
  };

  return (
    <ScreenContainer className="px-5">
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <FlatList
          data={snapshot.messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ListHeaderComponent={<View style={styles.header}><View><Text style={[styles.title, { color: colors.foreground }]}>Good evening</Text><Text style={[styles.subtitle, { color: colors.muted }]}>A calmer way to plan, research, and act.</Text></View><StatusPill label="Local only" tone="success" /><SectionCard title="Provider status" subtitle="No model is connected. Your requests remain on this device and are saved as tasks."><StatusPill label="Needs provider setup" tone="warning" /></SectionCard></View>}
          renderItem={({ item }) => <View style={[styles.message, { alignSelf: item.role === "user" ? "flex-end" : "flex-start", backgroundColor: item.role === "user" ? colors.primary : colors.surface }]}><Text style={[styles.messageText, { color: item.role === "user" ? colors.background : colors.foreground }]}>{item.content}</Text></View>}
          ListFooterComponent={<View style={styles.quickActions}><Pressable onPress={() => setInput("Plan my next task") } accessibilityRole="button" style={({ pressed }) => [styles.quickAction, { borderColor: colors.border, opacity: pressed ? 0.6 : 1 }]}><Text style={[styles.quickActionText, { color: colors.foreground }]}>Plan a task</Text></Pressable><Pressable onPress={() => setInput("Save a research question") } accessibilityRole="button" style={({ pressed }) => [styles.quickAction, { borderColor: colors.border, opacity: pressed ? 0.6 : 1 }]}><Text style={[styles.quickActionText, { color: colors.foreground }]}>Research</Text></Pressable></View>}
        />
        <View style={[styles.composer, { borderTopColor: colors.border, backgroundColor: colors.background }]}>
          <TextInput ref={inputRef} accessibilityLabel="Assistant request" value={input} onChangeText={setInput} placeholder="Message your assistant" placeholderTextColor={colors.muted} multiline maxLength={4000} style={[styles.input, { color: colors.foreground, backgroundColor: colors.surface }]} />
          <View style={styles.composerButton}><PrimaryButton label="Save" onPress={() => void handleSubmit()} disabled={!input.trim()} accessibilityHint="Saves the request locally as a task" /></View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 }, list: { paddingTop: 18, paddingBottom: 12, gap: 10 }, header: { gap: 16, marginBottom: 8 }, title: { fontSize: 34, fontWeight: "800", letterSpacing: -0.8 }, subtitle: { marginTop: 4, fontSize: 15 }, message: { maxWidth: "88%", borderRadius: 18, paddingHorizontal: 15, paddingVertical: 12 }, messageText: { fontSize: 16, lineHeight: 23 }, quickActions: { flexDirection: "row", gap: 8, marginTop: 8 }, quickAction: { minHeight: 42, borderWidth: StyleSheet.hairlineWidth, borderRadius: 14, justifyContent: "center", paddingHorizontal: 14 }, quickActionText: { fontSize: 14, fontWeight: "700" }, composer: { borderTopWidth: StyleSheet.hairlineWidth, paddingVertical: 12, flexDirection: "row", gap: 8, alignItems: "flex-end" }, input: { flex: 1, minHeight: 46, maxHeight: 112, borderRadius: 15, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, lineHeight: 21 }, composerButton: { width: 82 },
});
