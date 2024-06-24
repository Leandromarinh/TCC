import styled from "styled-components";

import colors from "../../../theme/colors";

import Dropdown from "react-dropdown";

export const Container = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: #fff;
  border-radius: 5px;

  border: 3px solid #000;
  overflow-y: auto;
`;

export const ButtonImg = styled.button`
  position: absolute;
  margin-top: 2vh;
  margin-left: 66vw;
  outline: none;
  background-color: #fff;
  border: none;
`;

export const Image = styled.img`
  width: 30px;
`;

export const PeriodTitle = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3em;
  font-weight: 600;
  margin-top: 70px;
  margin-left: 3vw;
`;

export const Title = styled.p`
  font-weight: ${(props) => (props.text ? "400" : "600")};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3em;
`;

export const InputDrop = styled(Dropdown)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;

  border: none;
  width: 80%;
  height: 30px;
  margin-left: 1vw;
  margin-top: 25px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3vw;
  margin-top: ${(props) => (props.input ? "10px" : "70px")};
`;

export const Card = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-left: 3vw;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 2px solid
    ${(props) =>
      props.status === "A" || props.status === "a"
        ? colors.green
        : props.status === "R" || props.status === "r"
        ? colors.red
        : props.status === "C" || props.status === "c"
        ? colors.blue
        : "#000"};
  border-radius: 5px;
`;

export const CardItemContainer = styled.div``;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8vw;
  height: 5vh;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30vw;

  background-color: ${colors.green};
  border: none;
  border-radius: 10px;
  opacity: 90%;

  font-size: 1.5em;
  color: #fff;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }
`;
