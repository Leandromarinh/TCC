import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';

import {Screen,Top, Image, Bottom, Right, Left,
        Container, ButtonConainer, Input, Button,
        InputContainer, InputIcon, ErrorText,
        FTPContainer, RegisterButton} from '../styles';

import Logoutimg from '../../../assets/Logoutimg.svg';
import icon from '../../../assets/icon.svg';
import lock from '../../../assets/lock.svg';
import LoadingSpinner from "../../../components/Loading";


export default function Register(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const loginValidationSchema = yup.object().shape({
        name: yup
          .string()
          .required('Campo obrigatório'),
        email: yup
          .string()
          .email('Entre com um endereço de e-mail válido')
          .required('Campo obrigatório'),
        password: yup
        .string()
        .required('Campo obrigatório')
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula')
        .matches(/[0-9]/, 'A senha deve ter pelo menos um dígito')
        .matches(/[@$!%*?&]/, 'A senha deve ter pelo menos um caractere especial'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
        .required('Confirmação de senha é obrigatória'),
        period: yup
        .number()
        .required('Este campo é obrigatório')
        .min(1, 'O valor deve ser no mínimo 1')
        .max(30, 'O valor deve ser no máximo 30'),
      });

    function submit (values) {
        console.log(values.email);
        console.log(values.password);
        setLoading(!loading);
    }

    const LoginNavigation = () => {
        navigate('/');
    }

    return(
        <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            period: '',
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
            <Top/>
            <Bottom>
                <Left >
                    <Container>
                        <ButtonConainer>
                            <Button onClick={LoginNavigation}>
                                Entre
                            </Button>
                            <Button Border> 
                                Cadastra-se
                            </Button>
                        </ButtonConainer>
                        <InputContainer>
                            <InputIcon src={icon}/>
                            <Input 
                            type="text" 
                            placeholder="Nome" 
                            onChange={handleChange('name')}
                            value={values.name}
                            onBlur={handleBlur('name')}
                            autoCapitalize="none"/>
                        </InputContainer>
                        {errors.name && touched.name && (
                        <ErrorText >{errors.name}</ErrorText>
                        )}
                        <InputContainer>
                            <InputIcon src={icon}/>
                            <Input 
                            type="text" 
                            placeholder="Email" 
                            onChange={handleChange('email')}
                            value={values.email}
                            onBlur={handleBlur('email')}
                            autoCapitalize="none"/>
                        </InputContainer>
                        {errors.email && touched.email && (
                        <ErrorText >{errors.email}</ErrorText>
                        )}
                        <InputContainer>
                            <InputIcon src={lock}/>
                            <Input 
                            type="password" 
                            placeholder="Senha"
                            onChange={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            autoCapitalize="none"
                            />
                        </InputContainer>
                        {errors.password && touched.password && (
                        <ErrorText >{errors.password}</ErrorText>
                        )}
                        <InputContainer>
                            <InputIcon src={lock}/>
                            <Input 
                            type="password" 
                            placeholder="Confirme a senha"
                            onChange={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            onBlur={handleBlur('confirmPassword')}
                            autoCapitalize="none"
                            />
                        </InputContainer>
                        {errors.confirmPassword && touched.confirmPassword && (
                        <ErrorText >{errors.confirmPassword}</ErrorText>
                        )}
                        <InputContainer>
                            <InputIcon src={icon}/>
                            <Input 
                            type="number" 
                            placeholder="Insira seu período atual"
                            onChange={handleChange('period')}
                            value={values.period}
                            onBlur={handleBlur('period')}
                            autoCapitalize="none"
                            />
                        </InputContainer>
                        {errors.period && touched.period && (
                        <ErrorText >{errors.period}</ErrorText>
                        )}
                        <FTPContainer>
                            <RegisterButton
                             disabled={
                                values.email === '' ||
                                Boolean(errors.email) ||
                                values.password === '' ||
                                Boolean(errors.confirmPassword) ||
                                values.confirmPassword === '' ||
                                Boolean(errors.confirmPassword) ||
                                values.period === '' ||
                                Boolean(errors.period)
                            }
                            onClick={handleSubmit}
                            type="submit"
                            >
                            {loading ? <LoadingSpinner/> : 'Entrar'}
                            </RegisterButton>
                        </FTPContainer>
                    </Container>
                </Left>
                <Right>
                    <Image src={Logoutimg}/>
                </Right>
            </Bottom>
        </Screen>
    )}
    </Formik>
    )
}