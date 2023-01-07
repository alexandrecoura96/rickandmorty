import React from "react";
import { Container, CharacterImage, Name } from "./styles";
import { ICharacterCard } from "./types";

export function CharacterCard({ name, image }: ICharacterCard) {
  return (
    <Container>
      <CharacterImage source={{ uri: image }} />
      <Name style={{ marginLeft: 16 }}>{Boolean(name) ? name : "---"}</Name>
    </Container>
  );
}
