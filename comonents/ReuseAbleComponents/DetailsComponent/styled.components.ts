import styled from "styled-components";
export const DetailsWrapper  = styled.div`
width:1170px ;
margin: 0 auto;
`
export const DetailTitle = styled.h1`
    color: #0196e3;
    font-size:18px ;
 `
 export const PageBreadCrumbWrapper =styled.div`
 display:flex ;
 justify-content:space-between ;
 align-items:center ;
 padding:15px ;
 `
 export const GoBackButton =  styled.button`
    width: 180px;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    padding: 14px;
    border-radius: 3rem;
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    transition: all 0.3s;
    border: none;
    margin:20px 0px ;
    background: transparent;
    font-size: 18px;
    color: #0196e3;
    transition:.5s ;
    cursor: pointer;
    svg {
      margin:0px 6px ;
    }
    :hover{
      transition:.5s ;
      transform: translateY(-5px);
      box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
      background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
      color:#fff ;
    }
`