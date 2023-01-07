import React from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { CharacterDetail } from "../pages/CharacterDetail";
import { AppTabRoutes } from "./app.tab.routes";
import { LocationDetail } from "../pages/LocationDetail";
import { EpisodeDetail } from "../pages/EpisodeDetail";

const Stack = createStackNavigator();

export function AppStackRoutes() {
  const cardStyleInterpolatorAnim = ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  };

  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        component={AppTabRoutes}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
      <Stack.Screen
        name="LocationDetail"
        component={LocationDetail}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
      <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
    </Stack.Navigator>
  );
}
