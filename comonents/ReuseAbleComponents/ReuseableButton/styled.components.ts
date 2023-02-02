import styled from "styled-components";

export const Button = styled.a`
    color: ${({ theme }) => theme.colors.white};
    padding: 9px;
    border: none;
    border-radius: 10px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    margin-top: 22px;
    transition: all 0.5s ease-in;
    font-size:16px;
    cursor: pointer;
    :hover{
      transition: all 0.5s ease-in;
      color:${({ theme }) => theme.colors.white} ;
     background-color: ${({ theme }) => theme.colors.darkBlue};
    }
    &.download-button{
      width:270px ;
      font-size:16px;
    }

svg{
  fill:${({ theme }) => theme.colors.white} ;  
  margin:0px 5px ;
}
&.mobile-button{
  margin:20px 0px ;
}
@media(max-width:600px){
  margin:15px auto ;
}

`