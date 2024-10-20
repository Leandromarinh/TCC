import styled from "styled-components";

import colors from "../../theme/colors";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Container = styled.button`
  width: 210px;
  height: 115px;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};

  border-radius: 5px;
  border: 4px solid
    ${(props) =>
      props.status === "Aprovado"
        ? colors.green
        : props.status === "Reprovado"
        ? colors.red
        : props.status === "Cursando"
        ? colors.blue
        : "rbga(0,0,0)"};
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.deletable &&
    `&:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }`}
`;

const DeleteIcon = styled.div``;

export const Text = styled.p`
  font-size: 18px;
  font-family: "Roboto";
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  margin-top: ${(props) => (props.bold ? "0" : "-1vh")};
`;
