import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #06639d;
`
export const Title = styled.h1`
font-size:28px;
text-align:center;
margin:30px 0px ;
color:${({ theme }) => theme.colors.lightBlue} ;
`