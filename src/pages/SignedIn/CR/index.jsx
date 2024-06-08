import React from "react";

import { Screen, Container } from "./styles";

import LeftBar from "../../../components/LeftBar";

export default function CR() {
  return (
    <Screen>
      <LeftBar cr />
      <Container></Container>
    </Screen>
  );
}
