import React, { useState, useEffect } from "react";

import {
  Screen,
  Container,
  EditButton,
  AddButton,
  Image,
  Text2,
} from "./styles";

import {
  SubtitleContainer,
  StatusContainer,
  Text,
  Bar,
  GridContainer,
  PeriodContainer,
  PeriodText,
} from "../Grid/styles";

import LeftBar from "../../../components/LeftBar";

import Card from "../../../components/Card";
import SubjectModal from "../../../components/Modals/SubjectModal";
import PeriodModal from "../../../components/Modals/PeriodModal";
import Input from "../../../components/Input";

import AddImage from "../../../assets/add.svg";

export default function MyGrid() {
  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [periodList, setPeriodList] = useState([[]]);

  const [offset, setOffet] = useState(1);

  const handleClik = (item) => {
    if (item.codigo) setSubjectModal(true);
    else setPeriodModal(true);
  };

  const checkEmptySubjectList = () => {
    for (let i = 0; i < periodList.length; i++) {
      if (periodList[i].length > 0) {
        for (let j = 0; j < i; j++) {
          if (periodList[j].length === 0) return false;
        }
      }
    }
    return true;
  };

  const handleEdit = () => {
    if (editMode) {
      const newPeriodList = periodList.filter(
        (subjectList) => subjectList.length > 0
      );

      if (newPeriodList.length === 0) {
        setPeriodList([[]]);
      } else setPeriodList(newPeriodList);
    }

    if (checkEmptySubjectList()) setEditMode(!editMode);
  };

  const addSubject = (index) => {
    setPeriodModal(true);
    const subject = { codigo: "EEL170", materia: "Computação I", status: "A" };

    setPeriodList(() => {
      const newMatriz = [...periodList];
      newMatriz[index] = [...newMatriz[index], subject];
      return newMatriz;
    });
  };

  const removeSubject = (index, id) => {
    setPeriodList(() => {
      const newMatriz = [...periodList];
      newMatriz[index] = newMatriz[index].filter((item) => item.codigo !== id);
      return newMatriz;
    });
  };

  const addPeriod = () => {
    setPeriodList([...periodList, []]);
  };

  return (
    <Screen>
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
          <EditButton onClick={() => handleEdit()} type="submit">
            {editMode ? "Salvar" : "Editar"}
          </EditButton>
        </SubtitleContainer>
        {subjectModal ? (
          <SubjectModal status="A" setSubjectModal={setSubjectModal} />
        ) : periodModal ? (
          <PeriodModal
            setPeriodModal={setPeriodModal}
            setSubjectModal={setSubjectModal}
          />
        ) : !editMode ? (
          <>
            {periodList[0].length < 1 ? (
              <Text2>
                Você não possui nenhuma matéria selecionada, <br /> clique em
                editar e monte sua grade curricular do jeito que quiser.
              </Text2>
            ) : (
              <GridContainer>
                {periodList.map((period, index) => {
                  return (
                    <PeriodContainer>
                      <PeriodText>
                        {periodList[index].length > 0
                          ? index + Number(offset)
                          : null}
                      </PeriodText>

                      {period.map((subject) => {
                        return (
                          <Card
                            marginTop={"30px"}
                            marginLeft={""}
                            onClick={() => handleClik(subject)}
                            boldText={subject.codigo}
                            text={subject.materia}
                            status={subject.status}
                          />
                        );
                      })}
                    </PeriodContainer>
                  );
                })}
              </GridContainer>
            )}
          </>
        ) : (
          <>
            <Input
              text={"Selecione o período inicial"}
              type="number"
              value={offset}
              onChange={(e) => {
                if (e.target.value > 0 && e.target.value < 31)
                  setOffet(e.target.value);
              }}
            />
            <GridContainer>
              {periodList.map((period, index) => {
                return (
                  <PeriodContainer>
                    <PeriodText>{index + Number(offset)}</PeriodText>

                    {period.map((subject) => {
                      return (
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => {
                            removeSubject(index, subject.codigo);
                          }}
                          boldText={subject.codigo}
                          text={subject.materia}
                          status={subject.status}
                        />
                      );
                    })}
                    <AddButton
                      onClick={() => {
                        addSubject(index);
                      }}
                    >
                      <Image src={AddImage} />
                    </AddButton>
                  </PeriodContainer>
                );
              })}
              <AddButton
                onClick={() => addPeriod()}
                marginRight="50px"
                disabled={periodList[periodList.length - 1].length === 0}
              >
                <Image src={AddImage} />
              </AddButton>
            </GridContainer>
          </>
        )}
      </Container>
    </Screen>
  );
}
