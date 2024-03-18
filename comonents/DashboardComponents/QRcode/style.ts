import styled, { css } from "styled-components";


export const Container = styled.div`
 height: 77px;
    margin: 0px auto;
    max-width: 82px;
    width: 74px;
    position: absolute;
    top: 4%;
    left: 0%;
    right: 86%;
    ${({ theme }) =>
    theme.isLTR
      ? css`
                 right: 92%;
    `
      : css`
                right: 86%;
    `
  } 
  &.mobile-qr {
    max-width: unset;
    left: 3.3%;
    top: 3.9%;
    height:unset;
    margin: unset;
    max-width:unset;
    width: unset;
    right: unset;;
    @media (max-width: 340px) {
      left: 2.3%;
      }
      
  }
  & .mobile-style{
    @media (min-width: 320px) {
      width: 25px !important;
      height: 25px !important;
      
      }
    @media (min-width: 480px) {
      width: 30px !important;
      height: 30px !important;
      }
      @media (min-width: 768px) {
      width: 45px !important;
      height: 45px !important;
      }
      @media (min-width: 992px) {
      width: 61px !important;
      height: 61px !important;
      }
      @media (min-width: 1200px) {
      width: 100px !important;
      height: 100px !important;
      }
      @media (min-width: 1440px) {
      width: 115px !important;
      height: 115px !important;
      }
      
  }
`;
