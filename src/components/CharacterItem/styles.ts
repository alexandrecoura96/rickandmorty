import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";

interface IStatus {
  status?: string | null;
}

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
  padding: ${RFValue(8)}px;
`;

export const CharacterImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: ${RFValue(150)}px;
  height: ${RFValue(140)}px;
  border-top-left-radius: ${RFValue(16)}px;
  border-bottom-left-radius: ${RFValue(16)}px;
`;

export const CharacterContainer = styled.View`
  flex: 1;
  padding-left: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  color: #000;
`;

export const OriginLabel = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  color: #808080;
`;

export const Origin = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: #000;
`;

export const StatusLabel = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  color: #808080;
`;

export const StatusWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusColor = styled.View<IStatus>`
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;

  ${(props) =>
    props.status === "Alive" &&
    css`
      background-color: #00ff00;
    `};

  ${(props) =>
    props.status === "Dead" &&
    css`
      background-color: #da1b37;
    `};

  ${(props) =>
    props.status === "unknown" &&
    css`
      background-color: #808080;
    `};

  margin-right: ${RFValue(8)}px;
`;

export const Status = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: #000;
`;
