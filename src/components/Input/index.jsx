import React from "react";
import { Container, Text, BoxInput, ErrorText } from "./styles";

export default function Input({text, placeholder, type, onChange, id, 
                               value, onBlur, autoCapitalize, errors, touched}){
    return(
        <Container id={id}>
            <Text id={id}> {text} </Text>
            <BoxInput 
            id={id}
            placeholder={placeholder} 
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            autoCapitalize={autoCapitalize}/>
            {errors && touched && (
            <ErrorText >{errors}</ErrorText>
            )}
        </Container>
    );
}