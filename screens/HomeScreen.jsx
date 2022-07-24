import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  BellIcon,
  HeartIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Card from "../components/Card";

const categories = [
  {
    name: "Pizza",
    image: require("../assets/catergories/pizza.png"),
  },
  {
    name: "Burger",
    image: require("../assets/catergories/burger.png"),
  },
  {
    name: "Sushi",
    image: require("../assets/catergories/sushi.png"),
  },
  {
    name: "Salad",
    image: require("../assets/catergories/salad.png"),
  },
];

const foods = [
  {
    name: "Meat Pizza",
    ingredients: "Mixed Pizza",
    price: "$10.00",
    image: require("../assets/meatPizza.png"),
  },
  {
    name: "Cheese Pizza",
    ingredients: "Cheese Pizza",
    price: "$9.00",
    image: require("../assets/cheesePizza.png"),
  },
  {
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "$8.00",
    image: require("../assets/chickenBurger.png"),
  },
  {
    name: "Sushi Roll",
    ingredients: "Salmon, Avocado, Cucumber",
    price: "$7.00",
    image: require("../assets/sushiMakizushi.png"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mt-5 mx-4 space-x-3">
        <Image
          source={require("../assets/images/avatar-5.jpg")}
          className="h-9 w-9 bg-black p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-sm text-white">Good Morning 👋</Text>
          <Text className="font-semibold text-lg text-white">
            Andy Setyawan
          </Text>
        </View>
        <View className="flex-row space-x-3">
          <BellIcon size={24} color="#FFFFFF" />
          <HeartIcon size={24} color="#FFFFFF" />
        </View>
      </View>

      {/* search */}
      <View className="flex-row mx-4 mt-2">
        <View className="flex-row items-center space-x-2 bg-[#141416] py-4 px-4 w-full rounded-lg">
          <SearchIcon size={20} color="#777E90" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#777E90"
            keyboardType="default"
            className="flex-1 text-white"
          />
          <AdjustmentsIcon size={20} color="#FFFFFF" />
        </View>
      </View>

      {/* body */}
      <View>
        <Categories categories={categories} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card navigation={navigation} food={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
