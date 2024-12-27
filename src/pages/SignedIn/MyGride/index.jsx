import React, { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import UserActions from "../../../store/ducks/user";

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
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

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

  const firstPeriod = user?.myGrid[0]?.period ?? 1;

  const [subjectModal, setSubjectModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [offset, setOffet] = useState(firstPeriod);
  const [prevOffset, setPrevOffset] = useState(firstPeriod);
  const [nextSubjects, setNextSubjects] = useState([]);
  const [doubleNextSubjects, setDoubleNextSubjects] = useState([]);
  const [subjectSeleted, setSubject] = useState(null);
  const [subjectIndex, setSubjectIndex] = useState(null);
  const [gridData, setGridData] = useState(user?.myGrid);

  const currentPeriod = user?.period;
  const nextPeriod = currentPeriod + 1;
  const doubleNextPeriod = nextPeriod + 1;

  const nextPeriodSubjects = gridData.filter(
    (item) => item.period === nextPeriod
  );

  const doubleNextPeriodSubjects = gridData.filter(
    (item) => item.period === doubleNextPeriod
  );

  const subjectTreatment = (subjectList) => {
    let contador = 0;
    const arrayNulos = Array.from({ length: 120 }, () => []);

    if (Array.isArray(subjectList) && subjectList.length > 0) {
      subjectList.forEach((periodItem) => {
        periodItem.subjects.forEach((item) => {
          const color = backgroundColors[contador % backgroundColors.length];
          contador++;

          if (item.hora && typeof item.hora === "object") {
            Object.keys(item.hora).forEach((hour) => {
              const obj = item.hora[hour];

              if (obj && obj.dia && obj.inicio && obj.fim) {
                const hour_start = obj.inicio;
                const hour_end = obj.fim;
                const number_start = parseInt(hour_start.substring(0, 2), 10);
                const number_end = parseInt(hour_end.substring(0, 2), 10);

                const index_start = dayMap[obj.dia] + timeMap[hour_start] * 7;
                if (1 === number_end - number_start) {
                  arrayNulos[index_start] = arrayNulos[index_start].concat([
                    <NewCell color={color}>
                      {item.codigo} - {item.nome}
                    </NewCell>,
                  ]);
                  return;
                }

                const index_aux = dayMap[obj.dia] + timeMap[hour_end] * 7 - 7;
                let index_end = index_start + 7;

                arrayNulos[index_start] = arrayNulos[index_start]?.concat([
                  <NewCell color={color}>{item.codigo}</NewCell>,
                ]);

                arrayNulos[index_end] = arrayNulos[index_end]?.concat([
                  <NewCell color={color}>{item.nome}</NewCell>,
                ]);

                index_end += 7;

                while (index_end <= index_aux) {
                  arrayNulos[index_end] = arrayNulos[index_end]?.concat([
                    <NewCell color={color}></NewCell>,
                  ]);
                  index_end += 7;
                }
              }
            });
          }
        });
      });
    }

    return arrayNulos;
  };

  const handleClik = (item) => {
    setSubjectModal(true);
    setSubject(item);
  };

  const handleSubject = (subject, period) => {
    const updatedGridData = gridData.map((item) => {
      if (item.period === subjectIndex) {
        return {
          ...item,
          subjects: [...item.subjects, { ...subject, periodo: period }],
        };
      }
      return item;
    });

    setGridData(updatedGridData);
    setPeriodModal(false);
    setSubjectIndex(null);

    const updatedNextSubjects = subjectTreatment(
      updatedGridData.filter((item) => item.period === nextPeriod)
    );
    setNextSubjects(updatedNextSubjects);

    const updatedDoubleNextSubjects = subjectTreatment(
      updatedGridData.filter((item) => item.period === doubleNextPeriod)
    );
    setDoubleNextSubjects(updatedDoubleNextSubjects);
  };

  const addSubject = () => {
    setPeriodModal(true);
  };

  const removeSubject = (period, codigo) => {
    setGridData((prevGridData) => {
      const updatedGridData = prevGridData.map((item) => {
        if (item.period === period) {
          const updatedSubjects = item.subjects.filter(
            (subject) => subject.codigo !== codigo
          );

          return { ...item, subjects: updatedSubjects };
        }
        return item;
      });
      return updatedGridData;
    });
  };

  const addPeriod = () => {
    const lastPeriod =
      gridData.length > 0 ? gridData[gridData.length - 1].period : 0;
    const period = lastPeriod + 1;
    setGridData([...gridData, { period, subjects: [] }]);
  };

  const handleEdit = useCallback(() => {
    if (editMode) {
      dispatch(UserActions.updateMyGridRequest(gridData));
    }
    setEditMode(!editMode);
  }, [editMode, gridData, dispatch]);

  const updateGridPeriod = (newOffset) => {
    const difference = newOffset - prevOffset;
    setGridData((prevGridData) =>
      prevGridData.map((item) => {
        return { ...item, period: item.period + difference };
      })
    );
    setPrevOffset(newOffset);
  };

  useEffect(() => {
    dispatch(UserActions.getUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setNextSubjects(subjectTreatment(nextPeriodSubjects || []));
      setDoubleNextSubjects(subjectTreatment(doubleNextPeriodSubjects || []));
      setGridData([...user.myGrid]);
    }
  }, [user]);

  useEffect(() => {
    setNextSubjects(
      subjectTreatment(gridData.filter((item) => item.period === nextPeriod))
    );
    setDoubleNextSubjects(
      subjectTreatment(
        gridData.filter((item) => item.period === doubleNextPeriod)
      )
    );
  }, [gridData]);

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
            {gridData[0]?.subjects?.length < 1 ? (
              <Text2>
                Você não possui nenhuma matéria selecionada, <br /> clique em
                editar e monte sua grade curricular do jeito que quiser.
              </Text2>
            ) : (
              <GridContainer>
                {gridData?.map((period, index) => {
                  return (
                    <PeriodContainer>
                      <PeriodText>
                        {gridData[index].subjects.length > 0
                          ? index + Number(offset) + "º " + "Período"
                          : null}
                      </PeriodText>

                      {period?.subjects?.map((subject) => {
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
            {nextPeriodSubjects[0]?.subjects?.length > 0 ? (
              <>
                <Text style={{ marginTop: 70, marginBottom: -40 }}>
                  Veja aqui sua grade do {nextPeriod + "º" + " Período"}. <br />{" "}
                  Caso não apareça nenhuma matéria, defina os horários das
                  matérias planejadas a serem feitas nesse período
                </Text>
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
                        {nextSubjects[index]?.map((item) => {
                          return item;
                        })}
                      </Cell>
                    );
                  })}
                </Grid>
              </>
            ) : null}
            {doubleNextPeriodSubjects[0]?.subjects?.length > 0 ? (
              <>
                <Text style={{ marginTop: 70, marginBottom: -40 }}>
                  Veja aqui sua grade do {doubleNextPeriod + "º" + " Período"}.{" "}
                  <br /> Caso não apareça nenhuma matéria, defina os horários
                  das matérias planejadas a serem feitas nesse período
                </Text>
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
                        {doubleNextSubjects[index]?.map((item) => {
                          return item;
                        })}
                      </Cell>
                    );
                  })}
                </Grid>
              </>
            ) : null}
          </>
        ) : (
          <>
            <Input
              number
              text={"Selecione o período inicial"}
              type="number"
              value={offset}
              onChange={(e) => {
                const newOffset = e.target.value;
                if (newOffset > 0 && newOffset < 31) {
                  setOffet(newOffset);
                  updateGridPeriod(newOffset);
                }
              }}
            />
            <GridContainer>
              {gridData?.map((item, index) => {
                return (
                  <PeriodContainer>
                    <PeriodText>{item.period + "º " + "Período"}</PeriodText>

                    {item.subjects?.map((subject) => {
                      return subject ? (
                        <Card
                          marginTop={"30px"}
                          marginLeft={""}
                          onClick={() => {
                            removeSubject(item.period, subject.codigo);
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
                        setSubjectIndex(item.period);
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
                disabled={gridData[gridData.length - 1]?.subjects.length === 0}
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
