import styled from "styled-components";

export const HighLightProductSectionContainer = styled.div`

`
export const HighLightProductSectionBGImage = styled.div`

   
    background-image: url("https://www.ektefa.net/agency/img/illustrations/relaxed.svg"),linear-gradient(-30deg,#a5f3ed 30%,#7291a5);
    background-size:cover ;
    background-repeat:no-repeat ;
  padding: 30px 0px;
    background-attachment: fixed;
   

`
export const HighLightProductWrapper = styled.div`
  display: flex;
    justify-content:center ;
    align-items: center;
    width: 1170px;
    @media (max-width: 600px) {
     display:block ;
     width:100% ;
     padding:0px 0px 40px 0px ;
 }
    margin:  0 auto;
    padding: 40px 0px;
    position: relative;
       
`
export const HighLightProductContent = styled.div`
width:100% ;
padding: 15px;
> div > a{
    color:#0062b7
}
:hover{
> div >a >svg{
    fill:#0062b7
}
}
`

export const Title = styled.h3`
color: #0062b7;    text-transform: none;
font-size: 26px;
font-weight:00 ;
`

export const SUbTitle = styled.h4`    padding-top: 14px;
text-transform: uppercase;
font-size: 30px;
line-height: 38px;
margin-bottom: 28px;
color:#0062b7 ;
`
export const Description = styled.p`    color: #000;
line-height: 24px;
max-width:520px;
letter-spacing: 0.6px;
padding: 0px 15px;
@media (max-width: 600px) {
    width: 100%;
     padding:0px 
 }
font-size:18px ;

`
export const ProductVedio = styled.div`
width:100% ;
display: flex;
    justify-content: center;
    align-items: center;
`
export const VedioWrapper =  styled.div`
margin:20px 0px ;
width:100% ;
@media (max-width: 600px) {
     display:block ;
     width:90% ;
     margin:0 auto ;
    
 }
> iframe{
    height:500px ;
    border-radius:20px ;
}
`

