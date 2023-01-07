import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { ResultCardItem } from "../../components/ResultCardItem";
import { useLocationsQuery } from "../../graphql/__generated__/graphql";
import {
  Container,
  LoadingWrapper,
  ResultItemWrapper,
  Separator,
} from "./styles";

export function Locations() {
  const navigate = useNavigation();
  const { data, loading, fetchMore } = useLocationsQuery({
    notifyOnNetworkStatusChange: true,
    variables: { page: 1 },
  });
  const queryData = data && data.locations;
  const locations = queryData ? queryData.results : [];

  const fetchMoreData = () => {
    fetchMore({
      variables: { page: queryData?.info?.next },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        fetchMoreResult.locations.results = [
          ...prev.locations.results,
          ...fetchMoreResult.locations.results,
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
        data={locations}
        ListHeaderComponent={<Header title="Locations" />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        ListFooterComponent={ListFooterComponent}
        ItemSeparatorComponent={() => <Separator />}
        style={{ width: "100%", paddingBottom: 60 }}
        contentContainerStyle={{ paddingBottom: 160 }}
        onEndReached={() => {
          if (!loading) {
            fetchMoreData();
          }
        }}
        renderItem={({ item }) => (
          <ResultItemWrapper>
            <ResultCardItem
              title={item?.name}
              description={item?.residents.length}
              descriptionLabel="Residents"
              {...item}
              onPress={() => navigate.navigate("LocationDetail", { item })}
            />
          </ResultItemWrapper>
        )}
      />
    </Container>
  );
}
