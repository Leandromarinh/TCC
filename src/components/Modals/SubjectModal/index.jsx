import React, { useState } from "react";

import {
  Container,
  Code,
  Subject,
  TextContainer,
  Title,
  Input,
  TextArea,
  InputDrop,
  ButtonImg,
  Image,
} from "./styles";

import { Formik } from "formik";

import Close from "../../../assets/close.svg";

const SubjectModal = ({ status, setSubjectModal }) => {
  const [ementa, setEmenta] = useState(
    "A solução de problemas utilizando computadores. Algoritmos: linguagens para especificar algoritmos, estruturas de dados e controle, modularização, refinamento etapa por etapa. Algoritmos para a solução de problemas numéricos e não numéricos. Pascal: arquivos, alocação dinâmica de memória e orientação a objetos. Introdução à Informática: o hardware e o software de computadores, a apresentação de informações, as linguagens de programação, o tele-processamento e as redes locais. Os impactos da computação."
  );
  const [credito, setCredito] = useState("5.0");
  const [prof, setProf] = useState("Fernanda");
  const [sala, setSala] = useState("H209");
  const [periodo, setPeriodo] = useState("Primeiro");
  const [preReq, setPreReq] = useState("Nenhum");
  const [estado, setEstado] = useState("Aprovado");
  const options = ["Aprovado", "Reprovado", "Cursando", "Nenhum"];
  const initialValues = {
    ementa: ementa,
    credito: credito,
    sala: sala,
    prof: prof,
    periodo: periodo,
    preReq: preReq,
  };
  const submit = () => {
    setSubjectModal(false);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({
        values,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Container status={status}>
          <ButtonImg onClick={handleSubmit}>
            <Image src={Close} />
          </ButtonImg>
          <Code>EEL170</Code>
          <Subject>Computação I</Subject>
          <TextContainer>
            <Title>Ementa:</Title>
            <TextArea
              value={values.ementa}
              onChange={handleChange("ementa")}
              onBlur={handleBlur("ementa")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Créditos:</Title>
            <Input
              value={values.credito}
              onChange={handleChange("credito")}
              onBlur={handleBlur("credito")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Professor(a):</Title>
            <Input
              value={values.prof}
              onChange={handleChange("prof")}
              onBlur={handleBlur("prof")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Sala:</Title>
            <Input
              value={values.sala}
              onChange={handleChange("sala")}
              onBlur={handleBlur("sala")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Período:</Title>
            <Input
              value={values.periodo}
              onChange={handleChange("periodo")}
              onBlur={handleBlur("periodo")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Pré-requisitos:</Title>
            <Input
              value={values.preReq}
              onChange={handleChange("preReq")}
              onBlur={handleBlur("preReq")}
            />
          </TextContainer>
          <TextContainer>
            <Title>Status:</Title>
            <InputDrop
              options={options}
              value={estado}
              onChange={(e) => setEstado(e.value)}
              onBlur={handleBlur("estado")}
            />
          </TextContainer>
        </Container>
      )}
    </Formik>
  );
};

export default SubjectModal;
