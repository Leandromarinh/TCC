import styled from "styled-components";

import colors from "../../theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  margin-top: ${(props) => (props.id ? "0.5vh" : "0vh")};
`;

export const Text = styled.p`
  font-size: 1em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: ${(props) => (props.id ? "700" : "500")};
  color: #000;
`;

export const BoxInput = styled.input`
  width: ${(props) => (props.number ? "15vw" : "25vw")};
  height: ${(props) => (props.id ? "3vh0" : "5vh")};
  padding-left: 0.5vw;

  font-size: 1.3em;
  color: ${(props) => (props.id ? "#000" : "#fff")};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  background-color: ${(props) => (props.id ? "#fff" : `${colors.green}`)};
  border: none;
  border-radius: 5px;
  outline: none;
  margin-top: ${(props) => (props.id ? "0vh" : "-1vh")};
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  align-self: flex-start;
`;
