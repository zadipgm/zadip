import styled from "styled-components"

export const TwitterSliderContainer =  styled.div`
 /* box-shadow: 0 0 35px rgb(0 0 0 / 10%);
background-color: #1a3345;
background-image: url("https://zadip.com/images/twitter.png");
background-position: 50% 50%;
background-repeat: no-repeat; */
margin:50px ;
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
.slick-dots{
    /* width: 40px;
    height:40px ;
    display:flex !important;
    justify-content:center ;
    align-items:center ;
    position:unset !important ;
    bottom: 0px !important;
    margin: 0 auto !important; */
}
.slick-dots li button{
    /* content: "" !important;
    background-color: #99d2e3;
    width:20px ;
    height: 8px;
    padding: 2px;
    border-radius: 10px; */
}
.slick-dots li.slick-active button:before{
    /* background-color:#0D4A76  !important ;
    opacity: .75;
    height: 8px;
    width:20px ;
    border-radius: 10px; */
}
.slick-dots li button:before {
    /* font-size: unset;
    line-height: unset; */
  }
  .slick-arrow{

&.slick-prev{
    display:none !important ;
}
&.slick-next{
    display:none !important ;
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