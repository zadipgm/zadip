import styled from "styled-components";
export const Container = styled.div`
    margin:0 auto ;
@media (min-width: 600px){
width:100% ;
}
@media (min-width: 1440px){
width:1170px;
}

`
export const Wrapper = styled.div`
h3{
    margin-top: 0;
    margin-bottom: 36px;
    font-size: 48px;
    line-height: 44px;
    color: #2193b0;
}
display: flex;
justify-content: center;
align-items: center;
margin:30px 0px ;
@media (max-width: 600px) {
  display:block ;
}
`
export const Description = styled.div`
padding: 15px;
color:#737c85; 
text-align: justify;
word-break: break-all;
`
export const Image = styled.img`
border-radius:10px ;
 @media (max-width: 600px) {
  width:100% ;
}
`
export const ImageWrapper =styled.div`  
padding: 15px;
`
export const BreadCrumbWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items: center;
margin-top:100px ;
@media (max-width: 600px) {
display:block ;
padding: 0px 15px ;
text-align: center;
}
@media (min-width: 600px) {
 padding:0px 15px ;
}
`
export const Heading = styled.h2`
color: #2193b0;
`
export const OurHistory = styled.div`
transition: .5s;
border: 1px solid #dee2e6;
cursor: pointer;
border-radius:10px ;
margin:15px ;
padding:15px ;
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
:hover{
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color: #fff;
transition: .5s;
transform: translateY(-10px);
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
p{
color:#fff ;
}
}
`
export const OurClients = styled.div`
display:flex ;
flex-wrap:wrap ;
justify-content:center ;
align-items:center ;
margin:30px 0px  ;
@media (max-width: 600px) {
  display:block ;
}
`
export const ClientWrapper= styled.div`
text-align: center;
-webkit-transition: .5s;
transition: .5s;
border: 1px solid #dee2e6;
box-shadow: 0px 3px 24px rgb(0 0 0 / 20%);
margin: 15px;
padding: 15px;
@media (max-width: 600px) {   
> img{
width:300px ;
height: 200px;
}
}
border-radius: 20px;
cursor: pointer;
-webkit-transition: .5s;
transition: .5s;
:hover{
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color: #fff;
transition: .5s;
transform: translateY(-10px);
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
h5{
color:#fff ;
}
span{
color: #fff;
}
img{
border-radius:100% ;
}
}
`
export const ClientTitle= styled.h5`
margin: 0;
color: #737c85;`
export const ClientSector= styled.span`
color: #737c85;;
`
export const AllServices= styled.div``

export const List= styled.ul`
list-style-type:none ;
padding:0 ;
`
export const ListItem= styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap:wrap ;
`

export const AllServicesImageWrapper= styled.div`
width:200px;
height:200px ;
margin:12px ;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #d3cbcb;
padding: 12px;
border-radius: 10px;
transition:.5s ;
:hover{
  transition:.5s ;
  border:1px solid transparent
}
> img {
    width:93% ;
    transition:transform .5s;
:hover{
transform:scale(1.2); 
}
}
@media (max-width: 600px) {
  width:42% ;
}
@media (min-width: 600px) {
  width:200px ;
}
@media (max-width: 320px) {
  width:42% ;
}
`