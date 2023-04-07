import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUserName] = useState<string>("");
  return (
    <View className="flex flex-row items-center space-x-4 mx-auto mt-5">
      <TextInput
        placeholder=" Enter your username here..."
        className="border border-gray-100 px-4 py-2 rounded w-2/3 focus:border-2 focus:border-purple-400"
        onChangeText={(text: string) => setUserName(text)}
        placeholderTextColor="#ffffff"
      />
      <Pressable
        className="bg-sky-400 px-4 py-2 rounded "
        onPress={() => onSearch(username)}
      >
        <Text className=" text-gray-50">Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
