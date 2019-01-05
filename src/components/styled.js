import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Svg = styled.svg`
  > path {
    opacity: 0.3;
  }
  > path.active {
    opacity: 1;
  }
`;
