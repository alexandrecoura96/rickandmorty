import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";
import CommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Locations } from "../pages/Locations";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";

const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          marginHorizontal: 16,
          height: 80,
          paddingBottom: 16,
          borderRadius: 24,
          backgroundColor: "#E4E9ED",
        },
      }}
    >
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          headerShown: false,
          tabBarLabel: "Characters",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="face"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          headerShown: false,
          tabBarLabel: "Locations",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <CommunityIcon
              name="map-marker-outline"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{
          headerShown: false,
          tabBarLabel: "Episodes",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <CommunityIcon
              name="play-box-outline"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
