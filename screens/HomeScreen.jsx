import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Offers from "../components/Offers";

import {
  BellIcon,
  HeartIcon,
  AdjustmentsIcon,
  SearchIcon,
  GiftIcon,
  PhotographIcon,
  PrinterIcon,
  ServerIcon,
  TableIcon,
  TicketIcon,
  TagIcon,
  ReceiptTaxIcon,
} from "react-native-heroicons/outline";

const items = [
  {
    name: "Gift",
    icon: <GiftIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Photo",
    icon: <PhotographIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Printer",
    icon: <PrinterIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Books",
    icon: <ServerIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Table",
    icon: <TableIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Ticket",
    icon: <TicketIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Discount",
    icon: <TagIcon size={24} color="#FFFFFF" />,
  },
  {
    name: "Coupon",
    icon: <ReceiptTaxIcon size={24} color="#FFFFFF" />,
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
    <SafeAreaView className="bg-black">
      {/* Header */}
      <View className="flex-row pb-3 items-center mt-5 mx-4 space-x-3">
        <Image
          source={require("../assets/images/avatar-5.jpg")}
          className="h-9 w-9 bg-black p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-sm text-white">Good Morning 👋</Text>
          <Text className="font-semibold text-lg text-white">
            Andrew Ainsley
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
      <ScrollView>
        <Offers items={items} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
