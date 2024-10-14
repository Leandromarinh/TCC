import React, { useState, useEffect } from "react";

import {
  Screen,
  Container,
  EditButton,
  AddButton,
  Image,
  Text2,
  Grid,
  Cell,
  TimeLabel,
  WeekLabel,
  Subject,
  CellText,
  NewCell,
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
  const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const dayMap = {
    DOM: 1,
    SEG: 2,
    TER: 3,
    QUA: 4,
    QUI: 5,
    SEX: 6,
    SÁB: 7,
  };
  const hours = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const timeMap = {
    "06:00": 0,
    "07:00": 1,
    "08:00": 2,
    "09:00": 3,
    "10:00": 4,
    "11:00": 5,
    "12:00": 6,
    "13:00": 7,
    "14:00": 8,
    "15:00": 9,
    "16:00": 10,
    "17:00": 11,
    "18:00": 12,
    "19:00": 13,
    "20:00": 14,
    "21:00": 15,
    "22:00": 16,
  };

  const backgroundColors = [
    "#79A397",
    "#F0E68C", // Khaki
    "#E6E6FA", // Lavender
    "#FFFAF0", // Floral White
    "#FFFACD", // Lemon Chiffon
    "#F5F5DC", // Beige
    "#FAEBD7", // Antique White
    "#E0FFFF", // Light Cyan
    "#F5FFFA", // Mint Cream
    "#FDF5E6", // Old Lace
    "#F0FFF0", // Honeydew
  ];

  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [periodList, setPeriodList] = useState([[]]);
  const [offset, setOffet] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const [subjectSeleted, setSubject] = useState(null);
  const [subjectIndex, setSubjectIndex] = useState(null);

  console.log("materia seleciona:", subjectSeleted);

  const subjectTreatment = () => {
    let contador = 0;
    const arrayNulos = Array.from({ length: 120 }, () => []);
    console.log(arrayNulos);
    subjectlist.forEach((item) => {
      const color = backgroundColors[contador];
      contador++;
      for (const hour of Object.keys(item.hour)) {
        const obj = item.hour[hour];

        if (!obj.day || obj.day === "") continue;

        const hour_start = obj.start;
        const number_start = parseInt(hour_start.substring(0, 2), 10);

        const hour_end = obj.end;
        const number_end = parseInt(hour_end.substring(0, 2), 10);

        const index_start = dayMap[obj.day] + timeMap[obj.start] * 7;

        if (1 === number_end - number_start) {
          arrayNulos[index_start] = arrayNulos[index_start].concat([
            <NewCell color={color}>
              {item.codigo} - {item.materia}
            </NewCell>,
          ]);
          continue;
        }
        const index_aux = dayMap[obj.day] + timeMap[obj.end] * 7 - 7;

        let index_end = index_start + 7;

        arrayNulos[index_start] = arrayNulos[index_start].concat([
          <NewCell color={color}>{item.codigo}</NewCell>,
        ]);

        arrayNulos[index_end] = arrayNulos[index_end].concat([
          <NewCell color={color}>{item.materia}</NewCell>,
        ]);

        index_end += 7;

        while (index_end <= index_aux) {
          arrayNulos[index_end] = arrayNulos[index_end].concat([
            <NewCell color={color}></NewCell>,
          ]);
          index_end += 7;
        }
      }
    });
    return arrayNulos;
  };

  const subjectlist = [
    {
      codigo: "EEL170",
      materia: "Computação I",
      hour: {
        hour1: { day: "TER", start: "15:00", end: "18:00" },
        hour2: { day: "QUI", start: "15:00", end: "17:00" },
        hour3: { day: "", start: "", end: "" },
      },
    },
    {
      codigo: "EEL270",
      materia: "Computação II",
      hour: {
        hour1: { day: "TER", start: "15:00", end: "18:00" },
        hour2: { day: "QUI", start: "15:00", end: "17:00" },
        hour3: { day: "", start: "", end: "" },
      },
    },
    {
      codigo: "EEL170",
      materia: "Computação III",
      hour: {
        hour1: { day: "TER", start: "13:00", end: "15:00" },
        hour2: { day: "QUI", start: "13:00", end: "15:00" },
        hour3: { day: "", start: "", end: "" },
      },
    },
    {
      codigo: "EEL270",
      materia: "Computação IV",
      hour: {
        hour1: { day: "SEG", start: "15:00", end: "17:00" },
        hour2: { day: "QUA", start: "15:00", end: "17:00" },
        hour3: { day: "SEX", start: "12:00", end: "13:00" },
      },
    },
    {
      codigo: "EEL670",
      materia: "Computação V",
      hour: {
        hour1: { day: "", start: "", end: "" },
        hour2: { day: "", start: "", end: "" },
        hour3: { day: "SEX", start: "13:00", end: "14:00" },
      },
    },
  ];

  const handleClik = (item) => {
    setSubjectModal(true);
    setSubject(item);
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
    console.log(periodList);
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

  const handleSubject = (subject, period) => {
    console.log("period:", period);
    setSubject({ ...subject, periodo: period });

    setPeriodList((prev) => {
      const newMatriz = [...prev];
      if (subjectIndex !== null) {
        newMatriz[subjectIndex] = [
          ...newMatriz[subjectIndex],
          { ...subject, periodo: period },
        ];
      }
      return newMatriz;
    });

    console.log(periodList);

    setPeriodModal(false);

    setSubjectIndex(null);

    // setSubject(null);
  };

  const addSubject = (index) => {
    setPeriodModal(true);
  };

  const removeSubject = (index, id) => {
    setPeriodList(() => {
      const newMatriz = [...periodList];
      newMatriz[index] = newMatriz[index].filter((item) => item.codigo !== id);
      return newMatriz;
    });
  };

  const addPeriod = () => {
    if (subjectSeleted) setPeriodList([...periodList, []]);
  };

  useEffect(() => {
    setSubjects(subjectTreatment());
  }, [subjectSeleted]);

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
          <SubjectModal
            setSubjectModal={setSubjectModal}
            subject={subjectSeleted}
            setPeriodModal={setPeriodModal}
          />
        ) : periodModal ? (
          <PeriodModal
            setPeriodModal={setPeriodModal}
            setSubjectModal={setSubjectModal}
            handleSubject={handleSubject}
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
                            text={subject.nome}
                            status={subject.status}
                          />
                        );
                      })}
                    </PeriodContainer>
                  );
                })}
              </GridContainer>
            )}
            <Grid>
              {days.map((day, index) => (
                <WeekLabel key={day} column={index + 2}>
                  {day}
                </WeekLabel>
              ))}
              {hours.map((hour, index) => (
                <TimeLabel key={hour} row={index + 2}>
                  {hour}
                </TimeLabel>
              ))}
              {Array.from({ length: 8 * 15 }).map((_, index) => {
                return (
                  <Cell key={index} onClick={() => {}} color="">
                    {subjects[index]?.map((item) => {
                      return item;
                    })}
                  </Cell>
                );
              })}
            </Grid>
          </>
        ) : (
          <>
            <Input
              number
              text={"Selecione o período inicial"}
              type="number"
              value={offset}
              onChange={(e) => {
                if (e.target.value > 0 && e.target.value < 31)
                  setOffet(e.target.value);
              }}
            />
            <GridContainer>
              {periodList?.map((period, index) => {
                return (
                  <PeriodContainer>
                    <PeriodText>{index + Number(offset)}</PeriodText>

                    {period.map((subject) => {
                      return subject ? (
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => {
                            removeSubject(index, subject.codigo);
                          }}
                          boldText={subject.codigo}
                          text={subject.nome}
                          status={subject.status}
                          deletable={true}
                        />
                      ) : null;
                    })}
                    <AddButton
                      onClick={() => {
                        setSubjectIndex(index);
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
                disabled={periodList[periodList?.length - 1].length === 0}
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
