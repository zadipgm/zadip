import styled from "styled-components";

export const HighLightProductSectionContainer = styled.div`
margin: 50px 0px;


`
export const HighLightProductSectionBGImage = styled.div`

   
background-image: url("https://www.ektefa.net/agency/img/illustrations/relaxed.svg"),linear-gradient(-30deg,#42e3d7 30%,#046ef9);
background-size:cover ;
background-repeat:no-repeat ;

  padding: 30px 0px;
    background-attachment: fixed;
   

`
export const HighLightProductWrapper = styled.div<{backgroundColor:string}>`
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
    position: relative;
    background: ${({backgroundColor})=>backgroundColor};
    
    border-radius: 15px;
       
`
export const HighLightProductContent = styled.div`
width:100% ;
padding: 15px;
 > a{
    color:#fff;
    text-decoration:none
}


`

export const Title = styled.h3`
color: #77d8ff; 
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
color:#fff ;
margin:0 ;
`
export const Description = styled.p`   
 color: #fff;
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


