import styled from "styled-components"

export const TwitterSliderContainer =  styled.div`

margin:50px ;
@media (max-width: 600px) {
    margin:0 ;
 }
.slick-slider{
box-shadow: 0 0 35px rgb(0 0 0 / 10%);

  margin: 0 auto ;
  @media (max-width: 600px) {
         display:block ;
         width:100% ;
        }
    @media (min-width: 1200px) {
            display:block ;
            width:1170px ;
           
           }
}
`
export const TwitterIconWrapper =  styled.div`
display:flex;
align-items:center ;
width:70% ;
justify-content: center;
height: 300px;
padding:15px 0px  ;
@media (max-width: 600px) {
  
 
    margin: 0 auto;
  }
`
export const PostDescriptionWrapper = styled.div`
padding:0px 20px  ;
line-height: 24px;
`
export const PostTitle = styled.span`
padding: 0px 12px;
color:#505050;
font-size: 16px;
font-weight: 700;
`
export const PostImage = styled.img`
border-radius:24px ;
width: 158px;
height: 158px;
margin: 0 auto ;
border-radius:100% ;
box-shadow: 0 0 35px rgb(0 0 0 / 10%);
`
export const TwitterPost= styled.div`
`
export const Description = styled.span`
color: #505050;
`
export const RetweetContainer = styled.div``
export const TwitterSliderWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
margin:0 auto ;
@media (max-width: 600px) {
  
  display:block ;

 }
`
export const FollowLink = styled.a`
text-decoration:none ;
display:flex ;
padding: 12px;
justify-content:center ;
align-items:center ;
font-size: 12px;
color: #fff!important;
background-color: #00acee;
border-radius: 3px;
transition: .5s;
@media (max-width: 600px) {
  
  width:250px ;
  margin: 0 auto ;

 }
:hover{
  background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
transition:.5s;
}
`
export const Link = styled.a`
color: #505050;
text-decoration:none ;
transition:.3s ;
padding:0px 12px ;
display: flex;
:hover{
  transition:.3s ;
  color: #6fc5e8;
}
`
export const RetweetWrapper =  styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0px;
`