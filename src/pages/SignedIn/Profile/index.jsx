import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Screen,
  TitleContainer,
  Text,
  Container,
  InputContainer,
  BottomContainer,
  EditButton,
  ButtonContainer,
} from "./styles.js";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";

import { Formik } from "formik";
import * as yup from "yup";

import UserActions from "../../../store/ducks/user.js";

import LoadingSpinner from "../../../components/Loading";

import { ToastContainer, toast } from "react-toastify";

export default function Profile() {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);

  const initialValues = {
    name: user.name,
    email: user.email,
    period: user.period,
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };

  useEffect(() => {
    dispatch(UserActions.getUserRequest());
  }, [loading]);

  const editInfo = (values) => {
    dispatch(
      UserActions.updateUserRequest(values.name, values.email, values.period)
    );
  };

  const editPassword = (values) => {
    dispatch(
      UserActions.updatePasswordRequest(values.currentPassword, values.password)
    );
  };

  const disableButton = (values, isValid, touched) => {
    if (Object.keys(touched).length === 0) {
      return true;
    } else if (
      values.name === initialValues.name &&
      values.email === initialValues.email &&
      values.period === initialValues.period
    ) {
      return true;
    }
    if (!isValid) return true;
    return false;
  };

  const disableButtonPassword = (values, isValid, touched) => {
    if (Object.keys(touched).length === 0) {
      return true;
    } else if (
      values.currentPassword === initialValues.currentPassword &&
      values.password === initialValues.password &&
      values.confirmPassword === initialValues.confirmPassword
    ) {
      return true;
    } else if (
      values.currentPassword !== "" &&
      (values.password === "" || values.confirmPassword === "")
    ) {
      return true;
    }
    if (!isValid) return true;
    return false;
  };

  const ProfileValidationSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Entre com um endereço de e-mail válido")
      .required("Campo obrigatório"),
    currentPassword: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .matches(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
      .matches(/[a-z]/, "A senha deve ter pelo menos uma letra minúscula")
      .matches(/[0-9]/, "A senha deve ter pelo menos um dígito")
      .matches(
        /[@$!%*?&]/,
        "A senha deve ter pelo menos um caractere especial"
      ),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .matches(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
      .matches(/[a-z]/, "A senha deve ter pelo menos uma letra minúscula")
      .matches(/[0-9]/, "A senha deve ter pelo menos um dígito")
      .matches(
        /[@$!%*?&]/,
        "A senha deve ter pelo menos um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    period: yup
      .number()
      .required("Este campo é obrigatório")
      .min(1, "O valor deve ser no mínimo 1")
      .max(30, "O valor deve ser no máximo 30"),
  });

  return (
    <Screen>
      <ToastContainer style={{ alignSelf: "center" }} />
      <LeftBar profile />
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileValidationSchema}
      >
        {({ values, handleChange, handleBlur, isValid, errors, touched }) => (
          <Container>
            <TitleContainer>
              <Text>Olá,</Text>
              <Text bold>{user.name}</Text>
            </TitleContainer>

            <BottomContainer>
              <InputContainer>
                <Text>Edite aqui, suas informações pessoais</Text>
                <Input
                  text="Nome Completo"
                  type="text"
                  placeholder="Nome"
                  onChange={handleChange("name")}
                  value={values.name}
                  onBlur={handleBlur("name")}
                  autoCapitalize="none"
                  errors={errors.name}
                  touched={touched.name}
                />
                <Input
                  text="Email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                  errors={errors.email}
                  touched={touched.email}
                />
                <Input
                  text="Período"
                  type="number"
                  placeholder="Insira seu período atual"
                  onChange={handleChange("period")}
                  value={values.period}
                  onBlur={handleBlur("period")}
                  autoCapitalize="none"
                  errors={errors.period}
                  touched={touched.period}
                />
              </InputContainer>
              <InputContainer>
                <Text>Deseja trocar de senha?</Text>
                <Input
                  text="Senha Atual"
                  type="password"
                  onChange={handleChange("currentPassword")}
                  value={values.currentPassword}
                  onBlur={handleBlur("currentPassword")}
                  autoCapitalize="none"
                  errors={errors.currentPassword}
                  touched={touched.currentPassword}
                />
                <Input
                  text="Nova Senha"
                  type="password"
                  onChange={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  autoCapitalize="none"
                  errors={errors.password}
                  touched={touched.password}
                />
                <Input
                  text="Confirmar Senha"
                  type="password"
                  onChange={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  onBlur={handleBlur("confirmPassword")}
                  autoCapitalize="none"
                  errors={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
              </InputContainer>
            </BottomContainer>
            <ButtonContainer>
              <EditButton
                disabled={disableButton(values, isValid, touched)}
                onClick={() => editInfo(values)}
                type="submit"
              >
                {loading ? <LoadingSpinner /> : "Editar"}
              </EditButton>
              <EditButton
                disabled={disableButtonPassword(values, isValid, touched)}
                onClick={() => editPassword(values)}
                type="submit"
              >
                {loading ? <LoadingSpinner /> : "Editar"}
              </EditButton>
            </ButtonContainer>
          </Container>
        )}
      </Formik>
    </Screen>
  );
}
