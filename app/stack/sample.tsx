import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SampleScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sample Screen</ThemedText>
      <ThemedText style={styles.description}>
        This is a sample screen in the stack navigator.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
  },
});
