import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: transparent;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
  border-color: #fff;
  border-width: 1px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #000;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #5d5d5d;
  font-weight: bold;
`;
