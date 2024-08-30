import { Stack } from "expo-router";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "../global.css";
import store from "@/redux";

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </Provider>
  )
}
