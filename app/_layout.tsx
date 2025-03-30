import { Stack, Redirect } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="courses/[id]"
        options={{ headerShown: false }}
      />
      <Redirect href="/(auth)/welcome" />
    </Stack>
  );
}
