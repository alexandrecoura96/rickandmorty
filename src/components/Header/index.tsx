import React from "react";
import { HeaderWrapper, Title } from "./styles";
import { View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { IHeader } from "./types";

export function Header({ title }: IHeader) {
  return (
    <HeaderWrapper>
      <MaskedView
        style={{
          height: 48,
          flexDirection: "row",
        }}
        maskElement={
          <View
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <Title>{title}</Title>
          </View>
        }
      >
        <LinearGradient
          colors={["#88EB41", "#769531"]}
          start={{ x: 0.6, y: 0.1 }}
          end={{ x: 0.1, y: 1 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
    </HeaderWrapper>
  );
}
