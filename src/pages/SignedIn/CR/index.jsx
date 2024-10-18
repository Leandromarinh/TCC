import React, { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import CrActions from "../../../store/ducks/cr";

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
  const dispatch = useDispatch();

  const { cro, cr, crDesejado, pa, subjectList, nota, notas, CR, credito } =
    useSelector((state) => state.cr);

  const [periodModal, setPeriodModal] = useState(false);
  const [subjectSeleted, setSubject] = useState(null);

  const initialValues = {
    cro,
    cr,
    crDesejado,
    pa,
  };

  const calcularNota = () => {
    const totalCredito = cro + credito;
    const totalPontos = totalCredito * crDesejado;
    const pontos = totalPontos - pa;
    let resultado = pontos / credito;
    if (resultado > 10) resultado = 10;
    dispatch(CrActions.setNota(parseFloat(resultado.toFixed(1))));
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

  useEffect(() => {
    if (subjectList.length > 0) {
      const fulled_notas = notas.map((item) => (item !== null ? item : nota));

      let pontos = 0;
      for (let i = 0; i < subjectList.length; i++) {
        pontos += subjectList[i]?.credito * fulled_notas[i];
      }

      const totalPontos = pontos + pa;

      const totalCredito = cro + credito;

      let cr = totalPontos / totalCredito;
      if (cr > 10) cr = 10;

      dispatch(CrActions.setCr(parseFloat(cr.toFixed(1))));
    }

    if (credito > 0) {
      calcularNota();
    }
  }, [subjectList, notas, credito]);

  const handleSubject = (subject, period) => {
    const newSubject = { ...subject, periodo: period };
    setSubject(newSubject);

    dispatch(CrActions.editSubjectList([...subjectList, newSubject]));
    dispatch(CrActions.setCredito(credito + newSubject?.credito));
    dispatch(CrActions.editNotasList([...notas, null]));

    setPeriodModal(false);
  };

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
                handleSubject={handleSubject}
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
                    text="Coeficiente de rendimento acumulado (CRA)"
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
                    text="CRA desejado"
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
                      dispatch(
                        CrActions.fillFields(
                          values.cro,
                          values.cr,
                          values.crDesejado,
                          values.pa
                        )
                      );
                      setPeriodModal(true);
                    }}
                  >
                    Escolha as disciplinas
                  </Button>
                </ButtonContainer>
                <RowContainer>
                  {subjectList?.map((item, index) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item?.codigo}</BoldText>
                          <ButtonImg
                            onClick={() => {
                              dispatch(
                                CrActions.setCredito(credito - item?.credito)
                              );

                              let newMatriz = [...subjectList];
                              newMatriz = newMatriz.filter(
                                (subject) => subject?.codigo !== item?.codigo
                              );

                              dispatch(CrActions.editSubjectList(newMatriz));

                              let newNotas = [...notas];
                              newNotas = newNotas.filter(
                                (item, cardIndex) => cardIndex !== index
                              );

                              dispatch(CrActions.editNotasList(newNotas));
                            }}
                          >
                            <CloseImage src={Close} />
                          </ButtonImg>
                          <BoldText upper> {item?.nome}</BoldText>
                        </TopContainer>
                        <BottomContainer>
                          <TextLine>
                            <Text2 bold> Créditos:</Text2>
                            <Text2>{item?.credito}</Text2>
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
                {subjectList?.length !== 0 && (
                  <Text>
                    Redistribua os pontos entre as disciplinas da forma que
                    desejar e acompanhe seu CRA.
                  </Text>
                )}
                <RowContainer>
                  {subjectList?.map((item, index) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item?.codigo}</BoldText>
                          <BoldText> {item?.nome}</BoldText>
                        </TopContainer>
                        <BottomContainer row>
                          <AddButton
                            disabled={notas[index] === 0 ? true : false}
                            onClick={() => {
                              let newNotas = [...notas];
                              let currentNota = notas[index] || nota;

                              const resultado = currentNota - 0.1;
                              const resultado_aprox = Math.min(
                                parseFloat(resultado.toFixed(1)),
                                10
                              );
                              newNotas[index] = resultado_aprox;
                              dispatch(CrActions.editNotasList(newNotas));
                            }}
                            marginRight="0px"
                          >
                            <Image src={RemoveImage} />
                          </AddButton>
                          <InputText
                            value={notas[index] || nota}
                            onChange={() => {}}
                          />
                          <AddButton
                            disabled={notas[index] === 10 ? true : false}
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
                                dispatch(CrActions.editNotasList(newNotas));
                              }
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
            {subjectList?.length > 0 &&
              !periodModal &&
              (notas.some((item) => item !== null) ? (
                <Text>CRA: {CR}</Text>
              ) : (
                <Text>CRA: {values.crDesejado}</Text>
              ))}
          </Container>
        )}
      </Formik>
    </Screen>
  );
}
