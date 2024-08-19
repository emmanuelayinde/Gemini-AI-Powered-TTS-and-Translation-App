import { Stack } from "expo-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "../global.css";

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  )
}
