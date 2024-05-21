import React from "react";

import {Screen,Top, Image, Bottom, Right, Left, Container, ButtonConainer, Input, Button, ButtonText, InputContainer, InputIcon,FTPContainer, FTP, FTPText, EnterButton} from '../styles';

import Logoutimg from '../../../assets/Logoutimg.svg';
import icon from '../../../assets/image 2.svg';
import lock from '../../../assets/image 3.svg';


export default function Login(){
    return(
        <Screen>
            <Top/>
            <Bottom>
                <Left>
                    <Container>
                        <ButtonConainer>
                            <Button Border>
                                Entre
                            </Button>
                            <Button onClick={() => console.log('aq')}> 
                                Cadastra-se
                            </Button>
                        </ButtonConainer>
                        <InputContainer>
                            <InputIcon src={icon}/>
                            <Input type="text" placeholder="Email"/>
                        </InputContainer>
                        <InputContainer>
                            <InputIcon src={lock}/>
                            <Input type="password" placeholder="Senha"/>
                        </InputContainer>
                        <FTPContainer>
                        <FTP onClick={() => console.log('aq')}>
                                Esqueceu sua senha?
                            </FTP>
                            <EnterButton>
                                Entrar
                            </EnterButton>
                        </FTPContainer>
                    </Container>
                </Left>
                <Right>
                    <Image src={Logoutimg}/>
                </Right>
            </Bottom>
        </Screen>
    )
}