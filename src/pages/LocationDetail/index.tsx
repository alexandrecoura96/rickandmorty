import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Container, Title, ReturnButton, TitleWrapper } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { CharacterCard } from "../../components/CharacterCard";
import { Label } from "../../components/Label";

export function LocationDetail() {
  const routes = useRoute<any>();
  const navigate = useNavigation();
  const data = routes.params?.item;

  return (
    <Container>
      <ReturnButton onPress={() => navigate.goBack()}>
        <Icon name="arrow-back" size={24} />
      </ReturnButton>
      <TitleWrapper>
        <Title>INFO</Title>
      </TitleWrapper>
      <Label title="Name" description={data.name} />
      <Label title="Type" description={data.type} />
      <Label title="Dimension" description={data.dimension} />
      <TitleWrapper>
        <Title>CHARACTERS</Title>
      </TitleWrapper>
      <FlatList
        data={data.residents}
        style={{ width: "100%", paddingBottom: 80 }}
        contentContainerStyle={{ paddingBottom: 280, marginLeft: 16 }}
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
