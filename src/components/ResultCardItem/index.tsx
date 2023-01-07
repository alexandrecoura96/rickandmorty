import React from "react";
import {
  Container,
  Title,
  BoxShadow,
  Description,
  DescriptionLabel,
  DescriptionWrapper,
} from "./styles";
import { IResultCardItem } from "./types";

export function ResultCardItem({
  id,
  title,
  description,
  descriptionLabel,
  onPress = () => {},
}: IResultCardItem) {
  return (
    <BoxShadow>
      <Container onPress={() => onPress(id)}>
        <Title>{Boolean(title) ? title : "---"}</Title>
        <DescriptionWrapper>
          {<Description>{description}</Description>}
          {Boolean(descriptionLabel) && (
            <DescriptionLabel>{descriptionLabel}</DescriptionLabel>
          )}
        </DescriptionWrapper>
      </Container>
    </BoxShadow>
  );
}
