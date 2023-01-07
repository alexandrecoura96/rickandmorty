import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const CharacterImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
  border-radius: ${RFValue(40)}px;
`;

export const Name = styled.Text`
  margin-left: ${RFValue(16)}px;
`;
