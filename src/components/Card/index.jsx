import React, { useState } from "react";

import { Container, Text } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  marginTop,
  marginLeft,
  onClick,
  boldText,
  text,
  status,
  deletable,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container
      onClick={onClick}
      marginTop={marginTop}
      marginLeft={marginLeft}
      status={status}
      deletable={deletable}
      onMouseEnter={() => {
        if (deletable) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (deletable) setIsHovered(false);
      }}
    >
      {isHovered ? (
        <FontAwesomeIcon icon={faTrashAlt} size="4x" color="red" />
      ) : (
        <>
          <Text bold>{boldText}</Text>
          <Text>{text}</Text>
        </>
      )}
    </Container>
  );
}
