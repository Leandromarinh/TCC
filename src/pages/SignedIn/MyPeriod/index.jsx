import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const currentPeriod = user?.period;
  const myGrid = user?.myGrid.asMutable();

  const [notesModal, setNotesModal] = useState(false);
  const [subjectSelected, setSubject] = useState(null);

  let subjectList = [];

  myGrid?.map((item) => {
    if (item.period === currentPeriod) {
      subjectList = item.subjects;
    }
  });

  return (
    <Screen>
      <LeftBar myPeriod />
      <Container>
        <Title>Período Letivo 2024/2</Title>
        <Title>{currentPeriod + "º Período"}</Title>
        {notesModal ? (
          <NotesModal setNotesModal={setNotesModal} subject={subjectSelected} />
        ) : (
          <>
            {subjectList.length === 0 ? (
              <Text
                style={{
                  marginTop: 30,
                  fontFamily: "Roboto",
                  fontSize: 22,
                  fontWeight: "530",
                }}
              >
                Você não selecionou nenhuma máteria do{" "}
                {currentPeriod + "º Período"},
                <br /> para ter uma visão das matérias as quais você está
                cursando nesse período atual e adicionar anotações nelas <br />
                vá até a tela "Minha Grade" e adicione as máterias que está
                cursando nesse período
              </Text>
            ) : null}
            <RowContainer>
              {subjectList?.lenght === 0 ? (
                <></>
              ) : (
                subjectList?.map((subject) => {
                  return (
                    <CardContainer>
                      <TopContainer>
                        <BoldText code>{subject.codigo}</BoldText>
                        <BoldText> {subject.nome}</BoldText>
                      </TopContainer>
                      <BottomContainer>
                        <TextLine>
                          <Text bold> Professor(a):</Text>
                          <Text>{subject.prof}</Text>
                        </TextLine>
                        <TextLine>
                          <Text bold> Sala:</Text>
                          <Text>{subject.sala}</Text>
                        </TextLine>
                        <TextLine>
                          <Text bold> Horário:</Text>
                          <Text>
                            {subject.hora.hora1.dia} {subject.hora.hora1.inicio}{" "}
                            {subject.hora.hora1.inicio !== "" &&
                            subject.hora.hora1.fim !== ""
                              ? "-"
                              : null}{" "}
                            {subject.hora.hora1.fim}
                            <br />
                            {subject.hora.hora2.dia} {subject.hora.hora2.inicio}{" "}
                            {subject.hora.hora2.inicio !== "" &&
                            subject.hora.hora2.fim !== ""
                              ? "-"
                              : null}{" "}
                            {subject.hora.hora2.fim}
                            <br />
                            {subject.hora.hora3.dia} {subject.hora.hora3.inicio}{" "}
                            {subject.hora.hora3.inicio !== "" &&
                            subject.hora.hora3.fim !== ""
                              ? "-"
                              : null}{" "}
                            {subject.hora.hora3.fim} <br />
                          </Text>
                        </TextLine>
                        <Button
                          onClick={() => {
                            setNotesModal(true);
                            setSubject(subject);
                          }}
                        >
                          Notas
                        </Button>
                      </BottomContainer>
                    </CardContainer>
                  );
                })
              )}
            </RowContainer>
          </>
        )}
      </Container>
    </Screen>
  );
}
