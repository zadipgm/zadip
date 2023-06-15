import styled, { css } from "styled-components";
export const Container = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 1024px;
    height: 726px;
    margin: 0 auto;
    &.mobile{
      width: 100%;
      height: auto;
    }
`;
export const InputWrapper = styled.div`
  position: absolute;
  color: #525252;
  font-weight: 500;
  font-family: "Cairo";
  font-size: 21px;
  font-family: "Cairo", sans-serif !important;
  &.name-arabic {
    top: 30.4%;
    right: 56.5%;
    &.mobile {
      @media (min-width: 340px) {
      top: 29.5%;
    right: 56.7%;
    font-size: 7px;
      }
      @media (min-width: 420px) {
      top: 30%;
      }
      @media (min-width: 520px) {
        top: 31%;
        font-size: 11px;
      }
      @media (min-width: 620px) {
        font-size: 31px;
      }
    }
  }
  &.ID-number-arabic {
    top: 64.7%;
    right: 78.8%;
    font-family: "Cairo", sans-serif !important;
    &.mobile {
      @media (min-width: 340px) {
      right: 79%;
      top: 61.5%;
      font-size: 10px;
      }
      @media (min-width: 420px) {
      top: 62.5%;
      }
      @media (min-width: 520px) {
        top: 63%;
        font-size: 11px;
      }
      @media (min-width: 620px) {
        font-size: 31px;
        top: 65%;
      }
    }
  }
  &.Certificate-number-arabic {
    top: 65.3%;
    right: 55.5%;
    &.mobile {
      @media (min-width: 340px) {
    right: 55.5%;
    top: 62%;
      font-size: 10px;
      }
      @media (min-width: 420px) {
        top: 63%;
      }
      @media (min-width: 520px) {
        top: 64%;
        font-size: 11px;
      }
      @media (min-width: 620px) {
        font-size: 31px;
        top: 65%;
      }
    }
  }
  &.Expire-Date-arabic {
    top: 58.7%;
    right: 79.4%;
    font-size: 23px;
    background: white;
    &.mobile {
      @media (min-width: 340px) {
        top: 55.9%;
    right: 79.5%;
    background: white;
    font-size: 9px;
      }
      @media (min-width: 420px) {
        top: 56.9%;
      }
      @media (min-width: 520px) {
        top: 57.9%;
        font-size: 11px;
      }
      @media (min-width: 620px) {
        font-size: 31px;
        top: 58.9%;
      }
    }
  }
  
  > input {
    border: none;
    border-bottom: 1px solid gray;
    font-size: 12px;
    outline: none;
    padding: 5px;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors?.lightBlue};
      outline: none;
      border-radius: 4px;
    }
  }
`;

export const CertificateNumber = styled.div`
  position: absolute;
  top: 34%;
  left: 24%;
  > input {
    border: none;
    border-bottom: 1px solid gray;
    font-size: 12px;
    outline: none;
    padding: 5px;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors?.lightBlue};
      outline: none;
      border-radius: 4px;
    }
  }
`;
export const ExpireDate = styled.div`
  position: absolute;
  top: 37%;
  left: 24%;
  > input {
    border: none;
    border-bottom: 1px solid gray;
    font-size: 12px;
    outline: none;
    padding: 5px;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors?.lightBlue};
      outline: none;
      border-radius: 4px;
    }
  }
`;
export const ContainerPdf = styled.div`
  font-family: "Courier New", Courier, monospace;
`;
export const Name = styled.div`
  position: absolute;
  top: 40%;
  left: 24%;
  > input {
    border: none;
    border-bottom: 1px solid gray;
    font-size: 12px;
    outline: none;
    padding: 5px;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors?.lightBlue};
      outline: none;
      border-radius: 4px;
    }
  }
`;
export const QRcode = styled.div`
  position: absolute;

  left: 31%;
  bottom: 5%;
  right: 31%;
`;
export const Inner = styled.div`
  font-family: "Cario";
`;
export const PreviewCertificate = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.colors?.darkBlue};
  color: ${({ theme }) => theme.colors?.white};
  font-size: 18px;
  padding: 15px;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    background: ${({ theme }) => theme.colors?.lightBlue};
  }
  &.generate {
    margin: 15px;
  }
  &.mobile{
    margin: 15px auto; 
    padding: 8px 15px;
  }
`;
export const Goback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors?.darkBlue};
  color: ${({ theme }) => theme.colors?.white};
  width: 132px;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    background: ${({ theme }) => theme.colors?.lightBlue};
  }
`;
