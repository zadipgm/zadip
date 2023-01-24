import styled, { css } from "styled-components";

export const Container = styled.div`

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
export const Heading = styled.h2`
color: #2193b0;
`
export const List = styled.ul`
list-style-type:none ;
display:flex ;
justify-content:center ;
flex-wrap:wrap ;
`
export const ListItems = styled.li`
    text-align:justify ;
    padding:15px ;
    width:560px ;
`
export const ImageContainer= styled.div`
display:flex ;
justify-content:flex-start ;
align-items:center ;
gap:6px;
padding-bottom:15px ;
`
export const ImageWrapper = styled.div`
> div {
    content:"" ;
    width:25px ;
    height:25px ;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    border-radius:100%;
    position:absolute ;
    ${({ theme }) =>
    theme.isLTR
    ? css`
      right: 3px;
        `
    : css`
    left:3px ;
    `}
}
position: relative;
border:2px solid #0576bc;
padding:20px ;
border-radius:100%;
width:fit-content;
`
export const Title = styled.h3`
    margin: 0;
    position:relative;
    width: 165px;
    color: #fff;
    padding: 10px;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    border-radius: 34px 0px 34px 0px;
`
export const Description = styled.p`
margin:0;
color:#737c85;
`