import React, { useState } from "react";

import {
  Container,
  Screen,
  TextBold,
  TextContainer,
  Text,
  LineContainer,
  GradeImg,
  EditButton,
  InputContainer,
  EditContainer,
} from "./styles";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";

import { Formik } from "formik";
import * as yup from "yup";

import Period1 from "./assets/Period1.png";
import Period2 from "./assets/Period2.png";
import Period3 from "./assets/Period3.png";
import Period4 from "./assets/Period4.png";
import Period5 from "./assets/Period5.png";
import Period6 from "./assets/Period6.png";
import Period7 from "./assets/Period7.png";
import Period8 from "./assets/Period8-9-10.png";
import Eletiva1 from "./assets/EletivaManha.png";
import Eletiva2 from "./assets/EletivasTarde.png";

export default function Home() {
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();

  const [editMode, setEditMode] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState("2024.1");
  const [beginPeriod, setBeginPeriod] = useState("18/03/2024");
  const [endPeriod, setEndPeriod] = useState("20/07/2024");
  const [beginLock, setBeginLock] = useState("10/04/2024");
  const [endLock, setEndLock] = useState("20/04/2024");
  const [beginChange, setBeginChange] = useState("10/04/2024");
  const [endChange, setEndChange] = useState("20/04/2024");

  const [img1, setImg1] = useState(Period1);
  const [img2, setImg2] = useState(Period2);
  const [img3, setImg3] = useState(Period3);
  const [img4, setImg4] = useState(Period4);
  const [img5, setImg5] = useState(Period5);
  const [img6, setImg6] = useState(Period6);
  const [img7, setImg7] = useState(Period7);
  const [img8, setImg8] = useState(Period8);
  const [img9, setImg9] = useState(Eletiva1);
  const [img10, setImg10] = useState(Eletiva2);

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
          console.log("ano:", year);
          console.log("ano atual:", currentYear);
          console.log(year === currentYear);
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
    setEditMode(false);
    setCurrentPeriod(values.currentPeriod);
    setBeginPeriod(values.beginPeriod);
    setEndPeriod(values.endPeriod);
    setBeginLock(values.beginLock);
    setEndLock(values.endLock);
    setBeginChange(values.beginChange);
    setEndChange(values.endChange);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fileTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file) {
      if (!fileTypes.includes(file.type)) {
        setError("Por favor, selecione uma imagem no formato PNG, JPEG ou JPG");
        setImg1(null);
      } else {
        const imageUrl = URL.createObjectURL(file);
        setImg1(imageUrl);
        setError("");
      }
    }
  };

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
                </InputContainer>
                <InputContainer img>
                  <Input
                    text="Grade curricular do 1º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept="image/png, image/jpeg, image/jpg"
                    errors={error}
                    touched
                  />
                  <Input
                    text="Grade curricular do 2º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 3º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 4º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 5º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 6º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 7º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular do 8º período (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular Eletiva manhã (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
                  />
                  <Input
                    text="Grade curricular Eletiva tarde (insira um print):"
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept=".jpg, .jpeg, .png"
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
          <GradeImg src={img1} />
          <GradeImg src={img2} />
          <GradeImg src={img3} />
          <GradeImg src={img4} />
          <GradeImg src={img5} />
          <GradeImg src={img6} />
          <GradeImg src={img7} />
          <GradeImg src={img8} />
          <GradeImg src={img9} />
          <GradeImg src={img10} />
        </Container>
      )}
    </Screen>
  );
}
