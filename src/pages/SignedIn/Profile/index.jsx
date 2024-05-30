import React, {useState} from "react";

import { Screen, TitleContainer, Text, Container, InputContainer, BottomContainer, EditButton } from "./styles.js";

import LeftBar from "../../../components/LeftBar";
import Input from "../../../components/Input";

import { Formik } from "formik";
import * as yup from 'yup';


export default function Profile(){
    const [name, setName] = useState('Gustavo Pereira Ramos');
    const [email, setEmail] = useState('gustavo@yahoo.com');
    const [period, setPeriod] = useState(10);

    const initialValues ={
        name: name,
        email: email,
        period: period,
        currentPassword: '',
        password: '',
        confirmPassword: '',
    };

    const submit = () => {};

    const ProfileValidationSchema = yup.object().shape({
        name: yup
          .string()
          .required('Campo obrigatório'),
        email: yup
          .string()
          .email('Entre com um endereço de e-mail válido')
          .required('Campo obrigatório'),
        currentPassword: yup
        .string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula')
        .matches(/[0-9]/, 'A senha deve ter pelo menos um dígito')
        .matches(/[@$!%*?&]/, 'A senha deve ter pelo menos um caractere especial'),
        password: yup
        .string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula')
        .matches(/[0-9]/, 'A senha deve ter pelo menos um dígito')
        .matches(/[@$!%*?&]/, 'A senha deve ter pelo menos um caractere especial'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
        period: yup
        .number()
        .required('Este campo é obrigatório')
        .min(1, 'O valor deve ser no mínimo 1')
        .max(30, 'O valor deve ser no máximo 30'),
      });

    return(
        <Screen>
            <LeftBar profile/>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={ProfileValidationSchema}>
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
                <TitleContainer>
                    <Text>Olá,</Text>
                    <Text bold>{name}</Text>
                </TitleContainer>
                
                    <BottomContainer>
                        <InputContainer>
                            <Text>Edite aqui, suas informações pessoais</Text>
                            <Input 
                            text='Nome Completo'
                            type="text" 
                            placeholder="Nome" 
                            onChange={handleChange('name')}
                            value={values.name}
                            onBlur={handleBlur('name')}
                            autoCapitalize="none"
                            errors={errors.name}
                            touched={touched.name}/>
                            <Input 
                            text='Email'
                            type="text" 
                            placeholder="Email" 
                            onChange={handleChange('email')}
                            value={values.email}
                            onBlur={handleBlur('email')}
                            autoCapitalize="none"
                            errors={errors.email}
                            touched={touched.email}/>
                            <Input
                            text='Período'
                            type="number" 
                            placeholder="Insira seu período atual"
                            onChange={handleChange('period')}
                            value={values.period}
                            onBlur={handleBlur('period')}
                            autoCapitalize="none"
                            errors={errors.period}
                            touched={touched.period}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Text>Deseja trocar de senha?</Text>
                            <Input 
                            text='Senha Atual'
                            type="password" 
                            placeholder="Senha"
                            onChange={handleChange('currentPassword')}
                            value={values.currentPassword}
                            onBlur={handleBlur('currentPassword')}
                            autoCapitalize="none"
                            errors={errors.currentPassword}
                            touched={touched.currentPassword}/>
                            <Input 
                            text='Nova Senha'
                            type="password" 
                            placeholder="Senha"
                            onChange={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            autoCapitalize="none"
                            errors={errors.password}
                            touched={touched.password}/>
                            <Input 
                            text='Confirmar Senha'
                            type="password" 
                            placeholder="Confirme a senha"
                            onChange={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            onBlur={handleBlur('confirmPassword')}
                            autoCapitalize="none"
                            errors={errors.confirmPassword}
                            touched={touched.confirmPassword}/>
                        </InputContainer>
                    </BottomContainer>
                <EditButton 
                disabled={!isValid} 
                onClick={handleSubmit}
                type="submit">
                    Editar
                </EditButton>
            </Container>
            )}
            </Formik>
        </Screen>
    )};