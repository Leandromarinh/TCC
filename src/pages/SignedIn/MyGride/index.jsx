import React, { useState } from "react";

import { Screen, Container, EditButton, AddButton, Image } from "./styles";

import {
  SubtitleContainer,
  Text,
  StatusContainer,
  Bar,
  GridContainer,
  PeriodContainer,
  PeriodText,
} from "../Grid/styles";

import LeftBar from "../../../components/LeftBar";

import Card from "../../../components/Card";
import SubjectModal from "../../../components/Modals/SubjectModal";
import PeriodModal from "../../../components/Modals/PeriodModal";

import AddImage from "../../../assets/add.svg";

export default function MyGrid() {
  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [periodList, setPeriodList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);

  const handleClik = (item) => {
    if (item.codigo) setSubjectModal(true);
    else setPeriodModal(true);
  };

  const handleEdit = () => {
    setEditMode(!editMode);
    console.log(periodList.length);
  };
  return (
    <Screen>
      <EditButton onClick={handleEdit} type="submit">
        {editMode ? "Salvar" : "Editar"}
      </EditButton>
      <LeftBar myGrid />
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
          />
        ) : (
          <GridContainer>
            <PeriodContainer first>
              <PeriodText>1</PeriodText>
              {subjectList.length === 0 && !editMode && (
                <Text>
                  Clique no botão de editar para selecionar suas matérias já
                  feitas e as que planeja fazer.
                </Text>
              )}
              {subjectList.map((item) => {
                <Card
                  marginTop={"30px"}
                  marginLeft={""}
                  onClick={() => handleClik(item)}
                  boldText={item.codigo}
                  text={item.materia}
                  status={item.status}
                />;
              })}
              {editMode && (
                <AddButton
                  onClick={() => {
                    setSubjectList([
                      ...subjectList,
                      {
                        codigo: "EEL170",
                        materia: "Computação I",
                        status: "A",
                      },
                    ]);
                    console.log(subjectList);
                  }}
                >
                  <Image src={AddImage} />
                </AddButton>
              )}
            </PeriodContainer>
            {periodList.map((item, index) => {
              return (
                <PeriodContainer>
                  {item !== 1 && <PeriodText>{item}</PeriodText>}
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
                  {editMode && (
                    <AddButton
                      onClick={() => setPeriodList([...periodList, item + 1])}
                    >
                      <Image src={AddImage} />
                    </AddButton>
                  )}
                </PeriodContainer>
              );
            })}
          </GridContainer>
        )}
      </Container>
    </Screen>
  );
}
