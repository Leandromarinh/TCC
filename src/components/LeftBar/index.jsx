import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import AuthActions from '../../store/ducks/auth';

import { Bottom, Container, LogoutButton, Logoutimg, Mid, NameText, PageButton, ProfileIcon, Top } from "./styles";

import Profile from '../../assets/ProfileIcon.svg';
import Logout from '../../assets/logout.svg';

export default function LeftBar( 
    {name, home, profile, 
     grade, myGrade, link, cr} )
    {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    const LogoOut = () => {
        dispatch(AuthActions.signOut());
    }
    return(
        <Container>
            <Top>
                <ProfileIcon src={Profile}/>
                    <NameText>
                        Leandro
                    </NameText>
            </Top>
            <Mid>
                <PageButton active={home} onClick={() => navigate('/home')}>Ínicio</PageButton>
                <PageButton active={profile} onClick={() => navigate('/perfil')}>Perfil</PageButton>
                <PageButton active={grade} >Grande Curricular</PageButton>
                <PageButton active={myGrade}>Minha Grade</PageButton>
                <PageButton active={link} >Links</PageButton>
                <PageButton active={cr} >Simulação CR</PageButton>
            </Mid>
            <Bottom>
                <LogoutButton onClick={LogoOut}>
                    <Logoutimg src={Logout}/>
                    Sair
                </LogoutButton>
            </Bottom>
        </Container>
    );
}