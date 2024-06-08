import React from "react";

import { Screen, Container } from "./styles";

import LeftBar from "../../../components/LeftBar";

export default function MyPeriod() {
  return (
    <Screen>
      <LeftBar myPeriod />
      <Container></Container>
    </Screen>
  );
}
