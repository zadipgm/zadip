import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  > svg {
    position: absolute;
    top: 0;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray1};
  > span {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 12rem;
  right: 2.5rem;
  width: 65%;
  * {
    margin-bottom: 1rem;
  }
  > h1 {
    font-family: "Poppins", sans-serif;
    color: var(--white);
    font-size: 3rem !important;
    line-height: 1;
    margin-bottom: 2rem;
  }
  > h2 {
    font-size: 2rem !important;
    font-weight: 500;
    line-height: 1;
  }
`;
export const Date = styled.div`
  position: absolute;
  bottom: 5%;
  font-size: 0.75rem;
`;
export const QRcode = styled.div`
  position: absolute;
  top: 3%;
  right: 0;
  left: 89%;
`;
export const Text = styled.p`
  position: absolute;
  right: 16%;
`;
export const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
export const English = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 30px;
  text-align: justify;
  > p {
    &.name {
      color: ${({ theme }) => theme.colors.lightBlue};
      font-weight: 600;
    }
    &.pass {
      font-size: 20px;
    }
    &.pass {
      font-size: 20px;
    }
    &.center {
      text-align: center;
    }
  }
`;
export const Arabic = styled.div`
  width: 50%;
  padding: 30px;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: justify;
  direction: rtl;
  > p {
    &.name {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.lightBlue};
    }
    &.pass {
      font-size: 20px;
    }
    &.center {
      text-align: center;
    }
  }
`;
export const HR = styled.hr`
  background-color: none;
  border-left: 1px solid ${({ theme }) => theme.colors.darkBlue};
  height: 500px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  > p {
    &.heading {
      font-weight: 700;
    }
  }
`;
