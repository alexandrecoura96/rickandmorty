import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";

import { Container, ReturnButton, Title, TitleWrapper } from "./styles";
import { Label } from "../../components/Label";
import { format } from "date-fns";
import { FlatList } from "react-native-gesture-handler";
import { CharacterCard } from "../../components/CharacterCard";

export function EpisodeDetail() {
  const route = useRoute<any>();
  const navigate = useNavigation();
  const data = route.params?.item;

  return (
    <Container>
      <ReturnButton onPress={() => navigate.goBack()}>
        <Icon name="arrow-back" size={24} />
      </ReturnButton>
      <Label title="Name" description={data.name} />
      <Label
        title="Air Date"
        description={format(new Date(data.created.toString()), "MMMM-dd, yyyy")}
      />
      <Label title="Code" description={data.episode} />
      <TitleWrapper>
        <Title>CHARACTERS</Title>
      </TitleWrapper>
      <FlatList
        data={data.characters}
        style={{ width: "100%", paddingBottom: 80 }}
        contentContainerStyle={{ paddingBottom: 280 }}
        keyExtractor={(item, index) =>
          `${item?.id?.toString()} + ${index.toString()}`
        }
        renderItem={({ item }) => (
          <CharacterCard image={item?.image} name={item?.name} />
        )}
      />
    </Container>
  );
}
