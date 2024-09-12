import styled from "styled-components";

import colors from "../../../theme/colors";

import Dropdown from "react-dropdown";

export const Container = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: #fff;
  border-radius: 5px;

  border: 4px solid
    ${(props) =>
      props.status === "A" || props.status === "a"
        ? colors.green
        : props.status === "R" || props.status === "r"
        ? colors.red
        : props.status === "C" || props.status === "c"
        ? colors.blue
        : "#000"};
  overflow-y: auto;
`;

export const Code = styled.p`
  margin-left: 5vw;
  font-size: 2em;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Subject = styled.p`
  margin-left: 5vw;
  font-size: 1.5em;
  margin-top: -30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5vw;
  margin-top: ${(props) => (props.drop ? "20px" : 0)};
  margin-bottom: ${(props) => (props.drop ? "20px" : 0)};
`;

export const Title = styled.p`
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3em;
`;

export const TextArea = styled.textarea`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;

  border: none;
  width: 80%;
  height: 100px;
  margin-left: 1vw;
  margin-top: 20px;
`;

export const Input = styled.input`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;

  border: none;
  width: 80%;
  height: 30px;
  margin-left: 1vw;
  margin-top: 20px;
`;

export const ButtonImg = styled.button`
  position: fixed;
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
