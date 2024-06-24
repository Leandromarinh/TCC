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
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 9.3vw;
  padding-right: 9.3vw;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.margin ? "9.3vw" : "0")};
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Text = styled.text`
  font-size: 24px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const LinkText = styled.a`
  font-size: 24px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
