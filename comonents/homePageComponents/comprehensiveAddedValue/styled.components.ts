import styled from "styled-components";

export const ComprehensiveContainer = styled.div`
background-attachment: fixed;
background-image:url("https://zadip.com/images/ntpbg.jpg") ;
padding:50px 0px ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const Wrapper = styled.div`
position:relative;
display: flex;
justify-content: center;
align-items: center;
background: ${({theme})=>theme.colors.themeColor};
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
export const ImageWrapper = styled.div`
padding: 20px 0px;
width:30% ;
> img {
border-radius: 5%;
}
@media (max-width: 600px) {
display:block ;
width:100% ;
display: flex;
justify-content: center;
align-items: center;
> img {
    width:100% ;
}
}
@media (min-width:600px) {
width: 50%;
> img{
    width:100% ;
}
}
`
export const VisionImage = styled.img`
text-align:center ;
display: flex;
justify-content:center ;
align-items:center ;
@media (max-width: 600px) {
    display:block ;
    width:100% ;
}
`
export const Description = styled.div`
padding: 20px;
width:70% ;
@media (max-width: 600px) {
    display:block ;
    width:100% ;
    padding:0px ;
}
`  
export const Title = styled.h3`font-size: 35px;
line-height: 45px;
color: #fff;
margin: 0;
`
export const DescriptionVision = styled.p`  
color: #fff;
text-align: justify;
font-size: 16px;
line-height: 27px;
> span {
color:orange ;
}
`