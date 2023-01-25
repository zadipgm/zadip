import styled from "styled-components";

export const AdvantageContainer =  styled.div`
display: flex;
margin:20px 0px ;
@media (max-width: 600px) {
  display: block;
}
`
export const AdvantageWrapper= styled.div`

`
export const Heading = styled.h3`
margin:0 ;
color: #2193b0;
`
export const Description = styled.p`
margin:0 ;
`
export const Wrapper = styled.div`
padding: 15px;
margin:15px;
width:33%;
border-radius:10px;
background-color:rgba(13,74,118,0.04);
box-shadow:0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
transition:transform .5s;
border: 1px solid #d2dce9;
:hover{
transform:scale(1.1);
border: 1px solid transparent;
}
`
export const VedioLinkWrapper = styled.div`
>iframe{
height:180px ;
}
`