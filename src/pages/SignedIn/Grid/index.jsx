import React, { useState } from "react";

import {
  Screen,
  Container,
  SubtitleContainer,
  StatusContainer,
  Bar,
  Text,
  GridContainer,
  PeriodContainer,
  PeriodText,
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import Card from "../../../components/Card";
import SubjectModal from "../../../components/Modals/SubjectModal";
import PeriodModal from "../../../components/Modals/PeriodModal";

export default function Grid() {
  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);

  const periodList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const subjectList = [
    { codigo: "EEL170", materia: "Computação I", status: "A" },
    { codigo: "EEL170", materia: "Computação I", status: "A" },
    { codigo: "EEL170", materia: "Computação I", status: "A" },
    { codigo: "EEL170", materia: "Computação I", status: "A" },
    { codigo: "EEL170", materia: "Computação I", status: "A" },
    { codigo: "", materia: "Optativas Escolhas Restrita Grupo I", status: "N" },
  ];

  const handleClik = (item) => {
    if (item.codigo) setSubjectModal(true);
    else setPeriodModal(true);
  };

  return (
    <Screen>
      <LeftBar grid />
      <Container>
        <SubtitleContainer>
          <Text marginTop>Legenda:</Text>
          <StatusContainer>
            <Bar A />
            <Text>Aprovado</Text>
          </StatusContainer>
          <StatusContainer>
            <Bar R />
            <Text>Reprovado</Text>
          </StatusContainer>
          <StatusContainer>
            <Bar />
            <Text>Cursando</Text>
          </StatusContainer>
        </SubtitleContainer>
        {subjectModal ? (
          <SubjectModal status="A" setSubjectModal={setSubjectModal} />
        ) : periodModal ? (
          <PeriodModal
            setPeriodModal={setPeriodModal}
            setSubjectModal={setSubjectModal}
            grid
          />
        ) : (
          <GridContainer>
            {periodList.map((item) => {
              return (
                <PeriodContainer>
                  <PeriodText>{item}</PeriodText>
                  {subjectList.map((item) => {
                    return (
                      <>
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => handleClik(item)}
                          boldText={item.codigo}
                          text={item.materia}
                          status={item.status}
                        />
                      </>
                    );
                  })}
                </PeriodContainer>
              );
            })}
          </GridContainer>
        )}
      </Container>
    </Screen>
  );
}
