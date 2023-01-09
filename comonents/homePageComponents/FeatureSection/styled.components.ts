import styled, { css } from "styled-components";
export const FeatureSectionParent = styled.div`
width:1170px ;
margin:0 auto ;
@media (max-width: 600px) {
   width:100% ;
   display:block ;
  }
`
export const FeatureSectionContainer = styled.div`
/* display:flex ;
justify-content:center ;
align-items:center ;
width:1170px ;
margin:0 auto ;
@media (max-width: 600px) {
   width:100% ;
   display:block ;
  } */

  
`
export const  FeatureSectionWrapper = styled.div`

>a{
    text-decoration:none ;
    ${({ theme }) =>
    theme.isLTR
    ? css`
      
        `
    : css`
   margin-bottom:4px ;
    `}
}
@media (max-width: 600px) {
   display:block ;
   width:92% ;
   padding:15px ;
   margin: 30px 15px;
  
  }
  position: relative;
    padding: 1rem;
    border-radius: 1rem;
    background: #6c707c26;
    width:100% ;
       
        ${({ theme }) =>
    theme.isLTR
    ? css`
       height: 300px;
        `
    : css`
   height: 278px;
    `}
    @media (max-width: 600px) {
    ${({ theme }) =>
    theme.isLTR
    ? css`
       height: 300px;
        `
    : css`
   height: 230px;
    `}
  }
    margin:1rem ;
    display: flex;
    transition:.5s ;
  cursor: pointer;
    flex-flow: column nowrap;
:hover {
    transform: translateY(-5px);
    transition:.5s ;
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
}
`
export const FeatureIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
`
export const FeatureTitleLink = styled.a`
        display: flex;
    transition:.5s ;

    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
    color: #34495e;
`
export const FeatureDescription = styled.p`
text-align:justify;
    line-height: 26px;
    color: #737c85;
    transition:.5s ;
    
    white-space: break-spaces;
    margin:0 ;
> a {
    text-decoration:none ;
    color: #020202;
    :hover {
        text-decoration: underline;
    }
}

`
export const EktefaWrapper = styled.div<{background:string, direction:string}>`
display:flex !important ;
justify-content:center ;
width: 98%!important ;
margin:0 auto ;
direction:${({direction})=>direction} ;
align-items:center ;
background:${({background})=>background};
border-radius:20px;
@media (max-width: 600px) {
max-height: 600px;
display:block !important;
}
`;  
export const EktefaImageWrapper = styled.div`
width:60% ;
padding:15px ;
@media (max-width: 600px) {
width:100% ;
}
`;  
export const EktefaImage = styled.img`
@media (max-width: 600px) {
width:100% ;
max-height: 300px;
}
`;  
export const EktefaDescriptionWrapper = styled.div`
width: 40%;
padding:15px ;
@media (max-width: 600px) {
width:100% ;
}
> img {
    /* margin:0 auto ; */
}
`;  
export const EktefaTitle = styled.h3<{direction?:string}>`
font-size: 30px;
margin:0 ;
/* direction: ${({direction})=>direction} */
`;  
export const EktefaDescription = styled.p<{direction:string}>`
font-size: 18px;
margin:0 ;
/* direction: ${({direction})=>direction} */
`;  
        

                  