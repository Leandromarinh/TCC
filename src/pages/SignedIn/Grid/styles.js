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

  display: flex;
  flex-direction: column;
  padding-left: 7vw;
  align-items: flex-start;
  padding-bottom: 50px;

  overflow: auto;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin-top: 20px;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

export const Bar = styled.div`
  width: 120px;
  height: 9px;
  background-color: ${(props) =>
    props.A ? colors.green : props.R ? colors.red : colors.blue};
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 1px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
`;

export const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: center; */

  padding-right: 20px;
  margin-right: 50px;
`;

export const PeriodText = styled.p`
  font-size: 30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
`;
