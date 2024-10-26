import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Screen,
  TextBold,
  TextContainer,
  Text,
  LineContainer,
  EditButton,
  InputContainer,
  EditContainer,
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";
import PDFViewr from "../../../components/PDFViwer";

import { Formik } from "formik";
import * as yup from "yup";

import pdfFile from "../../../assets/Grade-Horaria_2024-2.pdf";

import UserActions from "../../../store/ducks/user.js";

export default function Home() {
  const dispatch = useDispatch();

  const [currentPeriod, setCurrentPeriod] = useState("2024.2");
  const [periodStart, setPeriodStart] = useState("12/08/2024");
  const [periodEnd, setPeriodEnd] = useState("14/12/2024");
  const [lockPeriodStart, setLockPeriodStart] = useState("30/08/2024");
  const [lockPeriodEnd, setLockPeriodEnd] = useState("10/09/2024");
  const [changePeriodStart, setChangePeriodStart] = useState("12/08/2024");
  const [changePeriodEnd, setChangePeriodEnd] = useState("23/08/2024");

  const currentYear = new Date().getFullYear();

  const [editMode, setEditMode] = useState(false);

  const { user } = useSelector((state) => state.user);

  const EditValidationSchema = yup.object().shape({
    currentPeriod: yup
      .string()
      .matches(
        new RegExp(`^${currentYear}\\.[12]$`),
        "O período atual deve ser no formato AAAA.1 ou AAAA.2, onde AAAA é o ano atual"
      ),
    periodStart: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Ínicio do período deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do ínicio do período não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
    periodEnd: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Fim do período deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do fim do período não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
    lockPeriodStart: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Ínicio do período de trancamento deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do ínicio do período de trancamento não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
    lockPeriodEnd: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Fim do período de trancamento deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do fim do período de trancamento não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
    changePeriodStart: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Ínicio do período de alteração de disciplina deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do ínicio do período de alteração de disciplina não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
    changePeriodEnd: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Fim do período de alteração de disciplina deve estar no formato DD/MM/AAAA"
      )
      .test(
        "is-valid-year",
        "O ano do fim do período de alteração de disciplina não pode ser diferente ao ano atual",
        (value) => {
          if (!value) return false;
          const year = parseInt(value.split("/")[2], 10);
          if (year === currentYear) return true;
          else return false;
        }
      ),
  });

  const initialValues = {
    currentPeriod: currentPeriod,
    periodStart: periodStart,
    periodEnd: periodEnd,
    lockPeriodStart: lockPeriodStart,
    lockPeriodEnd: lockPeriodEnd,
    changePeriodStart: changePeriodStart,
    changePeriodEnd: changePeriodEnd,
  };

  function submit(values) {
    setEditMode(false);
    setCurrentPeriod(values.currentPeriod);
    setPeriodStart(values.periodStart);
    setPeriodEnd(values.periodEnd);
    setLockPeriodStart(values.lockPeriodStart);
    setLockPeriodEnd(values.lockPeriodEnd);
    setChangePeriodStart(values.changePeriodStart);
    setChangePeriodEnd(values.changePeriodEnd);
  }

  useEffect(() => {
    dispatch(UserActions.getUserRequest());
  }, []);

  return (
    <Screen>
      <LeftBar home />
      {editMode ? (
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={EditValidationSchema}
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
              <EditButton disabled={false} onClick={handleSubmit} type="submit">
                Salvar
              </EditButton>
              <EditContainer>
                <InputContainer>
                  <Input
                    text="Período atual:"
                    placeholder="Digite o período atual. Ex.: 2024.1"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("currentPeriod")}
                    value={values.currentPeriod}
                    onBlur={handleBlur("currentPeriod")}
                    errors={errors.currentPeriod}
                    touched={touched.currentPeriod}
                  />
                  <Input
                    text="Ínicio do período:"
                    placeholder="Digite a data de ínicio do período. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("periodStart")}
                    value={values.periodStart}
                    onBlur={handleBlur("periodStart")}
                    errors={errors.periodStart}
                    touched={touched.periodStart}
                  />
                  <Input
                    text="Fim do período:"
                    placeholder="Digite a data do fim do período. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("periodEnd")}
                    value={values.periodEnd}
                    onBlur={handleBlur("periodEnd")}
                    errors={errors.periodEnd}
                    touched={touched.periodEnd}
                  />
                  <Input
                    text="Ínicio do período de trancamento:"
                    placeholder="Digite a data de ínicio do período de trancamento. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("lockPeriodStart")}
                    value={values.lockPeriodStart}
                    onBlur={handleBlur("lockPeriodStart")}
                    errors={errors.lockPeriodStart}
                    touched={touched.lockPeriodStart}
                  />
                  <Input
                    text="Fim do período de trancamento:"
                    placeholder="Digite a data final do período de trancamento. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("lockPeriodEnd")}
                    value={values.lockPeriodEnd}
                    onBlur={handleBlur("lockPeriodEnd")}
                    errors={errors.lockPeriodEnd}
                    touched={touched.lockPeriodEnd}
                  />
                  <Input
                    text="Ínicio do período de alteração de disciplina:"
                    placeholder="Digite a data de ínicio do período de alteração. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("changePeriodStart")}
                    value={values.changePeriodStart}
                    onBlur={handleBlur("changePeriodStart")}
                    errors={errors.changePeriodStart}
                    touched={touched.changePeriodStart}
                  />
                  <Input
                    text="Fim do período de alteração de disciplina:"
                    placeholder="Digite a data final do período de alteração. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("changePeriodEnd")}
                    value={values.changePeriodEnd}
                    onBlur={handleBlur("changePeriodEnd")}
                    errors={errors.changePeriodEnd}
                    touched={touched.changePeriodEnd}
                  />
                  {/* <Input
                    text="Insira o pdf da grade curricular:"
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    touched
                    errors={error}
                  /> */}
                </InputContainer>
              </EditContainer>
            </Container>
          )}
        </Formik>
      ) : (
        <Container>
          {/* <EditButton onClick={() => setEditMode(true)}>Editar</EditButton> */}
          <LineContainer>
            <TextContainer>
              <TextBold>Período Atual:</TextBold>
              <Text>{currentPeriod}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer>
              <TextBold>Inicío do Período:</TextBold>
              <Text>{periodStart}</Text>
            </TextContainer>
            <TextContainer>
              <TextBold>Fim do Período:</TextBold>
              <Text>{periodEnd}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer bottom>
              <TextBold>Período de Trancamento de Disciplina:</TextBold>
              <Text bottom>{lockPeriodStart + " à " + lockPeriodEnd}</Text>
            </TextContainer>
            <TextContainer bottom>
              <TextBold>Período de Alteração de Disciplina:</TextBold>
              <Text bottom>{changePeriodStart + " à " + changePeriodEnd}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer bottom>
              <TextBold>Grade Horária</TextBold>
            </TextContainer>
          </LineContainer>
          <PDFViewr />
        </Container>
      )}
    </Screen>
  );
}
