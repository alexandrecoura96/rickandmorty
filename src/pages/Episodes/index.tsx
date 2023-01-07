import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { ResultCardItem } from "../../components/ResultCardItem";
import { useEpisodesQuery } from "../../graphql/__generated__/graphql";
import { format } from "date-fns";
import {
  Container,
  LoadingWrapper,
  ResultItemWrapper,
  Separator,
} from "./styles";

export function Episodes() {
  const navigate = useNavigation();
  const { data, loading, fetchMore } = useEpisodesQuery({
    notifyOnNetworkStatusChange: true,
    variables: { page: 1 },
  });
  const queryData = data && data.episodes;
  const episodes = queryData ? queryData.results : [];

  const fetchMoreData = () => {
    fetchMore({
      variables: { page: queryData?.info?.next },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        fetchMoreResult.episodes.results = [
          ...prev.episodes.results,
          ...fetchMoreResult.episodes.results,
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
      <FlatList
        keyExtractor={(item, index) =>
          `${item?.id?.toString()} + ${index.toString()}`
        }
        data={episodes}
        ListHeaderComponent={<Header title="Episodes" />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        ListFooterComponent={ListFooterComponent}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <Separator />}
        style={{ width: "100%", paddingBottom: 60 }}
        contentContainerStyle={{ paddingBottom: 160 }}
        onEndReached={() => {
          if (!loading) {
            fetchMoreData();
          }
        }}
        renderItem={({ item }) => {
          const createdData = item?.created ? item.created : "---";
          return (
            <ResultItemWrapper>
              <ResultCardItem
                title={item?.name}
                description={format(
                  new Date(createdData.toString()),
                  "MMMM-dd, yyyy"
                )}
                onPress={() => navigate.navigate("EpisodeDetail", { item })}
              />
            </ResultItemWrapper>
          );
        }}
      />
    </Container>
  );
}
