import styled, { css } from "styled-components";

export const Container = styled.div`

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
export const Heading = styled.h2`
color: ${({theme})=>theme.colors.lightBlue};
`
export const List = styled.ul`
list-style-type:none ;
display:flex ;
justify-content:center ;
flex-wrap:wrap ;
@media (max-width: 600px) {
padding:0px
}
`
export const ListItems = styled.li`
text-align:justify ;
padding:15px ;
width:560px ;
@media (min-width: 600px) {
width:100% ;
}
@media (min-width: 1024px) {
width:50% ;
}
`
export const ImageContainer= styled.div`
display:flex ;
justify-content:flex-start ;
align-items:center ;
gap:6px;
padding-bottom:15px ;
`
export const ImageWrapper = styled.div`
width:164px ;
@media(max-width:320px){
width:118px ;
}
display:flex ;
justify-content:center ;
align-items:center ;
> img{
width:100% ;
}
> div {
content:"" ;
width:25px ;
height:25px ;
background: ${({theme})=>theme.colors.themeColor};
border-radius:100%;
top:14px ;
position:absolute ;
${({ theme }) =>
theme.isLTR
? css`
    right: 3px;
    `
: css`
left:3px ;
`}
@media(max-width:320px){
    ${({ theme }) =>
theme.isLTR
? css`
    right: -4px;
    `
: css`
left:-4px ;
`}
}
}
position: relative;
border:2px solid #0576bc;
padding:28px ;
border-radius:100%;
`
export const Title = styled.h3`
margin: 0;
text-align:center ;
position:relative;
width: 165px;
color: #fff;
padding: 10px;
background: ${({theme})=>theme.colors.themeColor};
border-radius: 34px 0px 34px 0px;
`
export const Description = styled.p`
margin:0;
color:#737c85;
`