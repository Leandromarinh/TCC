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
}) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [period, setPeriod] = useState("");
  const [materia, setMateria] = useState("");
  const [codigo, setCodigo] = useState("");
  const [ementa, setEmenta] = useState("");
  const [credito, setCredito] = useState("");
  const [prof, setProf] = useState("");
  const [sala, setSala] = useState("");
  const [preReq, setPreReq] = useState("");
  const [estado, setEstado] = useState("Selecione o status da matéria");
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

  const subject = user?.subject.filter((item) => item.period === period);

  console.log("subject", subject);

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
            options={options}
            value={period}
            setValue={setPeriod}
            label={"Clique aqui"}
          />
        </TextContainer>
      )}
      {period === "Escolha Livre" ? (
        <Formik
          initialValues={{
            materia,
            codigo,
            ementa,
            credito,
            prof,
            sala,
            preReq,
            estado,
          }}
          onSubmit={() => {}}
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
                <Title>Matéria:</Title>
                <Input
                  value={values.materia}
                  onChange={handleChange("materia")}
                  onBlur={handleBlur("materia")}
                  placeholder="Digite aqui o nome da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Código:</Title>
                <Input
                  value={values.codigo}
                  onChange={handleChange("codigo")}
                  onBlur={handleBlur("codigo")}
                  placeholder="Digite aqui o código da matéria"
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
                <Title>Status:</Title>
                <DropDown
                  options={statusOptions}
                  value={estado}
                  setValue={setEstado}
                />
              </TextContainer>
              <EditButton
                disabled={!isValid}
                onClick={handleSubmit}
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
