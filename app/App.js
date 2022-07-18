import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Platform } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Header from "./src/components/Header";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className={Platform.OS === "android" ? `pt-10` : `pt-0`}>
        <Header />
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}
