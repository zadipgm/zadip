import styled from "styled-components";
export const AboutUsContainer = styled.div`
width:1170px ;
margin:0 auto ;
@media (max-width: 600px) {
        width: 100%;
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
`
export const AboutHeading = styled.h2`
color: #2193b0;
`
export const AboutCompanyWrapper= styled.div`
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
`
export const DesWrapper = styled.div`
width:50% ;
padding:15px ;
@media (max-width: 600px) {
width:100% ;
padding:0 ;
}
`
export const Title = styled.h3`
color: #2193b0;
margin:0 ;
`
export const AboutusDescription = styled.div`
color:#737c85; 
text-align:justify ;
`
export const ImageWrapper =styled.div`
width:50% ;
@media (max-width: 600px) {
width:100% ;
padding:0 ;
}
padding:15px ;
> img{
    border-radius: 20px;

}
`
