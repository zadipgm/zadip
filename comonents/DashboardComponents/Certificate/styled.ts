import styled, { css } from "styled-components";
export const Container = styled.div`
  text-align: center;
`;
export const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
`;
export const InputWrapper = styled.div`
  position: absolute;
  &.ID-number {
    top: 29%;
    left: 38%;
  }
  &.Certificate-number {
    top: 34%;
    left: 38%;
  }
  &.Expire-Date {
    top: 39%;
    left: 38%;
  }
  &.name {
    top: 51%;
    left: 29%;
  }
  &.ID-number-arabic {
    top: 29%;
    right: 38%;
  }
  &.Certificate-number-arabic {
    top: 34%;
    right: 38%;
  }
  &.Expire-Date-arabic {
    top: 39%;
    right: 38%;
  }
  &.name-arabic {
    top: 51%;
    right: 29%;
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
export const PreviewCertificate = styled.button`
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
  &.generate{
    margin: 15px
  }
`;
