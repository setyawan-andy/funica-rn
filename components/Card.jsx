import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");
const widthContainer = width / 2 - 20;

const Card = ({ food, navigation }) => {
  return (
    <TouchableHighlight
      underlayColor="#000000"
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailScreen", food)}
    >
      <View
        className="h-[220px] mx-[10px] mb-[20px] mt-[50px] rounded-xl bg-[#A5C9CA] shadow-lg"
        style={{ width: widthContainer, elevation: 13 }}
      >
        <View className="items-center -top-[40px]">
          <Image source={food.image} className="h-[120px] w-[120px]" />
        </View>
        <View className="mx-[20px]">
          <Text className="text-xl font-semibold">{food.name}</Text>
          <Text className="text-sm text-slate-600 mt-[2px]">
            {food.ingredients}
          </Text>
        </View>
        <View className="mt-[10px] flex-row mx-[20px] justify-between">
          <Text className="text-lg font-semibold">{food.price}</Text>
          <View className="h-[30px] w-[30px] rounded-full bg-[#E7F6F2] justify-center items-center">
            <Icon name="add" size={20} color="#395B64" />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
