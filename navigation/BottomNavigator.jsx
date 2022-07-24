import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const bars = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    icon: "home-filled",
  },
  {
    name: "LocalMall",
    component: HomeScreen,
    icon: "local-mall",
  },
  {
    name: "search",
    component: HomeScreen,
    icon: "search",
  },
  {
    name: "Favorite",
    component: HomeScreen,
    icon: "favorite",
  },
  {
    name: "Carts",
    component: CartScreen,
    icon: "shopping-cart",
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#000000", borderTopWidth: 0 },
        tabBarActiveTintColor: "#395B64",
      }}
    >
      {bars.map((bar, index) => (
        <Tab.Screen
          key={index}
          name={bar.name}
          component={bar.component}
          options={{
            tabBarIcon: ({ color }) =>
              bar.name === "search" ? (
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: "#141416",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#395B64",
                    top: -25,
                    elevation: 5,
                  }}
                >
                  <Icon name={bar.icon} size={28} color="#395B64" />
                </View>
              ) : (
                <Icon name={bar.icon} color={color} size={28} />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
