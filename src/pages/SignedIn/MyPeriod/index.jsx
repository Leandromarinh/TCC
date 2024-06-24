import React, { useState } from "react";

import {
  Screen,
  Container,
  Title,
  CardContainer,
  TopContainer,
  BottomContainer,
  Text,
  BoldText,
  TextLine,
  Button,
  RowContainer,
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import NotesModal from "../../../components/Modals/NotesModal";

export default function MyPeriod() {
  const [notesModal, setNotesModal] = useState(false);

  const subjectList = [
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
    {
      codigo: "EEL170",
      materia: "Computação I",
      professor: "Fernanda",
      sala: "H209",
      turma: "EL1",
      hor1: "Seg 10-13",
      hor2: "Quar 10-12",
    },
  ];

  return (
    <Screen>
      <LeftBar myPeriod />
      <Container>
        <Title>Período Letivo 2024/1</Title>
        <Title>10º Período</Title>
        {notesModal ? (
          <NotesModal setNotesModal={setNotesModal} />
        ) : (
          <RowContainer>
            {subjectList.map((item) => (
              <CardContainer>
                <TopContainer>
                  <BoldText code>{item.codigo}</BoldText>
                  <BoldText> Computação I</BoldText>
                </TopContainer>
                <BottomContainer>
                  <TextLine>
                    <Text bold> Professor(a):</Text>
                    <Text>Fernanda</Text>
                  </TextLine>
                  <TextLine>
                    <Text bold> Sala:</Text>
                    <Text>H209</Text>
                  </TextLine>
                  <TextLine>
                    <Text bold> Turma:</Text>
                    <Text>EL1</Text>
                  </TextLine>
                  <TextLine>
                    <Text bold> Horário:</Text>
                    <Text>
                      Seg 10-13 <br />
                      Quar 10-12
                    </Text>
                  </TextLine>
                  <Button onClick={() => setNotesModal(true)}>Notas</Button>
                </BottomContainer>
              </CardContainer>
            ))}
          </RowContainer>
        )}
      </Container>
    </Screen>
  );
}
