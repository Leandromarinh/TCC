import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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

import UserActions from "../../../store/ducks/user.js";

export default function Grid() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [subjectSeleted, setSubject] = useState(null);
  const [optativeSelected, setOptative] = useState(null);

  const subjectsList = user?.subject?.asMutable();

  const humanas = subjectsList?.filter(
    (item) =>
      item.period === "Atividades Acadêmicas Optativas (Escolha Restrita)"
  );

  const eletivas = subjectsList?.filter(
    (item) => item.period === "Atividades Acadêmicas Optativas"
  );

  const handleClik = (subject, item) => {
    if (subject) {
      setSubject({ ...subject, periodo: item.period });
      setSubjectModal(true);
    } else if (item) {
      setOptative(eletivas);
      setPeriodModal(true);
    } else {
      setOptative(humanas);
      setPeriodModal(true);
    }
  };

  useEffect(() => {
    dispatch(UserActions.getUserRequest());
  }, []);

  const handleSubject = (subject, period) => {
    setSubject({ ...subject, periodo: period });
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
          <SubjectModal
            setSubjectModal={setSubjectModal}
            subject={subjectSeleted}
            setPeriodModal={setPeriodModal}
          />
        ) : periodModal ? (
          <PeriodModal
            setPeriodModal={setPeriodModal}
            setSubjectModal={setSubjectModal}
            grid
            optative={optativeSelected}
            subjectSeleted={subjectSeleted}
            handleSubject={handleSubject}
          />
        ) : (
          <GridContainer>
            {subjectsList?.map((item) => {
              if (
                item.period !==
                  "Atividades Acadêmicas Optativas (Escolha Restrita)" &&
                item.period !== "Atividades Acadêmicas Optativas"
              )
                return (
                  <PeriodContainer>
                    <PeriodText>{item.period + "º " + "Período"}</PeriodText>
                    {item.subjects.map((subject) => (
                      <>
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => handleClik(subject, item)}
                          boldText={subject.codigo}
                          text={subject.nome}
                          status={subject.status}
                        />
                      </>
                    ))}
                    {item.period === "8" ||
                    item.period === "9" ||
                    item.period === "10" ? (
                      <>
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => handleClik(null, item)}
                          boldText={""}
                          text={"Optativa Escolha Condicionada"}
                          status={""}
                        />
                      </>
                    ) : null}
                    {item.period === "1" ||
                    item.period === "8" ||
                    item.period === "9" ? (
                      <>
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => handleClik()}
                          boldText={""}
                          text={"Optativas Escolha Restrita Grupo I"}
                          status={""}
                        />
                      </>
                    ) : null}
                  </PeriodContainer>
                );
            })}
          </GridContainer>
        )}
      </Container>
    </Screen>
  );
}
