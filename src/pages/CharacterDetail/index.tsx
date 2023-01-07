import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  Container,
  Title,
  ImageWrapper,
  Status,
  ReturnButton,
  StatusColor,
  StatusWrapper,
  SpeciesWrapper,
  SpeciesLabel,
  Species,
  GenderWrapper,
  Gender,
  GenderLabel,
  InformationWrapper,
  LocationWrapper,
  Location,
  LocationLabel,
  BoxShadow,
  EpisodeTitle,
  ViewAll,
  EpisodeTitleWrapper,
  CharacterPhoto,
} from "./styles";
import { EpisodesListItem } from "../../components/EpisodesListItem";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export function CharacterDetail() {
  const route = useRoute<any>();
  const navigate = useNavigation();
  const data = route?.params?.item;

  function getRandomColor() {
    var lettersPrimary = "0123456789ABCDEF";
    var colorPrimary = "#";
    for (var i = 0; i < 6; i++) {
      colorPrimary += lettersPrimary[Math.floor(Math.random() * 16)];
    }

    var lettersSecondary = "0123456789ABCDEF";
    var colorSecondary = "#";
    for (var i = 0; i < 6; i++) {
      colorSecondary += lettersSecondary[Math.floor(Math.random() * 16)];
    }

    var lettersTertiary = "0123456789ABCDEF";
    var colorTertiary = "#";
    for (var i = 0; i < 6; i++) {
      colorTertiary += lettersTertiary[Math.floor(Math.random() * 16)];
    }
    return Array(colorPrimary, colorSecondary, colorTertiary);
  }

  return (
    <Container>
      <ImageWrapper colors={getRandomColor()}>
        <ReturnButton onPress={() => navigate.goBack()}>
          <Icon name="arrow-back" size={24} />
        </ReturnButton>
        <CharacterPhoto source={{ uri: data.image }} />
      </ImageWrapper>

      <Title>{data.name}</Title>

      <StatusWrapper>
        <StatusColor status={data.status} />
        <Status>{data.status}</Status>
      </StatusWrapper>

      <InformationWrapper>
        <SpeciesWrapper>
          <Species>{data.species}</Species>
          <SpeciesLabel>Species</SpeciesLabel>
        </SpeciesWrapper>

        <GenderWrapper>
          <Gender>{data.gender}</Gender>
          <GenderLabel>Gender</GenderLabel>
        </GenderWrapper>
      </InformationWrapper>

      <View style={{ paddingLeft: 16, paddingRight: 16 }}>
        <LocationWrapper>
          <Location>{data.origin?.name}</Location>
          <LocationLabel>Location</LocationLabel>
        </LocationWrapper>

        <BoxShadow>
          <EpisodeTitleWrapper>
            <EpisodeTitle>
              Episodes Appeared in ({data.episode?.length})
            </EpisodeTitle>
            <ViewAll>View all episodes</ViewAll>
          </EpisodeTitleWrapper>
          <FlatList
            data={data.episode}
            style={{ height: RFValue(100) }}
            keyExtractor={(item, index) =>
              `${item?.id?.toString()} + ${index.toString()}`
            }
            renderItem={({ item, index }) => (
              <EpisodesListItem
                key={`${item?.id} + ${index}`}
                title={item?.episode}
                description={item?.name}
              />
            )}
          />
        </BoxShadow>
      </View>
    </Container>
  );
}
