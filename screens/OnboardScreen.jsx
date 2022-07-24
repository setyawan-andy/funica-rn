import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MainButton } from "../components/Button";

const dots = [
  {
    selected: true,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
];

const OnboardScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="h-[400px]">
        <Image
          className="w-full h-full"
          resizeMode="contain"
          source={require("../assets/onboardImage.png")}
        />
      </View>
      <View className="flex justify-center items-center">
        <Text className="text-white text-center font-semibold text-3xl">
          El Deliciozo Food
        </Text>
        <Text className="mt-5 text-white">
          "We'll find you the best place and the best food"
        </Text>
      </View>
      <View className="h-[50] flex flex-row justify-center items-center space-x-2">
        {dots.map((dot, index) => (
          <View
            key={index}
            className={
              dot.selected
                ? "h-[12px] w-[30px] rounded-lg bg-[#395B64] my-9"
                : "h-[12px] w-[12px] rounded-full bg-white my-16"
            }
          ></View>
        ))}
      </View>
      <View className="px-16">
        <MainButton
          title={"Get Started"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
