import styled from "styled-components";

import colors from "../../theme/colors";

export const Container = styled.button`
  width: 210px;
  height: 115px;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};

  border-radius: 5px;
  border: 4px solid
    ${(props) =>
      props.status === "A" || props.status === "a"
        ? colors.green
        : props.status === "R" || props.status === "r"
        ? colors.red
        : props.status === "C" || props.status === "c"
        ? colors.blue
        : "rbga(0,0,0,0.5)"};
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: "Roboto";
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  margin-top: ${(props) => (props.bold ? "0" : "-1vh")};
`;
