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
background: #006891;
    opacity: .8;
    border-radius: 15px;
    padding: 15px;
@media (max-width: 600px) {
display: block;
width: 100%;
padding: 15px;
}
@media (min-width: 1200px) {

width: 1170px;
padding: 15px;
}
margin:0 auto ;

&.zadip{
  background: #000000;
    opacity: .6;
    border-radius: 15px;
  margin:40px auto ;

}
`
export const ImageWrapper = styled.div`
  @media (max-width: 600px) {
     display:block ;
     width:100% ;
     display: flex;
    justify-content: center;
    align-items: center;
 }
        padding: 15px;
    width: 50%;
    height: 442px;
    background-color:#fff ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5% ;
    
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
width:50% ;
@media (max-width: 600px) {
     display:block ;
     width:100% ;
     padding:0px ;
 }
`  
export const Title = styled.h3`font-size: 35px;
line-height: 45px;
color: #fff;`
export const DescriptionVision = styled.p`  
text-align: justify;
font-size: 20px;
line-height: 23px;
color: #fff;
> span {
color:orange ;
}
`