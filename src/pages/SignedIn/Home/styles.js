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
`;

export const GradeImg = styled.img`
  width: 70vw;
  align-self: center;
  margin-top: 1vh;
  padding-bottom: 4px;
`;