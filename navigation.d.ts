import {
  Character,
  Episode,
  Location,
} from "./src/graphql/__generated__/graphql";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Characters: undefined;
      CharacterDetail: { item?: Maybe<Array<Maybe<Character>>> };
      LocationDetail: { item: Maybe<Array<Maybe<Location>>> };
      EpisodeDetail: { item: Maybe<Array<Maybe<Episode>>> };
    }
  }
}
