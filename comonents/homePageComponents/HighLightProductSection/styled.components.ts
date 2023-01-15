import styled from "styled-components";

export const HighLightProductSectionContainer = styled.div`
margin: 50px 0px;
`
export const HighLightProductWrapper = styled.div`
  display: flex;
    justify-content:center ;
    background: linear-gradient(-30deg,#d6ecf9 30%,#a7f5ef);
    align-items: center;
    width: 1170px;
    background-color: #24afe7;
    @media (max-width: 600px) {
     display:block ;
     width:100% ;
     padding:0px 0px 40px 0px ;
 }
    margin:  0 auto;
    position: relative;
    border-radius: 15px;  
`
export const Eservices =  styled.div`
width:40% ;
> img{
    padding: 12px;
}
@media (max-width: 600px) {
     width:100% ;
 }
`
export const HighLightProductContent = styled.div`
width:60% ;
@media (max-width: 600px) {
     width:100% ;
 }
padding: 15px;
 > a{
    color:gray;
    text-decoration:none
}
`
export const Title = styled.h3`
color: #0078a9;; 
text-transform: none;
font-size: 26px;
font-weight:600 ;
margin:0 ;
`
export const SUbTitle = styled.h4`    padding-top: 14px;
text-transform: uppercase;
font-size: 18px;
line-height: 38px;
margin-bottom: 28px;
color: #3d4146cf;
margin:0 ;
`
export const Description = styled.p`   
 color: #3d4146cf;
line-height: 24px;
max-width:520px;
letter-spacing: 0.6px;
text-align:justify ;
@media (max-width: 600px) {
    width: 100%;
    padding:0px 
 }
font-size:18px ;
> a {
    text-decoration: none;
    color: wheat;
    :hover {
        text-decoration: underline;
    }
}
`


