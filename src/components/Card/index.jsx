import React from "react";

import { Container, Text } from "./styles";

export default function Card({
  marginTop,
  marginLeft,
  onClick,
  boldText,
  text,
  status,
}) {
  return (
    <Container
      onClick={onClick}
      marginTop={marginTop}
      marginLeft={marginLeft}
      status={status}
    >
      <Text bold>{boldText}</Text>
      <Text>{text}</Text>
    </Container>
  );
}
