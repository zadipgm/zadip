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
`;
export const InputWrapper = styled.div`
  position: absolute;
  color: #465364;
  font-weight: 500;
  font-family: "Cairo";
  font-size: 18px;
  &.mobile {
    font-size: 8px;
  }
  font-family: "Cairo", sans-serif !important;

  &.ID-number {
    top: 29%;
    left: 36%;
    &.mobile {
      left: 30%;
    }
  }
  &.Certificate-number {
    top: 34%;
    left: 36%;
    &.mobile {
      left: 30%;
    }
  }
  &.Expire-Date {
    top: 39%;
    left: 36%;
    &.mobile {
      left: 30%;
    }
  }
  &.name {
    top: 51%;
    left: 29%;
    &.mobile {
      top: 50%;
      left: 18%;
    }
  }
  &.ID-number-arabic {
    top: 29%;
    right: 34%;
    font-family: 'Cairo', sans-serif !important;
    &.mobile {
      right: 26%;
    }
  }
  &.Certificate-number-arabic {
    top: 34%;
    right: 34%;
    &.mobile {
      right: 26%;
    }
  }
  &.Expire-Date-arabic {
    top: 39%;
    right: 34%;
    &.mobile {
      right: 26%;
    }
  }
  &.name-arabic {
    top: 51%;
    right: 29%;
    &.mobile {
      top: 50%;
      right: 18%;
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
`;
