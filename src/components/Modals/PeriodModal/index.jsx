import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import UserActions from "../../../store/ducks/user";

import {
  Container,
  ButtonImg,
  Image,
  PeriodTitle,
  Title,
  TextContainer,
  CardItemContainer,
  Card,
  EditButton,
} from "./styles";

import { TextArea, Input } from "../SubjectModal/styles";

import Close from "../../../assets/close.svg";

import { Formik } from "formik";

import DropDown from "../../DropDown";

const PeriodModal = ({
  setPeriodModal,
  setSubjectModal,
  grid,
  align,
  optative,
  handleSubject,
  cr,
}) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [period, setPeriod] = useState("");
  const [nome, setMateria] = useState("");
  const [codigo, setCodigo] = useState("");
  const [ementa, setEmenta] = useState("");
  const [credito, setCredito] = useState(0);
  const [prof, setProf] = useState("");
  const [sala, setSala] = useState("");
  const [preReq, setPreReq] = useState("");
  const [status, setEstado] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [cargaHor, setCargaHor] = useState(0);
  const statusOptions = ["Aprovado", "Reprovado", "Cursando", "Nenhum"];
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Atividades Acadêmicas Optativas",
    "Atividades Acadêmicas Optativas (Escolha Restrita)",
    "Escolha Livre",
  ];
  const options2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Atividades Acadêmicas Optativas",
    "Atividades Acadêmicas Optativas (Escolha Restrita)",
  ];
  const optionDay = ["DOM", "SEG", "TER", "QUAR", "QUI", "SEX", "SAB", null];
  const optionList = [
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
    null,
  ];

  const [dia1, setDia1] = useState("");
  const [inicio1, setInicio1] = useState("");
  const [fim1, setFim1] = useState("");

  const [dia2, setDia2] = useState("");
  const [inicio2, setInicio2] = useState("");
  const [fim2, setFim2] = useState("");

  const [dia3, setDia3] = useState("");
  const [inicio3, setInicio3] = useState("");
  const [fim3, setFim3] = useState("");

  const subject = user?.subject.filter((item) => item.period === period);

  const submit = (values) => {
    const newSubject = {
      ...values,
      hora: {
        hora1: { dia: dia1, inicio: inicio1, fim: fim1 },
        hora2: { dia: dia2, inicio: inicio2, fim: fim2 },
        hora3: { dia: dia3, inicio: inicio3, fim: fim3 },
      },
      status,
      nota: "",
    };
    handleSubject(newSubject, values.periodo);
  };

  return (
    <Container align={align}>
      <ButtonImg
        onClick={() => {
          setPeriodModal(false);
        }}
      >
        <Image src={Close} />
      </ButtonImg>
      {grid &&
      Array.isArray(optative) &&
      optative.length > 0 &&
      optative?.length > 0 ? (
        <PeriodTitle>{optative[0]?.period}</PeriodTitle>
      ) : (
        <TextContainer>
          <Title>Selecione o Período:</Title>
          <DropDown
            options={cr ? options2 : options}
            value={period}
            setValue={setPeriod}
            label={"Clique aqui"}
          />
        </TextContainer>
      )}
      {period === "Escolha Livre" ? (
        <Formik
          initialValues={{
            nome,
            codigo,
            ementa,
            credito,
            prof,
            sala,
            preReq,
            status,
            periodo,
            cargaHor,
          }}
          onSubmit={submit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <TextContainer input>
                <Title>Matéria*:</Title>
                <Input
                  value={values.nome}
                  onChange={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  placeholder="Digite aqui o nome da matéria (Esse campo é obrigatório)"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Código*:</Title>
                <Input
                  value={values.codigo}
                  onChange={handleChange("codigo")}
                  onBlur={handleBlur("codigo")}
                  placeholder="Digite aqui o código da matéria (Esse campo é obrigatório)"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Período*:</Title>
                <Input
                  value={values.periodo}
                  onChange={handleChange("periodo")}
                  onBlur={handleBlur("periodo")}
                  placeholder="Digite aqui o período da matéria (Esse campo é obrigatório)"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Ementa:</Title>
                <TextArea
                  value={values.ementa}
                  onChange={handleChange("ementa")}
                  onBlur={handleBlur("ementa")}
                  placeholder="Digite aqui a ementa da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Créditos:</Title>
                <Input
                  value={values.credito}
                  onChange={handleChange("credito")}
                  onBlur={handleBlur("credito")}
                  placeholder="Digite aqui a quantidade de créditos da matéria"
                  type="number"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Professor(a):</Title>
                <Input
                  value={values.prof}
                  onChange={handleChange("prof")}
                  onBlur={handleBlur("prof")}
                  placeholder="Digite aqui o/a professor(a) da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Sala:</Title>
                <Input
                  value={values.sala}
                  onChange={handleChange("sala")}
                  onBlur={handleBlur("sala")}
                  placeholder="Digite aqui a sala da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Pré-requisitos:</Title>
                <Input
                  value={values.preReq}
                  onChange={handleChange("preReq")}
                  onBlur={handleBlur("preReq")}
                  placeholder="Digite aqui os pré-requisitos da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Carga Horária:</Title>
                <Input
                  value={values.cargaHor}
                  onChange={handleChange("cargaHor")}
                  onBlur={handleBlur("cargaHor")}
                  placeholder="Digite aqui a Carga Horária da matéria"
                  type="number"
                />
              </TextContainer>

              <TextContainer input>
                <Title>Status:</Title>
                <DropDown
                  options={statusOptions}
                  value={status}
                  setValue={setEstado}
                />
              </TextContainer>
              <TextContainer input>
                <Title>Primeiro horario na semana:</Title>
                <DropDown
                  value={dia1}
                  setValue={setDia1}
                  label={"Dia"}
                  options={optionDay}
                />
                <DropDown
                  value={inicio1}
                  setValue={setInicio1}
                  label={"início"}
                  options={optionList}
                />
                <DropDown
                  value={fim1}
                  setValue={setFim1}
                  label={"Fim"}
                  options={optionList}
                />
              </TextContainer>
              <TextContainer input>
                <Title>Segundo horario na semana:</Title>
                <DropDown
                  value={dia2}
                  setValue={setDia2}
                  label={"Dia"}
                  options={optionDay}
                />
                <DropDown
                  value={inicio2}
                  setValue={setInicio2}
                  label={"início"}
                  options={optionList}
                />
                <DropDown
                  value={fim2}
                  setValue={setFim2}
                  label={"Fim"}
                  options={optionList}
                />
              </TextContainer>
              <TextContainer input>
                <Title>Terceiro horario na semana:</Title>
                <DropDown
                  value={dia3}
                  setValue={setDia3}
                  label={"Dia"}
                  options={optionDay}
                />
                <DropDown
                  value={inicio3}
                  setValue={setInicio3}
                  label={"início"}
                  options={optionList}
                />
                <DropDown
                  value={fim3}
                  setValue={setFim3}
                  label={"Fim"}
                  options={optionList}
                />
              </TextContainer>
              <EditButton
                disabled={!values.nome || !values.periodo || !values.codigo}
                onClick={() => handleSubmit(values)}
                type="submit"
              >
                Salvar
              </EditButton>
            </>
          )}
        </Formik>
      ) : (
        <>
          {Array.isArray(optative) &&
          optative.length > 0 &&
          optative[0]?.subjects?.length > 0
            ? optative[0].subjects.map((subject) => (
                <Card
                  key={subject.codigo} // add a key to each rendered element
                  status={subject.status}
                  onClick={() => {
                    if (grid) setSubjectModal(true);
                    handleSubject(subject, optative[0]?.period);
                  }}
                >
                  <CardItemContainer>
                    <Title>Código</Title>
                    <Title text>{subject.codigo}</Title>
                  </CardItemContainer>
                  <CardItemContainer name>
                    <Title>Nome</Title>
                    <Title text>{subject.nome}</Title>
                  </CardItemContainer>
                  <CardItemContainer>
                    <Title>Créditos</Title>
                    <Title text>{subject.credito}</Title>
                  </CardItemContainer>
                  <CardItemContainer>
                    <Title>C.H</Title>
                    <Title text>{subject.cargaHor}</Title>
                  </CardItemContainer>
                </Card>
              ))
            : subject[0]?.subjects?.map((item) => {
                return (
                  <Card
                    key={item.codigo}
                    status={item.status}
                    onClick={() => {
                      if (grid) setSubjectModal(true);
                      handleSubject(item, period);
                    }}
                  >
                    <CardItemContainer>
                      <Title>Código</Title>
                      <Title text>{item.codigo}</Title>
                    </CardItemContainer>
                    <CardItemContainer name>
                      <Title>Nome</Title>
                      <Title text>{item.nome}</Title>
                    </CardItemContainer>
                    <CardItemContainer>
                      <Title>Créditos</Title>
                      <Title text>{item.credito}</Title>
                    </CardItemContainer>
                    <CardItemContainer>
                      <Title>C.H</Title>
                      <Title text>{item.cargaHor}</Title>
                    </CardItemContainer>
                  </Card>
                );
              })}
        </>
      )}
    </Container>
  );
};

export default PeriodModal;
