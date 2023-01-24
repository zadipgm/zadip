import styled from "styled-components";
export const AboutUsContainer = styled.div`
width:1170px ;
margin:0 auto ;
`
export const BreadCrumbWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items: center;
margin-top:100px ;
@media (max-width: 600px) {
 display:block ;
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
    padding:15px ;
    border-radius:20px ;
}
`
export const DesWrapper = styled.div`
width:50% ;
padding:15px ;
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
padding:15px ;
> img{
    border-radius:20px ;
}
`
export const AboutusList = styled.ul`

list-style-type: disclosure-closed;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const AboutusListItem =styled.li`
width: 334px;
padding: 12px;
color:#393c3e;
::marker{
    color:#2193b0 ;
}
 
`
