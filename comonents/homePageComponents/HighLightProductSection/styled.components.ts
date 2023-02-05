import styled from "styled-components";

export const HighLightProductSectionContainer = styled.div`

background: ${({ theme }) => theme.colors.lightThemeColor};
padding:0px 0px 40px 0px ;
display:block ;

@media (max-width:600px) {
     width:100% ;
 }
 @media (min-width:600px) {
     width:100% ;
 }
 @media (min-width:1440px) {
     width:1170px ;
 }
    margin:  50px auto auto;
    border-radius: 15px;  
`
export const HighLightProductWrapper = styled.div`
  display: flex;
    justify-content:center ;
    align-items: center;
    @media (max-width: 600px) {
     display:block ;
 }
`
export const Eservices = styled.div`
width:40% ;
> img{
    padding: 12px;
    width:100% ;
}
@media (max-width: 600px) {
     width:100% ;
 }
 @media (min-width: 1440px) {
     width:350px ;
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
export const Elogos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
    display:block ;
        text-align: center;
 }
   > a > img{
        cursor: pointer;
        padding: 25px;
        width:100% ;
        height:100% ;
    margin: 0px 20px 0px;
    @media (max-width: 600px) {
        margin: 0;
    }
    @media (min-width: 600px) {
        margin: 0;
    }
 transition: transform .2s;
 :hover{
  transform: scale(1.2); 
}
    }

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


