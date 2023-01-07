import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import { AppStackRoutes } from "./src/routes/app.stack.routes";
import { StatusBar, Platform } from "react-native";
import { client } from "./src/apollo";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
            translucent
          />
          <SafeAreaView />
          <AppStackRoutes />
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
