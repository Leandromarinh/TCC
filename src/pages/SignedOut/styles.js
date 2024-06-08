import styled from "styled-components";
import colors from "../../theme/colors";

export const Screen = styled.div`
  max-width: 100vw;
  height: 100vh;
  margin: 0;

  background-color: #fff;

  display: flex;
  flex-direction: row;
`;

export const Top = styled.div`
  width: 100%;
  height: 3vh;
  position: fixed;
  top: 0;
  background-color: ${colors.green};
`;

export const Bottom = styled.div`
  margin-top: 0px;
  width: 100vw;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;
  align-self: center;
  padding-bottom: -5px;
`;

export const Left = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ButtonConainer = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 0;
  align-self: center;
  border-bottom: ${(props) => (props.Border ? `3px solid ${colors.green}` : 0)};
  height: 80%;
  opacity: ${(props) => (props.Border ? "100%" : "50%")};

  &:hover {
    cursor: ${(props) => (props.Border ? "default" : "pointer")};
    opacity: 100;
  }
  font-size: 2.1em;
  color: ${colors.green};
  font-weight: bolder;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export const InputIcon = styled.img`
  position: relative;
  left: 10%;
  top: 23%;
  width: 20px;
  height: 20px;
  z-index: 10;
`;

export const Input = styled.input`
  padding-left: 3.1vw;
  font-size: 1em;
  width: 596px;
  height: 40px;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  background-color: #fff;
  font-family: "Roboto";
  filter: drop-shadow(3px 3px #4444);
  outline: none;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
`;

export const Image = styled.img`
  height: 99%;
  padding-top: 5px;
`;

export const FTPContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
`;

export const FTP = styled.button`
  background-color: #fff;
  border: none;
  color: ${colors.blue};
  font-size: 1.2em;
  font-style: italic;
  align-self: center;
  margin-left: 10px;
  &:hover {
    text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 30px;
`;

export const EnterButton = styled.button`
  width: 11.4vw;
  height: 60px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.green};
  font-weight: bold;
  font-family: "Roboto";
  font-size: 2em;
  color: #fff;
  opacity: ${(props) => (props.disabled ? "60%" : "85%")};
  &:hover {
    opacity: ${(props) => (props.disabled ? "60%" : "100%")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

export const RegisterButton = styled.button`
  width: 95%;
  height: 60px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.green};
  font-weight: bold;
  font-family: "Roboto";
  font-size: 2em;
  color: #fff;
  margin-left: 30px;
  opacity: ${(props) => (props.disabled ? "60%" : "85%")};
  &:hover {
    opacity: ${(props) => (props.disabled ? "60%" : "100%")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
