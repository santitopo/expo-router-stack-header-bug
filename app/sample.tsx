import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export default function SampleScreen() {
  const insets = useSafeAreaInsets();
  const [items, setItems] = useState<number[]>([]);
  console.log("Bottom inset:", insets.bottom);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

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

      <Button title="Add Content" onPress={addItem} />

      {items.map((item) => (
        <ThemedView key={item} style={styles.item}>
          <ThemedText>Item {item}</ThemedText>
        </ThemedView>
      ))}
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
  item: {
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
});
