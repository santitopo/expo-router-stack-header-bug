import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sample"
        options={{
          title: "Sample Screen",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
