import styled from "styled-components";
import colors from "../../../theme/colors";

export const Screen = styled.div`
  width: 99vw;
  height: 100vh;
  margin: 0;

  background-color: #fff;

  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 81vw;
  padding-left: 19vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 10vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */
  margin-left: 3vw;
`;

export const Text = styled.p`
  font-size: 28px;
  font-family: "Roboto";
  font-weight: ${props => props.bold ? "bold" : "500"};
  color: #000;
  margin-top: ${props => props.bold? '-30px' : '0px'};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 8vw;
  height: 5vh;
  margin-top: 5vw;

  background-color: ${colors.green};
  border: none;
  border-radius: 10px;
  opacity: 90%;

  font-size: 1.5em;
  color: #fff;

  &:hover {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    opacity: ${props => (props.disabled ? '90%' : '100%')};
  }
`;