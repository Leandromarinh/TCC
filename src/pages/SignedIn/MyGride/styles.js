import styled from "styled-components";

import colors from "../../../theme/colors";

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
  align-items: flex-start;

  margin-left: 7vw;
  padding-bottom: 50px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  position: fixed;
  right: 1vw;
  top: 3vh;

  width: 8vw;
  height: 5vh;

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

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 69px;
  height: 69px;
  margin-top: 30px;

  background-color: ${colors.green};

  border-radius: 100%;
  border: none;
  opacity: 90%;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }
`;

export const Image = styled.img`
  width: 30px;
`;
