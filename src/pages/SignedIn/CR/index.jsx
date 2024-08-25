import React, { useState, useRef } from "react";

import {
  Screen,
  Container,
  Text,
  InputContainer,
  Button,
  CardContainer,
  TopContainer,
  BottomContainer,
  RowContainer,
  BoldText,
  TextLine,
  Text2,
  ButtonContainer,
  AddButton,
  Image,
  InputText,
  CloseImage,
  ButtonImg,
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";
import PeriodModal from "../../../components/Modals/PeriodModal";

import AddImage from "../../../assets/add.svg";
import RemoveImage from "../../../assets/less.svg";
import Close from "../../../assets/close.svg";

import { Formik } from "formik";
import * as yup from "yup";

export default function CR() {
  const [periodModal, setPeriodModal] = useState(false);
  const [subjectList, setSubjectList] = useState([]);

  const [nota, setNota] = useState(0);
  const [notas, setNotas] = useState([]);

  const [CR, setCR] = useState(0);

  const credito = useRef(0);
  const nota_att = useRef(0);

  const initialValues = {
    cro: null,
    cr: null,
    crDesejado: null,
    pa: null,
  };

  const calcularNota = (values) => {
    const totalCredito = values.cro + credito.current;
    const totalPontos = totalCredito * values.crDesejado;
    const pontos = totalPontos - values.pa;
    let resultado = pontos / credito.current;
    if (resultado > 10) resultado = 10;
    setNota(parseFloat(resultado.toFixed(1)));
    nota_att.current = parseFloat(resultado.toFixed(1));
  };

  const ValidationSchema = yup.object().shape({
    cro: yup
      .number()
      .min(0, "O valor mínimo é 0")
      .max(999, "O valor máximo é 999")
      .test(
        "is-decimal",
        "O valor deve ter no máximo uma casa decimal",
        (value) =>
          value !== undefined && /^\d{1,3}(\.\d{1})?$/.test(value.toString())
      )
      .required("Este campo é obrigatório"),

    cr: yup
      .number()
      .min(0, "O valor mínimo é 0")
      .max(10, "O valor máximo é 10")
      .test(
        "is-decimal",
        "O valor deve ter no máximo uma casa decimal",
        (value) =>
          value !== undefined && /^(\d{1,2})(\.\d{1})?$/.test(value.toString())
      )
      .required("Este campo é obrigatório"),

    crDesejado: yup
      .number()
      .min(0, "O valor mínimo é 0")
      .max(10, "O valor máximo é 10")
      .test(
        "is-decimal",
        "O valor deve ter no máximo uma casa decimal",
        (value) =>
          value !== undefined && /^(\d{1,2})(\.\d{1})?$/.test(value.toString())
      )
      .required("Este campo é obrigatório"),

    pa: yup
      .number()
      .min(0, "O valor mínimo é 0")
      .max(10000, "O valor máximo é 10000")
      .test(
        "is-decimal",
        "O valor deve ter no máximo uma casa decimal",
        (value) =>
          value !== undefined && /^(\d{1,4})(\.\d{1})?$/.test(value.toString())
      )
      .required("Este campo é obrigatório")
      .when("cro", (cro, schema) => {
        return schema.min(
          cro,
          "O número de pontos acumulados deve ser maior que o número de créditos obtidos (Cro)"
        );
      }),
  });
  return (
    <Screen>
      <LeftBar cr />
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={ValidationSchema}
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
          <Container>
            <Text>
              Faça uma simulação do quanto será necessário tirar nas matérias
              que você está cursando ou deseja cursar, para alcançar seu CR
              desejado. Para isto, insira algumas informações presente no seu
              histórico/boletim do seu último periodo integralizado.
            </Text>
            {periodModal ? (
              <PeriodModal
                setPeriodModal={setPeriodModal}
                align
                setSubjectModal={() => {}}
              />
            ) : (
              <>
                <InputContainer>
                  <Input
                    number
                    text="Créditos obtidos (CRo) acumulado"
                    onChange={handleChange("cro")}
                    value={values.cro}
                    onBlur={handleBlur("cro")}
                    autoCapitalize="none"
                    errors={errors.cro}
                    touched={touched.cro}
                    type="number"
                  />
                  <Input
                    number
                    text="Coeficiente de rendimento (CR) acumulado"
                    onChange={handleChange("cr")}
                    value={values.cr}
                    onBlur={handleBlur("cr")}
                    autoCapitalize="none"
                    errors={errors.cr}
                    touched={touched.cr}
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    number
                    text="Pontos acumulados"
                    onChange={handleChange("pa")}
                    value={values.pa}
                    onBlur={handleBlur("pa")}
                    autoCapitalize="none"
                    errors={errors.pa}
                    touched={touched.pa}
                    type="number"
                  />
                  <Input
                    number
                    text="Coeficiente de rendimento (CR) desejado"
                    onChange={handleChange("crDesejado")}
                    value={values.crDesejado}
                    onBlur={handleBlur("crDesejado")}
                    autoCapitalize="none"
                    errors={errors.crDesejado}
                    touched={touched.crDesejado}
                    type="number"
                  />
                </InputContainer>
                <ButtonContainer>
                  <Button
                    disabled={
                      !isValid ||
                      !values.cro ||
                      !values.pa ||
                      !values.crDesejado
                    }
                    onClick={() => {
                      setPeriodModal(true);

                      setSubjectList([
                        ...subjectList,
                        {
                          codigo: "EEL170",
                          materia: "Computação I",
                          creditos: 5,
                        },
                      ]);

                      credito.current += 5;

                      calcularNota(values);

                      setNotas([...notas, null]);
                    }}
                  >
                    Escolha as disciplinas
                  </Button>
                </ButtonContainer>
                <RowContainer>
                  {subjectList.map((item, index) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item.codigo}</BoldText>
                          <ButtonImg
                            onClick={() => {
                              credito.current = 0; /* alterar depois quando tiver back */
                              console.log(index);
                              setSubjectList(() => {
                                let newMatriz = [...subjectList];
                                newMatriz = newMatriz.filter(
                                  (subject) => subject.codigo !== item.codigo
                                );
                                setSubjectList(newMatriz);
                              });
                              setNotas(() => {
                                let newNotas = [...notas];
                                newNotas = newNotas.filter(
                                  (item, cardIndex) => cardIndex !== index
                                );
                                setNotas(newNotas);
                              });

                              console.log(subjectList);
                              console.log(notas);
                            }}
                          >
                            <CloseImage src={Close} />
                          </ButtonImg>
                          <BoldText upper> {item.materia}</BoldText>
                        </TopContainer>
                        <BottomContainer>
                          <TextLine>
                            <Text2 bold> Créditos:</Text2>
                            <Text2>{item.creditos}</Text2>
                          </TextLine>
                          <TextLine>
                            <Text2 bold> Nota:</Text2>
                            <Text2>{nota}</Text2>
                          </TextLine>
                        </BottomContainer>
                      </CardContainer>
                    );
                  })}
                </RowContainer>
                {subjectList.length !== 0 && (
                  <Text>
                    Redistribua os pontos entre as disciplinas da forma que
                    desejar e acompanhe seu CRA.
                  </Text>
                )}
                <RowContainer>
                  {subjectList.map((item, index) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item.codigo}</BoldText>
                          <BoldText> {item.materia}</BoldText>
                        </TopContainer>
                        <BottomContainer row>
                          <AddButton
                            onClick={() => {
                              let newNotas = [...notas];
                              let currentNota = notas[index] || nota;

                              const resultado = currentNota - 0.1;
                              const resultado_aprox = Math.min(
                                parseFloat(resultado.toFixed(1)),
                                10
                              );
                              newNotas[index] = resultado_aprox;
                              setNotas(newNotas);
                              const fulled_notas = newNotas.map((item) =>
                                item !== null ? item : nota
                              );
                              console.log(fulled_notas);
                              let pontos = 0;
                              for (let i = 0; i < subjectList.length; i++) {
                                console.log("aq");
                                pontos +=
                                  subjectList[i].creditos * fulled_notas[i];
                              }

                              const totalPontos = pontos + values.pa;

                              const totalCredito = values.cro + credito.current;

                              let cr = totalPontos / totalCredito;
                              if (cr > 10) cr = 10;

                              setCR(parseFloat(cr.toFixed(1)));
                            }}
                            marginRight="0px"
                          >
                            <Image src={RemoveImage} />
                          </AddButton>
                          <InputText
                            value={notas[index] || nota}
                            onChange={() => {
                              console.log("aq");
                            }}
                          />
                          <AddButton
                            onClick={() => {
                              let newNotas = [...notas];
                              let currentNota = notas[index] || nota;
                              if (currentNota < 10) {
                                const resultado = currentNota + 0.1;
                                const resultado_aprox = Math.min(
                                  parseFloat(resultado.toFixed(1)),
                                  10
                                );
                                newNotas[index] = resultado_aprox;
                                setNotas(newNotas);
                              }
                              const fulled_notas = newNotas.map((item) =>
                                item !== null ? item : nota
                              );
                              console.log(fulled_notas);
                              let pontos = 0;
                              for (let i = 0; i < subjectList.length; i++) {
                                pontos +=
                                  subjectList[i].creditos * fulled_notas[i];
                              }
                              console.log(pontos);

                              const totalPontos = pontos + values.pa;

                              const totalCredito = values.cro + credito.current;

                              let cr = totalPontos / totalCredito;
                              if (cr > 10) cr = 10;

                              setCR(parseFloat(cr.toFixed(1)));
                            }}
                            marginRight="0px"
                          >
                            <Image src={AddImage} />
                          </AddButton>
                        </BottomContainer>
                      </CardContainer>
                    );
                  })}
                </RowContainer>
              </>
            )}
            {subjectList.length > 0 &&
              !periodModal &&
              (notas.some((item) => item !== null) ? (
                <Text>CR: {CR}</Text>
              ) : (
                <Text>CR: {values.crDesejado}</Text>
              ))}
          </Container>
        )}
      </Formik>
    </Screen>
  );
}
