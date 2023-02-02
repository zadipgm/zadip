import styled from "styled-components";
export const AboutUsContainer = styled.div`

margin:0 auto ;
@media (max-width: 600px) {
        width: 100%;
      }
      @media (min-width: 600px) {
        width: 100%;
      }
      @media (min-width: 1440px) {
        width:1170px ;
      }
`
export const BreadCrumbWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items: center;
margin-top:100px ;
@media (max-width: 600px) {
 display:block ;
 padding:0px 15px ;
 text-align: center;
}
@media (min-width: 600px) {
 padding:0px 15px ;
}
`
export const AboutHeading = styled.h2`
color: ${({ theme }) => theme.colors.lightBlue};
`
export const AboutCompanyWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
padding:15px ;
>img {
    padding:8px ;
    border-radius: 37px;
}
@media (max-width: 600px) {
 display:block ;
}
@media (min-width: 600px) {
 display:block ;
}
@media (min-width: 1024px) {
 display:flex ;
}

`
export const DesWrapper = styled.div`
width:50% ;
padding:15px ;
@media (max-width: 600px) {
width:100% ;
padding:0 ;
}
@media (min-width: 600px) {
width:100% ;
padding:12px ;
}
`

export const AboutusDescription = styled.div`
color:#737c85; 
text-align:justify ;
`
export const ImageWrapper = styled.div`
width:50% ;
@media (max-width: 600px) {
width:100% ;
padding:0 ;
}
@media (min-width: 600px) {
width:100% ;
padding:0 ;
}
padding:15px ;
> img{
    border-radius: 20px;

}
`
