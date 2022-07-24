import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";

import { GiftIcon } from "react-native-heroicons/outline";

const Offers = ({ items }) => {
  return (
    <View className="mt-4 mx-4 space-y-3">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-semibold text-white">Special Offers</Text>
        <Text className="text-lg text-white">See All</Text>
      </View>
      <TouchableOpacity className="w-full h-[150px] py-4 px-8 rounded-3xl bg-[#353945]">
        <View className="flex-row space-x-4">
          <View className="flex-col w-1/2 space-y-2 py-1">
            <Text className="text-5xl font-bold text-white">25%</Text>
            <Text className="text-white text-xl font-semibold">
              Today's Special!
            </Text>
            <Text className="text-white">
              Get discount for every order, only valid for today
            </Text>
          </View>
          <View className="h-[120px] w-[150px]">
            <Image
              source={require("../assets/images/chair.png")}
              className="object-cover h-full w-full"
            />
          </View>
        </View>
      </TouchableOpacity>

      <View className="mt-7 mb-64">
        <View className="flex flex-row justify-between space-x-5">
          {items.slice(0, 4).map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex justify-center items-center space-y-2"
            >
              <View className="bg-[#353945] h-[60px] w-[60px] rounded-full flex justify-center items-center">
                <Text>{item.icon}</Text>
              </View>
              <Text className="text-white">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="mt-4 flex flex-row justify-between space-x-5">
          {items.slice(4, 8).map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex justify-center items-center space-y-2"
            >
              <View className="bg-[#353945] h-[60px] w-[60px] rounded-full flex justify-center items-center">
                <Text>{item.icon}</Text>
              </View>
              <Text className="text-white">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Offers;
