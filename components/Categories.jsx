import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const Categories = ({ categories }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 30,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedMenu(index)}
        >
          <View
            className={`${
              selectedMenu === index ? "bg-[#395B64]" : "bg-[#A5C9CA]"
            } h-[45px] w-[120px] mr-[7px] rounded-full items-center px-[5px] flex-row`}
          >
            <View className="h-[35px] w-[35px] bg-[#E7F6F2] rounded-full justify-center items-center">
              <Image source={category.image} className="h-[35px] w-[35px]" />
            </View>
            <Text
              className={`${
                selectedMenu === index ? "text-white" : "text-[#395B64]"
              } text-sm font-semibold ml-[10px]`}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
