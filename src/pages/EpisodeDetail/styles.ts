import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ["#EAFFEF", "#769531"],
})`
  flex: 1;
`;
export const TitleWrapper = styled.View`
  background-color: #eaffef;
`;
export const Title = styled.Text`
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  color: #5d5d5d;
  font-weight: 500;
`;

export const ReturnButton = styled.TouchableOpacity`
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
  background-color: #eaffef;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(25)}px;
  align-items: center;
  justify-content: center;
`;
