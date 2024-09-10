import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AuthActions from "../../../store/ducks/auth";

import { Formik } from "formik";
import * as yup from "yup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Screen,
  Top,
  Image,
  Bottom,
  Right,
  Left,
  Container,
  ButtonConainer,
  Input,
  Button,
  InputContainer,
  InputIcon,
  ErrorText,
  FTPContainer,
  FTP,
  EnterButton,
} from "../styles";

import Logoutimg from "../../../assets/Logoutimg.svg";
import icon from "../../../assets/icon.svg";
import lock from "../../../assets/lock.svg";

import LoadingSpinner from "../../../components/Loading";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, signedIn } = useSelector((state) => state.auth);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Entre com um endereço de e-mail válido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  function submit(values) {
    dispatch(AuthActions.signInRequest(values.email, values.password));
  }

  const RegisterNavigation = () => {
    navigate("/registro");
  };

  useEffect(() => {
    if (signedIn) {
      navigate("/home");
    }
  }, [signedIn, navigate]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submit}
      validationSchema={loginValidationSchema}
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
        <Screen>
          <ToastContainer style={{ alignSelf: "center" }} />
          <Top />
          <Bottom>
            <Left>
              <Container>
                <ButtonConainer>
                  <Button Border>Entre</Button>
                  <Button onClick={RegisterNavigation}>Cadastre-se</Button>
                </ButtonConainer>
                <InputContainer>
                  <InputIcon src={icon} />
                  <Input
                    type="text"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                    autoCapitalize="none"
                  />
                </InputContainer>
                {errors.email && touched.email && (
                  <ErrorText>{errors.email}</ErrorText>
                )}
                <InputContainer>
                  <InputIcon src={lock} />
                  <Input
                    type="password"
                    placeholder="Senha"
                    onChange={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                    autoCapitalize="none"
                  />
                </InputContainer>
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
                <FTPContainer>
                  <FTP disabled={values.email === "" || Boolean(errors.email)}>
                    Esqueceu sua senha?
                  </FTP>
                  <EnterButton
                    disabled={
                      values.email === "" ||
                      Boolean(errors.email) ||
                      values.password === "" ||
                      Boolean(errors.password)
                    }
                    onClick={handleSubmit}
                    type="submit"
                  >
                    {loading ? <LoadingSpinner /> : "Entrar"}
                  </EnterButton>
                </FTPContainer>
              </Container>
            </Left>
            <Right>
              <Image src={Logoutimg} />
            </Right>
          </Bottom>
        </Screen>
      )}
    </Formik>
  );
}
