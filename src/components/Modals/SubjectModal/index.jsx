import React, { useState, useCallback, useEffect } from "react";

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

import DropDown from "../../DropDown";

const SubjectModal = ({ status, setSubjectModal }) => {
  const [ementa, setEmenta] = useState(
    "A solução de problemas utilizando computadores. Algoritmos: linguagens para especificar algoritmos, estruturas de dados e controle, modularização, refinamento etapa por etapa. Algoritmos para a solução de problemas numéricos e não numéricos. Pascal: arquivos, alocação dinâmica de memória e orientação a objetos. Introdução à Informática: o hardware e o software de computadores, a apresentação de informações, as linguagens de programação, o tele-processamento e as redes locais. Os impactos da computação."
  );
  const [credito, setCredito] = useState("5.0");
  const [prof, setProf] = useState("Fernanda");
  const [sala, setSala] = useState("H209");
  const [periodo, setPeriodo] = useState("Primeiro");
  const [preReq, setPreReq] = useState("Nenhum");
  const [situacao, setSituacao] = useState("Nenhum");

  const [dia1, setDia1] = useState();
  const [inicio1, setInicio1] = useState();
  const [fim1, setFim1] = useState();
  const [dia12, setDia2] = useState();
  const [inicio2, setInicio2] = useState();
  const [fim2, setFim2] = useState();
  const [dia3, setDia3] = useState();
  const [inicio3, setInicio3] = useState();
  const [fim3, setFim3] = useState();

  useEffect(() => {
    console.log("status:", situacao);
  }, [situacao]);

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
            <DropDown
              value={situacao}
              setValue={setSituacao}
              label={""}
              options={["Aprovado", "Reprovado", "Cursando", "Nenhum"]}
            />
          </TextContainer>
          <TextContainer drop>
            <Title>Primeiro horario na semana:</Title>
            <DropDown
              value={dia1}
              setValue={setDia1}
              label={"Dia"}
              options={["DOM", "SEG", "TER", "QUAR", "QUI", "SEX", "SAB"]}
            />
            <DropDown
              value={inicio1}
              setValue={setInicio1}
              label={"início"}
              options={[
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
              ]}
            />
            <DropDown
              value={fim1}
              setValue={setFim1}
              label={"Fim"}
              options={[
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
              ]}
            />
          </TextContainer>
          <TextContainer drop>
            <Title>Segundo horario na semana:</Title>
            <DropDown
              value={dia1}
              setValue={setDia1}
              label={"Dia"}
              options={["DOM", "SEG", "TER", "QUAR", "QUI", "SEX", "SAB"]}
            />
            <DropDown
              value={inicio1}
              setValue={setInicio1}
              label={"início"}
              options={[
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
              ]}
            />
            <DropDown
              value={fim1}
              setValue={setFim1}
              label={"Fim"}
              options={[
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
              ]}
            />
          </TextContainer>
          <TextContainer drop>
            <Title>Terceiro horario na semana:</Title>
            <DropDown
              value={dia1}
              setValue={setDia1}
              label={"Dia"}
              options={["DOM", "SEG", "TER", "QUAR", "QUI", "SEX", "SAB"]}
            />
            <DropDown
              value={inicio1}
              setValue={setInicio1}
              label={"início"}
              options={[
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
              ]}
            />
            <DropDown
              value={fim1}
              setValue={setFim1}
              label={"Fim"}
              options={[
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
              ]}
            />
          </TextContainer>
        </Container>
      )}
    </Formik>
  );
};

export default SubjectModal;
