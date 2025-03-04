import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import AuthActions from "../../store/ducks/auth";

import {
  Bottom,
  Container,
  LogoutButton,
  Logoutimg,
  Mid,
  NameText,
  PageButton,
  ProfileIcon,
  Top,
} from "./styles";

import Profile from "../../assets/ProfileIcon.svg";
import Logout from "../../assets/logout.svg";

export default function LeftBar({
  name,
  home,
  profile,
  myPeriod,
  grid,
  myGrid,
  link,
  cr,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const fullName = user?.name;
  const firstName = fullName?.split(" ")[0];

  const LogoOut = () => {
    dispatch(AuthActions.signOut());
  };

  return (
    <Container>
      <Top>
        <ProfileIcon src={Profile} />
        <NameText>{firstName}</NameText>
      </Top>
      <Mid>
        <PageButton active={home} onClick={() => navigate("/home")}>
          Início
        </PageButton>
        <PageButton active={profile} onClick={() => navigate("/perfil")}>
          Perfil
        </PageButton>
        <PageButton active={grid} onClick={() => navigate("/grade")}>
          Grade Curricular
        </PageButton>
        <PageButton active={myGrid} onClick={() => navigate("/minha-grade")}>
          Minha Grade
        </PageButton>
        <PageButton active={myPeriod} onClick={() => navigate("/meu-periodo")}>
          Meu Período
        </PageButton>
        <PageButton active={link} onClick={() => navigate("/links")}>
          Links
        </PageButton>
        <PageButton active={cr} onClick={() => navigate("/cr")}>
          Simulação CR
        </PageButton>
      </Mid>
      <Bottom>
        <LogoutButton onClick={LogoOut}>
          <Logoutimg src={Logout} />
          Sair
        </LogoutButton>
      </Bottom>
    </Container>
  );
}
