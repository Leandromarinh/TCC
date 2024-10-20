import styled from "styled-components";

import colors from "../../../theme/colors";

export const Container = styled.div`
  margin-bottom: 20px;

  overflow: auto;
`;

export const TopContainer = styled.div`
  width: 64.8vw;
  height: 15vh;
  border-radius: 10px 10px 0 0;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 64.6vw;
  height: 55vh;
  border: 2px solid ${colors.green};

  overflow: auto;
`;

export const BoldText = styled.p`
  color: #fff;
  font-size: ${(props) => (props.code ? "32px" : "28px")};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: ${(props) => (props.code ? "bold" : "500")};
  margin-left: 30px;
  margin-right: 5px;
`;

export const Text = styled.p`
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  margin: 10px;
`;

export const Input = styled.textarea`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;

  margin: 10px;
  width: 97%;
  height: 75%;
`;

export const ButtonImg = styled.button`
  position: absolute;

  margin-left: 61vw;
  margin-top: 2vh;

  background-color: ${colors.green};
  border: none;
`;

export const Image = styled.img`
  width: 30px;
`;
