import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import CartCard from "../components/CartCard";
import { MainButton } from "../components/Button";

const foods = [
  {
    name: "Meat Pizza",
    ingredients: "Mixed Pizza",
    price: "$10.00",
    image: require("../assets/meatPizza.png"),
    quantity: 1,
  },
  {
    name: "Cheese Pizza",
    ingredients: "Cheese Pizza",
    price: "$9.00",
    image: require("../assets/cheesePizza.png"),
    quantity: 2,
  },
  {
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "$8.00",
    image: require("../assets/chickenBurger.png"),
    quantity: 3,
  },
  {
    name: "Sushi Roll",
    ingredients: "Salmon, Avocado, Cucumber",
    price: "$7.00",
    image: require("../assets/sushiMakizushi.png"),
    quantity: 4,
  },
];

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="py-[20px] flex-row items-center mx-[20px] space-x-1">
        <Icon
          name="arrow-back-ios"
          size={20}
          color="#FFFFFF"
          onPress={navigation.goBack}
        />
        <Text className="text-xl font-semibold text-white">Cart</Text>
      </View>
      <FlatList
        data={foods}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: "80" }}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20 }}
        ListFooterComponent={() => (
          <View>
            <View className="flex-row justify-between my-[15px]">
              <Text className="text-slate-200 text-lg font-semibold">
                Total Price
              </Text>
              <Text className="text-slate-200 text-lg font-semibold">
                $20.00
              </Text>
            </View>
            <View className="mt-[10px] mb-[30px]">
              <MainButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
