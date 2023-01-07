import React from "react";
import { Container, Title, Description } from "./styles";
import { ILabel } from "./types";

export function Label({ title, description }: ILabel) {
  return (
    <Container>
      <Title>{Boolean(title) ? title : "---"}</Title>
      <Description>{Boolean(description) ? description : "---"}</Description>
    </Container>
  );
}
