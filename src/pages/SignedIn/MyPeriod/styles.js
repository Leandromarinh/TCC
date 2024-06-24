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
  padding-left: 7vw;

  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const CardContainer = styled.div`
  margin-right: 40px;
  padding-right: 40px;
`;

export const TopContainer = styled.div`
  width: 400px;
  height: 130px;
  border-radius: 10px 10px 0 0;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 396px;

  border: 2px solid ${colors.green};
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  margin-left: ${(props) => (props.bold ? "30px" : "5px")};
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
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 125px;
  margin-bottom: 20px;

  border-radius: 10px;
  border: none;
  background-color: ${colors.green};

  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  opacity: 90%;
  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;
