import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PeriodActions from "../../../store/ducks/period";

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

import api from "../../../services/api";

export default function Home() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();

  const [editMode, setEditMode] = useState(false);
  const [editPdfFile, setPdfFile] = useState();

  const { user } = useSelector((state) => state.auth);

  const {
    currentPeriod,
    beginPeriod,
    endPeriod,
    beginLock,
    endLock,
    beginChange,
    endChange,
    pdfFile,
  } = useSelector((state) => state.period);

  const EditValidationSchema = yup.object().shape({
    currentPeriod: yup
      .string()
      .matches(
        new RegExp(`^${currentYear}\\.[12]$`),
        "O período atual deve ser no formato AAAA.1 ou AAAA.2, onde AAAA é o ano atual"
      ),
    beginPeriod: yup
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
    endPeriod: yup
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
    beginLock: yup
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
    endLock: yup
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
    beginChange: yup
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
    endChange: yup
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
    beginPeriod: beginPeriod,
    endPeriod: endPeriod,
    beginLock: beginLock,
    endLock: endLock,
    beginChange: beginChange,
    endChange: endChange,
  };

  function submit(values) {
    console.log();
    setEditMode(false);
    dispatch(
      PeriodActions.editPeriod(
        values.currentPeriod,
        values.beginPeriod,
        values.endPeriod,
        values.beginLock,
        values.endLock,
        values.beginChange,
        values.endChange,
        editPdfFile
      )
    );
  }

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    const fileTypes = ["application/pdf"];
    console.log("file:", file);

    if (file) {
      if (!fileTypes.includes(file.type)) {
        setError("Por favor, selecione uma imagem no formato PDF");
      } else {
        const pdfUrl = URL.createObjectURL(file);
        setPdfFile(pdfUrl);
        setError("");
      }
    } else {
      setPdfFile(pdfFile || editPdfFile);
    }
  };

  const getUser = async () => {
    const id = user._id;
    try {
      const { data } = await api.get(`/user/${id}`);
      console.log("data:", data);
    } catch (err) {
      console.log("error:", err.response?.data.msg);
    }
  };

  useEffect(() => {
    getUser();
    console.log("pdf file:", pdfFile);
    setPdfFile(pdfFile);
  }, [user._id, pdfFile]);

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
              <EditButton disabled={!isValid || error} onClick={handleSubmit}>
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
                    onChange={handleChange("beginPeriod")}
                    value={values.beginPeriod}
                    onBlur={handleBlur("beginPeriod")}
                    errors={errors.beginPeriod}
                    touched={touched.beginPeriod}
                  />
                  <Input
                    text="Fim do período:"
                    placeholder="Digite a data do fim do período. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("endPeriod")}
                    value={values.endPeriod}
                    onBlur={handleBlur("endPeriod")}
                    errors={errors.endPeriod}
                    touched={touched.endPeriod}
                  />
                  <Input
                    text="Ínicio do período de trancamento:"
                    placeholder="Digite a data de ínicio do período de trancamento. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("beginLock")}
                    value={values.beginLock}
                    onBlur={handleBlur("beginLock")}
                    errors={errors.beginLock}
                    touched={touched.beginLock}
                  />
                  <Input
                    text="Fim do período de trancamento:"
                    placeholder="Digite a data final do período de trancamento. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("endLock")}
                    value={values.endLock}
                    onBlur={handleBlur("endLock")}
                    errors={errors.endLock}
                    touched={touched.endLock}
                  />
                  <Input
                    text="Ínicio do período de alteração de disciplina:"
                    placeholder="Digite a data de ínicio do período de alteração. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("beginChange")}
                    value={values.beginChange}
                    onBlur={handleBlur("beginChange")}
                    errors={errors.beginChange}
                    touched={touched.beginChange}
                  />
                  <Input
                    text="Fim do período de alteração de disciplina:"
                    placeholder="Digite a data final do período de alteração. DD/MM/AAAA"
                    type="text"
                    autoCapitalize="none"
                    onChange={handleChange("endChange")}
                    value={values.endChange}
                    onBlur={handleBlur("endChange")}
                    errors={errors.endChange}
                    touched={touched.endChange}
                  />
                  <Input
                    text="Insira o pdf da grade curricular:"
                    type="file"
                    id="image"
                    onChange={handlePdfChange}
                    accept="application/pdf"
                    errors={error}
                    touched
                  />
                </InputContainer>
              </EditContainer>
            </Container>
          )}
        </Formik>
      ) : (
        <Container>
          <EditButton onClick={() => setEditMode(true)}>Editar</EditButton>
          <LineContainer>
            <TextContainer>
              <TextBold>Período Atual:</TextBold>
              <Text>{currentPeriod}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer>
              <TextBold>Inicío do Período:</TextBold>
              <Text>{beginPeriod}</Text>
            </TextContainer>
            <TextContainer>
              <TextBold>Fim do Período:</TextBold>
              <Text>{endPeriod}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer bottom>
              <TextBold>Período de Trancamento de Disciplina:</TextBold>
              <Text bottom>{beginLock + " à " + endLock}</Text>
            </TextContainer>
            <TextContainer bottom>
              <TextBold>Período de Alteração de Disciplina:</TextBold>
              <Text bottom>{beginChange + " à " + endChange}</Text>
            </TextContainer>
          </LineContainer>
          <LineContainer>
            <TextContainer bottom>
              <TextBold>Grade Horária</TextBold>
            </TextContainer>
          </LineContainer>
          <PDFViewr pdf={pdfFile} />
        </Container>
      )}
    </Screen>
  );
}
