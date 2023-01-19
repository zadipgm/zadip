import styled from "styled-components";

export const Container= styled.div`
width:1170px;
margin: 0 auto;
`
export const Wrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
margin-top:80px ;
`
export const Heading = styled.h2`
color:#737c85 ;
`
export const ClientWrapper = styled.div``
export const ClientList = styled.ul`
margin:0;
padding:0;
list-style-type:none ;
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
margin:20px 0px ;
`
export const ClientListItems = styled.li`
padding:12px ;
margin:12px ;
border:1px solid #d3cbcb;
border-radius:10px ;
transition:.5s ;
:hover{
    transition:.5s ;
    border:1px solid transparent
}
> img {
    transition: transform .5s;
 :hover{
  transform: scale(1.2); 
}
}
`