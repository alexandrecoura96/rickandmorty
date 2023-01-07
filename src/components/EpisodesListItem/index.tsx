import React from "react";
import {
  CharacterIcon,
  Container,
  Description,
  Title,
  Wrapper,
} from "./styles";
import { IEpisodesListItem } from "./types";

export function EpisodesListItem({ ...props }: IEpisodesListItem) {
  return (
    <Container>
      <CharacterIcon />
      <Wrapper>
        <Title>{Boolean(props.title) ? props.title : "---"}</Title>
        <Description numberOfLines={1} ellipsizeMode="tail">
          {Boolean(props.description) ? props.description : "---"}
        </Description>
      </Wrapper>
    </Container>
  );
}
