import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MainButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className="bg-[#395B64] h-[60px] rounded-full flex justify-center items-center">
        <Text className="text-white text-xl font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className="bg-[#A5C9CA] h-[60px] rounded-full flex justify-center items-center">
        <Text className="text-[#395B64] text-xl font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { MainButton, SecondaryButton };
