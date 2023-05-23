import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  margin: 0px auto;
  max-width: 64px;
  width: 150px;
  position: absolute;
  bottom: 4%;
  left: 44%;
  right: 44%;
  &.mobile-qr {
    height: auto;
    left: 43%;
    right: 41%;
    bottom: 9%;
  }
`;
