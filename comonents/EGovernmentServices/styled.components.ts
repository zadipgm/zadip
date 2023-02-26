import styled from "styled-components";

export const VideoWrapper = styled.div`

@media (max-width: 600px) {
width:100% ;
overflow:hidden ;
}
`
export const Video = styled.video`
width:100% ;
height:90vh ;
@media (max-width: 600px) {
    width:unset;
overflow:hidden ;
}
`
export const Container = styled.div`
width:1170px;
margin: 0 auto;
margin-bottom:30px ;
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
justify-content:space-between ;
align-items:center ;
@media (max-width: 600px) {
 display:block ;
 padding:0px 15px ;
 text-align: center;
}
@media (min-width: 600px) {
 padding:0px 15px ;
}
`
export const Heading = styled.h2`
color:${({ theme }) => theme.colors.lightBlue} ;
`
export const EGovernmentServicesMainPage = styled.div`
margin-top: 90px;
`
export const ButtonsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 25px;
@media(max-width:600px){
    display:block ;
}
`