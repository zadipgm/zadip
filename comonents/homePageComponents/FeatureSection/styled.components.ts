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
display:flex ;
justify-content:center ;
align-items:center ;
width:1170px ;
margin:0 auto ;
@media (max-width: 600px) {
   width:100% ;
   display:block ;
  }
 
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
    background: #f2f3f7;
    width:25% ;
       
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
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
:hover {
    transform: translateY(-5px);
    transition:.5s ;
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    > p{
        color:#fff ;
        transition:.5s ;
        margin:0 ;

    }
    >a{
        color:#fff ;
    transition:.5s ;

    }
    > div > a{
        color:#fff ;

    }
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
