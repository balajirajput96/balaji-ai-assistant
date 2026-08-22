import { type ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/use-colors";

export function StatusPill({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "success" | "warning" | "error" }) {
  const colors = useColors();
  const backgroundColor = tone === "success" ? colors.success : tone === "warning" ? colors.warning : tone === "error" ? colors.error : colors.surface;
  const color = tone === "neutral" ? colors.muted : colors.background;
  return (
    <View accessibilityLabel={`Status: ${label}`} style={[styles.pill, { backgroundColor }]}>
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </View>
  );
}

export function SectionCard({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  const colors = useColors();
  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text style={[styles.cardTitle, { color: colors.foreground }]}>{title}</Text>
      {subtitle ? <Text style={[styles.cardSubtitle, { color: colors.muted }]}>{subtitle}</Text> : null}
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

export function PrimaryButton({ label, onPress, disabled = false, accessibilityHint }: { label: string; onPress: () => void; disabled?: boolean; accessibilityHint?: string }) {
  const colors = useColors();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.primary, opacity: disabled ? 0.45 : pressed ? 0.84 : 1 }]}
    >
      <Text style={[styles.primaryButtonText, { color: colors.background }]}>{label}</Text>
    </Pressable>
  );
}

export function TextAction({ label, onPress, accessibilityHint }: { label: string; onPress: () => void; accessibilityHint?: string }) {
  const colors = useColors();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      style={({ pressed }) => [styles.textAction, { opacity: pressed ? 0.6 : 1 }]}
    >
      <Text style={[styles.textActionText, { color: colors.primary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: { alignSelf: "flex-start", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  pillText: { fontSize: 12, fontWeight: "700" },
  card: { borderRadius: 20, borderWidth: StyleSheet.hairlineWidth, padding: 18 },
  cardTitle: { fontSize: 17, fontWeight: "700" },
  cardSubtitle: { fontSize: 14, lineHeight: 20, marginTop: 5 },
  cardContent: { marginTop: 14 },
  primaryButton: { minHeight: 46, borderRadius: 14, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 },
  primaryButtonText: { fontSize: 16, fontWeight: "700" },
  textAction: { minHeight: 44, alignSelf: "flex-start", justifyContent: "center" },
  textActionText: { fontSize: 15, fontWeight: "700" },
});
