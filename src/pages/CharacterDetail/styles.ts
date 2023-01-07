import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";
import styled, { css } from "styled-components/native";

interface IStatus {
  status?: string | null;
}

export const Container = styled.View`
  flex: 1;
`;

export const ImageWrapper = styled(LinearGradient)`
  padding-bottom: ${RFValue(16)}px;
  border-bottom-left-radius: ${RFValue(32)}px;
  border-bottom-right-radius: ${RFValue(32)}px;
`;

export const CharacterPhoto = styled(Image).attrs({
  resizeMode: "cover",
})`
  height: ${RFValue(180)}px;
  width: ${RFValue(180)}px;
  border-radius: ${RFValue(16)}px;
  align-self: center;
`;

export const ReturnButton = styled.TouchableOpacity`
  margin-left: ${RFValue(8)}px;
  background-color: #fff;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(25)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  color: #000;
  align-self: center;
`;

export const StatusWrapper = styled.View`
  margin-top: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const StatusColor = styled.View<IStatus>`
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  ${(props) =>
    props.status === "Alive" &&
    css`
      background-color: #00ff00;
    `}

  ${(props) =>
    props.status === "Dead" &&
    css`
      background-color: #da1b37;
    `}

      ${(props) =>
    props.status === "unknown" &&
    css`
      background-color: #808080;
    `}


  margin-right: ${RFValue(8)}px;
`;

export const Status = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: #808080;
`;

export const InformationWrapper = styled.View`
  margin-top: ${RFValue(16)}px;
  justify-content: space-between;
  flex-direction: row;
  padding-right: ${RFValue(48)}px;
  padding-left: ${RFValue(48)}px;
`;

export const SpeciesWrapper = styled.View``;

export const Species = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: #000;
`;

export const SpeciesLabel = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: #808080;
`;

export const GenderWrapper = styled.View``;

export const Gender = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: #000;
`;

export const GenderLabel = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: #808080;
`;

export const LocationWrapper = styled.View`
  margin-top: ${RFValue(32)}px;
  margin-bottom: ${RFValue(32)}px;
`;

export const Location = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: #000;
`;

export const LocationLabel = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  color: darkgrey;
`;

export const BoxShadow = styled(Shadow)`
  padding: ${RFValue(16)}px ${RFValue(8)}px;
  width: 100%;
`;

export const EpisodeTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EpisodeTitle = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: #000;
`;

export const ViewAll = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: #116d3a;
`;
