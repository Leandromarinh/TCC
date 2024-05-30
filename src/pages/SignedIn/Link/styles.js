import styled from "styled-components";

import colors from '../../../theme/colors'

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
  padding-top: 1vh;
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
  margin-left: ${props => props.margin? "9.3vw" : "0"};
  margin-top: 40px;
`;

export const Text = styled.text`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Roboto';
`;

export const LinkText = styled.a`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
`;


