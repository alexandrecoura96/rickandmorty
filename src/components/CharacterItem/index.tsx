import React, { memo } from "react";
import {
  Container,
  Name,
  Origin,
  OriginLabel,
  Status,
  StatusLabel,
  CharacterImage,
  CharacterContainer,
  StatusWrapper,
  StatusColor,
  BoxShadow,
} from "./styles";
import { ICharacterItem } from "./types";

export const CharacterItem = memo<ICharacterItem>(
  ({ id, onPress = () => {}, image, ...props }: ICharacterItem) => {
    return (
      <BoxShadow>
        <Container onPress={() => onPress(id)}>
          <CharacterImage
            source={{
              uri: image || "",
            }}
          />
          <CharacterContainer>
            <Name>{Boolean(props.name) ? props.name : "---"}</Name>
            <OriginLabel>
              {Boolean(props.originLabel) ? props.originLabel : "---"}
            </OriginLabel>
            <Origin>{Boolean(props.origin) ? props.origin : "---"}</Origin>
            <StatusLabel>
              {Boolean(props.statusLabel) ? props.statusLabel : "---"}
            </StatusLabel>
            <StatusWrapper>
              <StatusColor
                status={
                  Boolean(props.statusColor) ? props.statusColor : "unknown"
                }
              />
              <Status>{Boolean(props.status) ? props.status : "---"}</Status>
            </StatusWrapper>
          </CharacterContainer>
        </Container>
      </BoxShadow>
    );
  }
);
CharacterItem.displayName = "CharacterItem";
