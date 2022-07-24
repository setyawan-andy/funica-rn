import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const CartCard = ({ item }) => {
  return (
    <View className="h-[100px] rounded-[10px] bg-[#395B64] my-[10px] mx-[20px] px-[10px] flex-row items-center">
      <Image source={item.image} className="h-[80px] w-[80px]" />
      <View className="h-[100px] ml-[10px] py-[20px] flex-1 space-y-1">
        <Text className="text-slate-200 font-semibold text-lg">
          {item.name}
        </Text>
        <Text className="text-[#A5C9CA] text-xs">{item.ingredients}</Text>
        <Text className="text-slate-200 font-semibold">{item.price}</Text>
      </View>
      <View className="mr-[20px] items-center">
        <Text className="text-lg font-semibold text-slate-200">
          {item.quantity}
        </Text>
        <View className="w-[80px] space-x-2 h-[30px] bg-[#A5C9CA] rounded-full px-[5px] flex-row justify-center items-center">
          <Icon name="remove" size={20} color="#395B64" />
          <Icon name="add" size={20} color="#395B64" />
        </View>
      </View>
    </View>
  );
};

export default CartCard;
