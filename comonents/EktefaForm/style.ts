import styled from "styled-components";

export const EktefaFormContainer = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  margin-top: 150px;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 1170px;
  }
`;
export const Label = styled.div`
  display: block;
  margin: 0 0 0 -10px;
  padding: 0 0 20px 0;
  height: 20px;
  width: 150px;
  > img {
    display: inline-block;
    padding: 0px;
    height: 30px;
    width: 30px;
    background: none;
  }
`;
export const Root = styled.div`
  position: relative;
  width: 1170px;
  max-width: 1170px;
  min-width:1170px;
`;
export const NumberWrapper = styled.div`
 
 position: absolute;
    top: 8.25%;
    left: 52.7%;
    background-color: white;
  &.fifteenlength {
    position: absolute;
    top: 8.25%;
    left: 13%;
    background-color: white;
  }
  &.ninelength {
    position: absolute;
    top: 11.1%;
    left: 13.4%;
    background-color: white;
  }
  &.Tenlength{
    position: absolute;
    top: 19.5%;
    left: 51.1%;
    width: 24%;
    background-color: white;
    height: 28px;
  }
  &.Tenlength1{
    width: 25.6%;
    position: absolute;
    top: 29.1%;
    left: 42.8%;
    height: 28px;
    background-color: white;
  }
  &.Tenlength2{
    width: 25.6%;
    position: absolute;
    top: 30.3%;
    left: 42.8%;
    height: 28px;
    background-color: white;
  }
`;
export const DownloadButton = styled.button`
padding: 10px 15px;
    border: none;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: white;
    cursor: pointer;
    font-size: 18px;
    text-transform: capitalize;
    border-radius: 6px;
    letter-spacing: 1.2px;
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px auto;
`
export const NameInput = styled.div`
  position: absolute;
  top: 9.3%;
  left: 53%;
  width: 19%;
  > input {
    width: 100%;
    border: none;
    outline: none;
   
    &:focus {
      border: none;
      outline: none;
    }
  }
  &.second {
    position: absolute;
    top: 9.3%;
    left: 16.5%;
    width: 19%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user1 {
    position: absolute;
    top: 29.2%;
    left: 68.8%;
    width: 15%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user2 {
    position: absolute;
    top: 30.3%;
    left: 68.8%;
    width: 15%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user3 {
    position: absolute;
    top: 29.2%;
    left: 33.5%;
    width: 10%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user4 {
    position: absolute;
    top: 30.3%;
    left: 33.5%;
    width: 9%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user5 {
    position: absolute;
    top: 30.3%;
    left: 13.5%;
    width: 17%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.user6 {
    position: absolute;
    top: 29.2%;
    left: 13.5%;
    width: 17%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input3 {
    position: absolute;
    top: 12%;
    left: 62%;
    width: 19.4%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input4 {
    position: absolute;
    top: 12%;
    left: 39%;
    width: 16.4%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input5 {
    position: absolute;
    top: 12%;
    left: 13%;
    width: 18.4%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input6 {
    position: absolute;
    top: 13%;
    left: 70%;
    width: 12.4%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input7 {
    position: absolute;
    top: 13%;
    left: 51%;
    width: 10.7%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input8 {
    position: absolute;
    top: 13%;
    left: 13%;
    width: 23%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input9 {
    position: absolute;
    top: 14.3%;
    left: 50%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input10 {
    position: absolute;
    top: 14.3%;
    left: 13%;
    width: 30%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input11 {
    position: absolute;
    top: 15.5%;
    left: 50%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }&.input12 {
    position: absolute;
    top: 15.5%;
    left: 13%;
    width: 30%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }&.input13 {
    position: absolute;
    top: 16.6%;
    left: 50%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }&.input14 {
    position: absolute;
    top: 16.6%;
    left: 15%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }&.input15 {
    position: absolute;
    top: 17.8%;
    left: 50%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }&.input16 {
    position: absolute;
    top: 17.8%;
    left: 15%;
    width: 28%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input17 {
    position: absolute;
    top: 19.1%;
    left: 34%;
    width: 8%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input18 {
    position: absolute;
    top: 19.1%;
    left: 14%;
    width: 11%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input19 {
    position: absolute;
    top: 37.3%;
    left: 53.4%;
    width: 26%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input20 {
    position: absolute;
    top: 37.3%;
    left: 13%;
    width: 33%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input21 {
    position: absolute;
    top: 38.3%;
    left: 53.4%;
    width: 23.3%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input22 {
    position: absolute;
    top: 46.4%;
    left: 51.4%;
    width: 25%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input23 {
    position: absolute;
    top: 38.3%;
    left: 13.5%;
    width: 30%;
    > input {
      width: 100%;
      border: none;
      outline: none;
     
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input24 {
    position: absolute;
    top: 46.6%;
    left: 41%;
    width: 3%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input25 {
    position: absolute;
    top: 46.6%;
    left: 38%;
    width: 2%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  &.input26 {
    position: absolute;
    top: 46.6%;
    left: 32%;
    width: 4%;
    > input {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;
export const InputSubscription = styled.input`
  &.new {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 3.9%;
    left: 57.05%;
  }
  &.renew {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 3.9%;
    left: 67.5%;
  }
  &.newsub {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 4.95%;
    left: 57.1%;
  }
  &.renewsub {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 4.96%;
    left: 67.5%;
  }
  &.company {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 10.91%;
    left: 73.55%;
  }
  &.org {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 10.85%;
    left: 65.45%;
  }
  &.checkbox7{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 23.2%;
    left: 79.95%;
  }
   &.checkbox8{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 24.15%;
    left: 79.95%;

  }
   &.checkbox9{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 23.1%;
    left: 57%;
  }
   &.checkbox10{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 24.05%;
    left: 57%;
  }
   &.checkbox11{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 23.1%;
    left: 33.2%;
  }
   &.checkbox12{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 24.05%;
    left: 33.2%;
  }
`;
export const PdfHeader = styled.div`
  width: 100%;
  height: 150px;
  /* background: ${({ theme }) => theme.colors.darkBlue}; */
`;
export const PdflogoTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 auto auto 0;
  > img {
    margin: 20px 0px 0px 0px;
  }
`;
export const SubscriptionDiv = styled.div`
  /* background-color:  ${({ theme }) => theme.colors.white}; */
`;
export const SubsTitle = styled.div``;
export const DivCorner6 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
export const PdfTitle = styled.div`
  font-size: 18px;
  font-weight: 600;

  letter-spacing: 0.8px;
  /* color: ${({ theme }) => theme.colors.white} */
`;
