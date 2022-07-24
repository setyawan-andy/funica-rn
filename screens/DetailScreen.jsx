import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SecondaryButton } from "../components/Button";

const DetailScreen = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="py-[20px] flex-row items-center mx-[20px] space-x-1">
        <Icon
          name="arrow-back-ios"
          size={20}
          color="#FFFFFF"
          onPress={navigation.goBack}
        />
        <Text className="text-xl font-semibold text-white">Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[280px] justify-center items-center">
          <Image source={item.image} className="h-[220px] w-[220px]" />
        </View>
        <View className="px-[20px] pt-[40px] pb-[60px] bg-[#395B64] rounded-t-[40px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-semibold text-[#A5C9CA]">
              {item.name}
            </Text>
            <View className="h-[50px] w-[50px] justify-center items-center bg-[#A5C9CA] rounded-full">
              <Icon name="favorite-border" color="#395B64" size={25} />
            </View>
          </View>
          <Text className="mt-[10px] leading-[22px] text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
          <View className="my-[40px]">
            <SecondaryButton title="Add to Cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
