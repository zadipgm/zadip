import styled from "styled-components";

export const Container = styled.div`

margin: 0 auto; 
@media (max-width: 600px) {
    width:100% ;
}
@media (min-width: 600px) {
    width:100% ;
}
@media (min-width: 1440px) {
width:1170px ;
}
`
export const Wrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
margin:30px 0px ;
@media(max-width: 600px){
display:block ;
margin:0 ;
}
`
export const TextWrapper = styled.div`
width:50% ;
padding:15px ;
@media (max-width: 600px) {
    width:100% ;
}
`
export const Title = styled.h3`
color: #0078a9;
text-transform: none;
font-size: 26px;
font-weight: 600;
margin: 0;
`
export const SubTitle = styled.p`
padding-top: 14px;
text-transform: uppercase;
font-size: 18px;
line-height: 38px;
margin-bottom: 28px;
color: #3d4146cf;
margin: 0;
font-weight: 600;
`
export const Text = styled.p`
margin:0;
text-align:justify ;
color: #3d4146cf;
font-size: 18px;
margin-bottom:15px ;
`
export const IamgeWrapper = styled.div`
width:50% ;
@media (max-width: 600px) {
    width:100% ;
    height:100% ;
}
padding:15px ;
> img {
border-radius:20px ;
}
`
