import styled from "styled-components";

import colors from "../../theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ZoomControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  button {
    background-color: ${colors.green};
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 3px;
  }

  span {
    margin: 0 10px;
    font-weight: bold;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 75vw;
  align-self: center;
  margin-top: 1vh;
  padding-bottom: 4px;
`;
