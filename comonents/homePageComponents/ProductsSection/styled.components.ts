import styled from "styled-components";

export const Container = styled.div`
background-attachment: fixed;
background-image:url("https://zadip.com/images/ntpbg.jpg") ;
padding:50px 0px ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin:30px 0px ;
`
export const Wrapper = styled.div`
position:relative;
border-radius: 15px;
padding: 15px;
@media (max-width:600px){
display: block;
width: 100%;
}
@media (min-width:600px) {
width: 100%;
}
@media (min-width:1440px) {
width: 1170px;
}
margin:0 auto ;
`
export const MainLogo = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
> img{
    width:30%;
    @media (max-width:600px){
    width: 100%;
}
}
`
export const OtherLogo = styled.div`
margin:20px 0px 0px  0px ;
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
> a >img{
        cursor: pointer;
        width:100% ;
    margin: 0px 20px 0px;
    @media (max-width: 600px) {
        margin: 0;
        width:40%;
    }
   
 transition: transform .2s;
 :hover{
  transform: scale(1.2); 
}
    }
`