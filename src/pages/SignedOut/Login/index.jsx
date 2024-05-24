import React, {useState} from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import * as yup from 'yup';

import {Screen,Top, Image, Bottom, Right, Left,
        Container, ButtonConainer, Input, Button,
        InputContainer, InputIcon, ErrorText,
        FTPContainer, FTP, EnterButton} from '../styles';

import Logoutimg from '../../../assets/Logoutimg.svg';
import icon from '../../../assets/icon.svg';
import lock from '../../../assets/lock.svg';
import LoadingSpinner from "../../../components/Loading";


export default function Login(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const loginValidationSchema = yup.object().shape({
        email: yup
          .string()
          .email('Entre com um endereço de e-mail válido')
          .required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
      });

    function submit (values) {
        console.log(values.email);
        console.log(values.password);
        setLoading(!loading);
    }

    const RegisterNavigation = () => {
        navigate('/Register');
    }

    return(
        <Formik
        initialValues={{
            email: '',
            password: '',
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
                <Left>
                    <Container>
                        <ButtonConainer>
                            <Button Border>
                                Entre
                            </Button>
                            <Button onClick={RegisterNavigation}> 
                                Cadastra-se
                            </Button>
                        </ButtonConainer>
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
                        <FTPContainer>
                        <FTP onClick={() => console.log('aq')}>
                                Esqueceu sua senha?
                            </FTP>
                            <EnterButton
                             disabled={
                                values.email === '' ||
                                Boolean(errors.email) ||
                                values.password === '' ||
                                Boolean(errors.password) 
                            }
                            onClick={handleSubmit}
                            type="submit"
                            >
                                {loading ? <LoadingSpinner/> : 'Entrar'}
                            </EnterButton>
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