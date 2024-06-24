import React from "react";

import {
  Container,
  TopContainer,
  BottomContainer,
  BoldText,
  Text,
  Input,
  ButtonImg,
  Image,
} from "./styles";

import Close from "../../../assets/close.svg";

export default function NotesModal({ setNotesModal }) {
  return (
    <Container>
      <TopContainer>
        <ButtonImg onClick={() => setNotesModal(false)}>
          <Image src={Close} />
        </ButtonImg>
        <BoldText code>EEL170</BoldText>
        <BoldText> Computação I</BoldText>
      </TopContainer>
      <BottomContainer>
        <Text>
          Insira aqui informações úteis sobre a discplina como email do
          professor, data de provas, trabalhos e listas, links do classroom,
          moodle ou AVAf e etc.
        </Text>
        <Input />
      </BottomContainer>
    </Container>
  );
}
