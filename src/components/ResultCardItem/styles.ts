import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";

export const BoxShadow = styled(Shadow).attrs({
  distance: 10,
  offset: [0, 2],
})`
  width: 100%;
  border-radius: ${RFValue(16)}px;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${RFValue(16)}px;
  background-color: #fff;
  padding: ${RFValue(24)}px ${RFValue(8)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #000;
  font-weight: bold;
  flex: 1;
`;

export const DescriptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #000;
  font-weight: 500;
`;

export const DescriptionLabel = styled.Text`
  padding-left: ${RFValue(8)}px;
  font-size: ${RFValue(12)}px;
  color: #000;
  font-weight: 500;
`;
