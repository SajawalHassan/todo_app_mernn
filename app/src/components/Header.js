import React from "react";

import { View, Text, TextInput } from "react-native";
import { SearchIcon } from "react-native-heroicons/outline";

export default function Header() {
  return (
    <View className="pl-4 pr-2 py-2 mx-2 border-2 border-zinc-500 flex-row space-x-4">
      <Text className="font-black text-2xl text-zinc-700">Todo App</Text>
      <View className="flex-1 flex-row items-center bg-gray-200 px-2 rounded-sm">
        <SearchIcon size={20} color="gray" />
        <TextInput
          placeholder="Search Tasks"
          className="flex-1 px-1 bg-transparent border-none text-zinc-700"
        />
      </View>
    </View>
  );
}
