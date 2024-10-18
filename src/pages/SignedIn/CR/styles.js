import styled from "styled-components";

import colors from "../../../theme/colors";

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;

  background-color: #fff;

  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 81vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 1vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-evenly;
  align-self: center;

  width: 100%;
  margin-top: 5vh;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 369px;
  height: 67px;

  margin-top: 10vh;

  background-color: ${colors.green};
  border: none;
  border-radius: 5px;
  opacity: 90%;

  font-size: 20px;
  color: #fff;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  align-self: center;
`;

export const CardContainer = styled.div`
  margin-top: 5vh;

  margin-left: 40px;
  margin-right: 70px;
`;

export const TopContainer = styled.div`
  width: 320px;
  height: 125px;
  border-radius: 10px 10px 0 0;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const CloseImage = styled.img`
  width: 25px;
`;

export const ButtonImg = styled.button`
  margin-left: 85%;
  outline: none;
  background-color: ${colors.green};

  border: none;
`;

export const BottomContainer = styled.div`
  width: 316px;
  border: 2px solid ${colors.green};

  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: space-around;
`;

export const BoldText = styled.p`
  color: #fff;
  font-size: ${(props) => (props.code ? "32px" : "28px")};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: ${(props) => (props.code ? "bold" : "500")};
  margin-left: 30px;
  margin-right: 5px;
  margin-bottom: -30px;
  margin-top: ${(props) => (props.upper ? "5px" : "")};
`;

export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text2 = styled.p`
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  margin-left: ${(props) => (props.bold ? "30px" : "5px")};
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 59px;
  height: 59px;

  background-color: ${colors.green};

  border-radius: 100%;
  border: none;
  opacity: 90%;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }

  margin-right: ${(props) => props.marginRight};
  margin: 30px 0px;
`;

export const Image = styled.img`
  width: 30px;
`;

export const InputText = styled.input`
  width: 45px;
  height: 25px;
  align-self: center;
  align-items: center;

  font-size: 20px;

  border: none;
`;
