import React, { useState } from "react";

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
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";
import PeriodModal from "../../../components/Modals/PeriodModal";

import { Formik } from "formik";
import * as yup from "yup";

export default function CR() {
  const [periodModal, setPeriodModal] = useState(false);
  const [subjectList, setSubjectList] = useState([]);

  const initialValues = {
    cro: "",
    cr: "",
    crDesejado: "",
    pa: "",
  };

  const ValidationSchema = yup.object().shape({});
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
                    text="Créditos obtidos (CRo) acumulado"
                    onChange={handleChange("cro")}
                    value={values.cro}
                    onBlur={handleBlur("cro")}
                    autoCapitalize="none"
                    errors={errors.cro}
                    touched={touched.cro}
                  />
                  <Input
                    text="Coeficiente de rendimento (CR) acumulado"
                    onChange={handleChange("cr")}
                    value={values.cr}
                    onBlur={handleBlur("cr")}
                    autoCapitalize="none"
                    errors={errors.cr}
                    touched={touched.cr}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    text="Pontos acumulados"
                    onChange={handleChange("crDesejado")}
                    value={values.crDesejado}
                    onBlur={handleBlur("crDesejado")}
                    autoCapitalize="none"
                    errors={errors.crDesejado}
                    touched={touched.crDesejado}
                  />
                  <Input
                    text="Nome Coeficiente de rendimento (CR) desejado"
                    onChange={handleChange("pa")}
                    value={values.pa}
                    onBlur={handleBlur("pa")}
                    autoCapitalize="none"
                    errors={errors.pa}
                    touched={touched.pa}
                  />
                </InputContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => {
                      setPeriodModal(true);
                      setSubjectList([
                        ...subjectList,
                        {
                          codigo: "EEL170",
                          materia: "Computação I",
                          creditos: "5.0",
                          nota: "10.0",
                        },
                      ]);
                    }}
                  >
                    Escolha as disciplinas
                  </Button>
                </ButtonContainer>
                <RowContainer>
                  {subjectList.map((item) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item.codigo}</BoldText>
                          <BoldText> {item.materia}</BoldText>
                        </TopContainer>
                        <BottomContainer>
                          <TextLine>
                            <Text2 bold> Créditos:</Text2>
                            <Text2>{item.creditos}</Text2>
                          </TextLine>
                          <TextLine>
                            <Text2 bold> Nota:</Text2>
                            <Text2>{item.nota}</Text2>
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
                  {subjectList.map((item) => {
                    return (
                      <CardContainer>
                        <TopContainer>
                          <BoldText code>{item.codigo}</BoldText>
                          <BoldText> {item.materia}</BoldText>
                        </TopContainer>
                        <BottomContainer>
                          <TextLine>
                            <Text2 bold> Créditos:</Text2>
                            <Text2>{item.creditos}</Text2>
                          </TextLine>
                          <TextLine>
                            <Text2 bold> Nota:</Text2>
                            <Text2>{item.nota}</Text2>
                          </TextLine>
                        </BottomContainer>
                      </CardContainer>
                    );
                  })}
                </RowContainer>
              </>
            )}
          </Container>
        )}
      </Formik>
    </Screen>
  );
}
