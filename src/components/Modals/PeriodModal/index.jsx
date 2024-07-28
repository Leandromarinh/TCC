import React, { useState } from "react";

import {
  Container,
  ButtonImg,
  Image,
  PeriodTitle,
  Title,
  InputDrop,
  TextContainer,
  CardItemContainer,
  Card,
  EditButton,
} from "./styles";

import { TextArea, Input } from "../SubjectModal/styles";

import Close from "../../../assets/close.svg";

import { Formik } from "formik";

const PeriodModal = ({ setPeriodModal, setSubjectModal, grid, align }) => {
  const [period, setPeriod] = useState("Clique aqui");
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
    "Primeiro",
    "Segundo",
    "Terceiro",
    "Quarto",
    "Quinto",
    "Sexto",
    "Sétimo",
    "Oitavo",
    "Nono",
    "Décimo",
    "Atividades Acadêmicas Optativas",
    "Atividades Acadêmicas Optativas (Escolha Restrita)",
    "Escolha Livre",
  ];
  return (
    <Container align={align}>
      <ButtonImg
        onClick={() => {
          setPeriodModal(false);
          console.log(period);
        }}
      >
        <Image src={Close} />
      </ButtonImg>
      {grid ? (
        <PeriodTitle>
          Atividades Acadêmicas Optativas (Escolha Restrita)
        </PeriodTitle>
      ) : (
        <TextContainer>
          <Title>Selecione o Período:</Title>
          <InputDrop
            options={options}
            value={period}
            onChange={(e) => setPeriod(e.value)}
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
                <Title>Matéria:</Title>
                <Input
                  value={values.materia}
                  onChange={handleChange("materia")}
                  onBlur={handleBlur("materia")}
                  placeholder="Digite aqui o nome da matéria"
                />
              </TextContainer>
              <TextContainer input>
                <Title>Status:</Title>
                <InputDrop
                  options={statusOptions}
                  value={estado}
                  onChange={(e) => setEstado(e.value)}
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
          {options.map((item) => (
            <Card status="a" onClick={() => setSubjectModal(true)}>
              <CardItemContainer>
                <Title>Código</Title>
                <Title text>EEL202</Title>
              </CardItemContainer>
              <CardItemContainer>
                <Title>Nome</Title>
                <Title text>Humanidades e Ciências Sociais</Title>
              </CardItemContainer>
              <CardItemContainer>
                <Title>Créditos</Title>
                <Title text>2.0</Title>
              </CardItemContainer>
              <CardItemContainer>
                <Title>C.H</Title>
                <Title text>30</Title>
              </CardItemContainer>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default PeriodModal;
