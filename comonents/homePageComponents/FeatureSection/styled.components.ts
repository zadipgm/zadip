import styled, { css } from "styled-components";
export const FeatureSectionParent = styled.div`
width:100% ;
margin:0 auto ;
@media (max-width: 600px) {
   width:100% ;
   display:block ;
  }
  @media (min-width: 600px) {
     width:100% ;
 }
 @media (min-width: 1440px) {
     width:1170px;
 }
`
export const FeatureSectionContainer = styled.div`
.slick-list{
    @media(min-width:320px){
        padding-top:200px ;
    }
    @media(min-width:425px){
        padding-top:170px ;
    }
    @media(min-width:1024px){
        padding-top:125px ;
    }
}
.slick-dots{
    height: 134px;
    @media(min-width:600px){
        height: 134px;
    }
    ${({ theme }) =>
    theme.isLTR
      ? css`
               direction:ltr ;
                `
      : css`
                direction:rtl ;
                `
  }
    transition:.5s ease ;
    top:0 ;
    .slick-active{
     border:2px solid ${({ theme }) => theme.colors.lightBlue} ;
   
    transition:.5s ease ;
   
    border-radius: 10%;
    padding:0px 12px 12px 12px ;
    @media(max-width:600px){
    width:94px ;
    height:70px;
    }
    @media(min-width:600px){
    width:94px ;
    height:70px;
    }
    @media(min-width:1024px){
      width: 150px;
    height: 130px;
    }
    div > img{
            display:none ;   
        }
        > div{
        
     
        }
    
    }
    padding:0px 12px 12px 12px ;
}
.slick-dots {
    display:flex !important ;
    justify-content:center ;
    align-items:center ;
    flex-wrap:wrap;
    @media(min-width:1024px){
  /* gap:80px; */
  justify-content:space-between
}
    
}
.slick-dots li{
    transition:.5s ease-in ;
    
    padding:0px 12px 12px 12px ;
    border:2px solid transparent;
    @media(max-width:600px){
    width:94px;
    height:70px;
}
@media(min-width:600px){
  width:94px;
    height:70px;
    display:inline-block;
}
@media(min-width:1024px){
  width:150px;
    height:130px ;
    display:inline-block;
}
}
`
export const Wrapper = styled.div<{ path: string }>`

display:flex;
background-image: url(${({ path }) => path});
background-position:center center;
        background-repeat: no-repeat;
        background-size: contain;
justify-content:center;
align-items:center;
border-radius:10%;
cursor: pointer;
> img {
  width:100%;
  height:auto ;
}
@media(max-width:600px){
    width:70px;
    height:70px;
}
@media(min-width:600px){
    width:70px;
    height:70px;
}
@media(min-width:1024px){
  width:130px;
height:130px;
}
`
export const FeatureSectionWrapper = styled.div`
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
    transition:.5s;
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
    justify-content:center;
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
export const EktefaWrapper = styled.div<{ direction: string }>`
display:flex !important;
justify-content:center;
width: 98%!important;
margin:0 auto;
direction:${({ direction }) => direction} ;
align-items:center;
border-radius:20px;
@media (max-width:600px) {
max-height:600px;
display:block !important;
}
`;
export const EktefaImageWrapper = styled.div`
width:60%;
padding:15px;
@media (max-width:600px) {
width:100%;
}
img >{
  width:100% ;
@media (max-width: 600px) {
width:350px;
max-height: 300px;
}
}
`;
// export const EktefaImage = styled.img`

// `;
export const EktefaDescriptionWrapper = styled.div`
width: 40%;
padding:15px;
text-align:justify;
@media (max-width: 600px) {
width:100%;
}
> img {
    /* margin:0 auto ; */
}
> a{
    text-decoration: none;
    color: #fff;
    padding: 7px 15px;
    border: none;
    border-radius: 10px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: #0576bc;
    margin-top: 22px;
    transition: all 0.5s ease-in;
    font-size:16px;
    :hover{
      transition: all 0.5s ease-in;
      color:#fff ;
     background-color: ${({ theme }) => theme.colors.darkBlue};
    }
    @media (max-width: 600px) {
      margin: 20px auto 20px auto;
}
}
`;
export const EktefaTitle = styled.h3<{ direction?: string }>`
font-size: 30px;
margin:0 ;
direction: ${({ direction }) => direction};
color:#404854 ;
@media (max-width: 600px) {
text-align: center;
}
`;
export const EktefaDescription = styled.p<{ direction: string }>`
font-size: 18px;
margin:0 ;
direction: ${({ direction }) => direction};
@media (max-width: 600px) {
text-align: center;
}
`;


