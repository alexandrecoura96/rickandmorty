import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#F1F4F9", "#EAFFEF"],
})`
  flex: 1;
  align-items: center;
`;

export const CharacterItemWrapper = styled.View`
  padding-left: ${RFValue(8)}px;
  padding-right: ${RFValue(8)}px;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View`
  height: ${RFValue(16)}px;
`;
