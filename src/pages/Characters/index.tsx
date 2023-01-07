import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import {
  Container,
  CharacterItemWrapper,
  LoadingWrapper,
  Separator,
} from "./styles";
import { CharacterItem } from "../../components/CharacterItem";
import { useNavigation } from "@react-navigation/native";
import { useCharactersQuery } from "../../graphql/__generated__/graphql";
import { Header } from "../../components/Header";

export function Characters() {
  const navigate = useNavigation();
  const { data, loading, fetchMore } = useCharactersQuery({
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });

  const queryData = data && data.characters;
  const characters = queryData ? queryData.results : [];

  const fetchMoreData = () => {
    fetchMore({
      variables: { page: data?.characters?.info?.next },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return prev;
        }
        fetchMoreResult.characters.results = [
          ...prev.characters?.results,
          ...fetchMoreResult.characters?.results,
        ];

        return fetchMoreResult;
      },
    });
  };

  const ListFooterComponent = (): JSX.Element => {
    if (loading) {
      return (
        <LoadingWrapper>
          <ActivityIndicator color="#00aec7" size={50} />
        </LoadingWrapper>
      );
    }
    return <></>;
  };

  return (
    <Container>
      {/* <Header title="Characters" /> */}
      <FlatList
        keyExtractor={(item, index) =>
          `${item?.id?.toString()} + ${index.toString()}`
        }
        data={characters}
        style={{ width: "100%", paddingBottom: 60 }}
        contentContainerStyle={{ paddingBottom: 160 }}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (!loading) {
            fetchMoreData();
          }
        }}
        ListHeaderComponent={<Header title="Characters" />}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <CharacterItemWrapper key={item?.id}>
            <CharacterItem
              name={item?.name}
              image={item?.image}
              originLabel="Origin"
              origin={item?.origin?.name}
              statusLabel="Status"
              status={`${item?.status} - ${item?.species}`}
              statusColor={item?.status}
              onPress={() => {
                navigate.navigate("CharacterDetail", { item });
              }}
            />
          </CharacterItemWrapper>
        )}
      />
    </Container>
  );
}
