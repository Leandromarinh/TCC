import React from "react";

import { Screen, Container } from "./styles";

import LeftBar from "../../../components/LeftBar";
import Card from "../../../components/Card";

export default function Grid() {
  return (
    <Screen>
      <LeftBar grid />
      <Container>
        <Card
          marginTop={""}
          marginLeft={""}
          onClick={() => {}}
          boldText="EEL170"
          text="Computação I"
          status="A"
        />
      </Container>
    </Screen>
  );
}
