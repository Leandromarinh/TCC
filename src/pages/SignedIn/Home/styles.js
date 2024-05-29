import styled from "styled-components";
import colors from "../../../theme/colors";

export const Screen = styled.div`
  width: 99vw;
  height: 100%;
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
`;

export const LineContainer = styled.div`
  width: 80vw;
  display: flex;

  justify-content: space-evenly;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.bottom? 'column':'row'};

  justify-content: baseline;
  align-items: center;
`

export const TextBold = styled.p`
  font-size: 26px;
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
`;

export const Text = styled.p`
  font-size: 28px;
  font-family: "Roboto";
  font-weight: 500;
  color: #000;
  margin-left: 10px;
  margin-top: ${props => props.bottom? '-20px': ''};
`;

export const GradeImg = styled.img`
  width: 70vw;
  align-self: center;
  margin-top: 1vh;
  padding-bottom: 4px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8vw;
  height: 5vh;
  position: absolute;
  right: 1vw;
  top: 3vh;

  background-color: ${colors.green};
  border: none;
  border-radius: 10px;
  opacity: 70%;

  font-size: 1.5em;
  color: #fff;

  &:hover {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    opacity: ${props => (props.disabled ? '70%' : '100%')};
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  margin-left: ${props => props.img? "10vw" : "2vw"};
  margin-top: ${props => props.img? "3vh" : "2vh"};
`;