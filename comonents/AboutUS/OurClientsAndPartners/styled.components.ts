import styled from "styled-components";
export const Container= styled.div`
margin: 0 auto;
@media(max-width:600px){
width:100% ;
}
@media(min-width:600px){
width:100% ;
}
@media(min-width:1440px){
width:1170px;
}
`
export const Wrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
margin-top:90px ;
@media(max-width:600px){
  padding:0px 15px ;
  display:block ;
  text-align: center;
}
@media(min-width:600px){
  padding:0px 15px ;
}
`
export const Heading = styled.h2`
color:#2193b0;
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
@media(max-width:600px){
width:42% ;
}
@media(max-width:320px){
border:none ;
}
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