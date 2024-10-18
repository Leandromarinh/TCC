import React, { useState, useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import UserActions from "../../../store/ducks/user";

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

const SubjectModal = ({ subject, setSubjectModal, setPeriodModal }) => {
  const dispatch = useDispatch();

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

  const codigo = subject?.codigo;
  const nome = subject?.nome;
  const ementa = subject?.ementa;
  const credito = subject?.credito;
  const prof = subject?.prof;
  const sala = subject?.sala;
  const periodo = subject?.periodo;
  const preReq = subject?.preReq;
  const hora = subject?.hora;
  const status = subject?.status;
  const subjectId = subject?._id;
  const cargaHor = subject?.cargaHor;

  const initialValues = {
    ementa: ementa,
    credito: credito,
    sala: sala,
    prof: prof,
    periodo: periodo,
    preReq: preReq,
  };

  const hora1 = hora?.asMutable().hora1;
  const [dia1, setDia1] = useState(hora1.dia);
  const [inicio1, setInicio1] = useState(hora1.inicio);
  const [fim1, setFim1] = useState(hora1.fim);

  const hora2 = hora?.asMutable().hora2;
  const [dia2, setDia2] = useState(hora2.dia);
  const [inicio2, setInicio2] = useState(hora2.inicio);
  const [fim2, setFim2] = useState(hora2.fim);

  const hora3 = hora?.asMutable().hora3;
  const [dia3, setDia3] = useState(hora3.dia);
  const [inicio3, setInicio3] = useState(hora3.inicio);
  const [fim3, setFim3] = useState(hora3.fim);

  const [situacao, setSituacao] = useState(status);

  const submit = (values) => {
    setSubjectModal(false);
    const newObject = {
      codigo,
      nome,
      ementa: values.ementa,
      credito: values.credito,
      prof: values.prof,
      sala: values.sala,
      preReq: values.preReq,
      hora: {
        hora1: { dia: dia1, inicio: inicio1, fim: fim1 },
        hora2: { dia: dia2, inicio: inicio2, fim: fim2 },
        hora3: { dia: dia3, inicio: inicio3, fim: fim3 },
      },
      status: situacao,
      cargaHor,
    };
    dispatch(UserActions.updateSubjectRequest(periodo, subjectId, newObject));
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
        <Container status={situacao}>
          <ButtonImg
            onClick={() => {
              handleSubmit(values);
              setPeriodModal(false);
            }}
          >
            <Image src={Close} />
          </ButtonImg>
          <Code>{codigo}</Code>
          <Subject>{nome}</Subject>
          <TextContainer>
            <Title>Ementa:</Title>
            <TextArea
              value={values.ementa}
              onChange={handleChange("ementa")}
              onBlur={handleBlur("ementa")}
              placeholder="Insira aqui a ementa da matéria"
            />
          </TextContainer>
          <TextContainer>
            <Title>Créditos:</Title>
            <Input
              value={values.credito}
              onChange={handleChange("credito")}
              onBlur={handleBlur("credito")}
              type="number"
              placeholder="Insira aqui a quantidade de créditos da matéria"
            />
          </TextContainer>
          <TextContainer>
            <Title>Professor(a):</Title>
            <Input
              value={values.prof}
              onChange={handleChange("prof")}
              onBlur={handleBlur("prof")}
              placeholder="Insira aqui o(a) professor(a) da matéria"
            />
          </TextContainer>
          <TextContainer>
            <Title>Sala:</Title>
            <Input
              value={values.sala}
              onChange={handleChange("sala")}
              onBlur={handleBlur("sala")}
              placeholder="Insira aqui a sala da matéria"
            />
          </TextContainer>
          <TextContainer>
            <Title>Período:</Title>
            <Input
              value={values.periodo}
              onChange={handleChange("periodo")}
              onBlur={handleBlur("periodo")}
              disabled={true}
            />
          </TextContainer>
          <TextContainer>
            <Title>Pré-requisitos:</Title>
            <Input
              value={values.preReq}
              onChange={handleChange("preReq")}
              onBlur={handleBlur("preReq")}
              placeholder="Insira aqui (caso existir) os pré requisitos da matéria"
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
          <TextContainer drop>
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
          <TextContainer drop>
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
        </Container>
      )}
    </Formik>
  );
};

export default SubjectModal;
