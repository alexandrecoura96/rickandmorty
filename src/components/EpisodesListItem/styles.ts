import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
`;

export const CharacterIcon = styled(Icon).attrs({
  name: "face",
  size: RFValue(25),
})``;

export const Wrapper = styled.View`
  margin-left: ${RFValue(8)}px;
  flex: 1;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  color: #808080;
`;

export const Description = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: #000;
`;
