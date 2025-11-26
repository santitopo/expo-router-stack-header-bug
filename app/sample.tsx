import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SampleScreen() {
  const insets = useSafeAreaInsets();
  console.log("Bottom inset:", insets.bottom);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Form Sheet Sample</ThemedText>
      <ThemedText style={styles.description}>
        This screen uses presentation: 'formSheet' with sheetAllowedDetents:
        'fitToContents'
      </ThemedText>
      <ThemedText style={styles.description}>
        The sheet height adjusts to fit the content inside.
      </ThemedText>
      <ThemedText style={styles.description}>
        Try adding or removing content to see how it adapts!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    gap: 16,
    backgroundColor: "red",
  },
  description: {
    marginTop: 8,
    textAlign: "center",
  },
});
