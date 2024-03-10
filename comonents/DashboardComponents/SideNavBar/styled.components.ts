import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.themeColor};
  display: flex;
  flex-direction: column;
  width: 16rem;
  min-height: 100vh;
  background-size: cover;
  transition: 0.5s;
  &.active {
    width: 25%;
    transition: 0.5s;
  }
  &.In-active {
    transition: 0.5s;
    width: 25%;
  } 
  @media (max-width: 768px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: block;
    }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;
export const SideIconWrapper = styled.div`
  display: flex;
  padding: 10px 15px;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.black1};
    cursor: pointer;
  }
`;
export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black1};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: 0.5s;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          &.active {
            transform: rotate(-90deg);
            transition: 0.5s;
          }
          &.In-active {
            transform: rotate(90deg);
            transition: 0.5s;
          }
        `
      : css`
          &.active {
            transform: rotate(90deg);
            transition: 0.5s;
          }
          &.In-active {
            transform: rotate(-90deg);
            transition: 0.5s;
          }
        `}
`;

export const AccordionContainer = styled.div`
  margin-bottom: 100px;
  & .MuiPaper-root {
    background-color: transparent;
    box-shadow: none;
    margin: 0;
    & .MuiButtonBase-root {
      /* border-bottom:1px solid ${({ theme }) => theme.colors.gray3};  */
      :hover {
        background-color: ${({ theme }) => theme.colors.black1};
      }
    }
    &.Mui-expanded {
      margin: 0;
    }
  }
`;
export const PageWrapper = styled.div`
  border-radius: 6px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    color: #fff;
    display: flex;
  }
  background-color: #0000009e;
  color: ${({ theme }) => theme.colors.white};
`;
export const PageLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 6px;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #00000052;
    border-radius: 6px;
    cursor: pointer;
  }
`;
