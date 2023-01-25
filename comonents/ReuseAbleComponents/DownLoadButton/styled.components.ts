import styled from "styled-components";

export const Button= styled.button`
text-decoration:none ;
padding:11px 0px ;
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color:#fff ;
border: none;
width:31% ;
border-radius: 12px;
cursor: pointer;
opacity:.9 ;
font-size:18px ;
transition: transform .5s;
 :hover{
  transform: scale(1.1); 
  opacity:.8;
  background:#24afe7;
}

svg{
  fill:#fff ;  
  margin:0px 5px ;
}
`