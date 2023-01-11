import styled from "styled-components";

export const ServicesSubCategoryContainer =styled.div<{bgimage?:string}>`
background-attachment: fixed !important;
width:100% ;
height:100% ;
padding-top: 36px;
padding-bottom: 80px;
margin-bottom: -60px;
background: linear-gradient(rgb(0 0 0 / 31%),rgb(0 0 0 / 99%)), url(${({bgimage})=>bgimage}) no-repeat;
background-position: center center;
    background-size: cover;
/* background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80") repeat; */
`