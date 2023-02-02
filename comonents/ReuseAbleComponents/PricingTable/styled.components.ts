import styled, { css } from "styled-components";

export const Conditions = styled.p`
 margin:0 ;
 color:#737c85;
 @media(max-width:600px){
    text-align:justify ;
}
`

export const Wrapper= styled.div`
padding:15px ;
`
export const TableContainer= styled.div`
overflow-x:auto ;
`
export const Table = styled.table`
border-collapse:collapse ;
@media(max-width:600px){
   width: 900px; ;
}
@media(min-width:600px){
    width:900px ;
}
@media(min-width:1024px){
    width:100%;
}
`
export const Tbody = styled.tbody``
export const TableRow = styled.tr`
td:first-child{
    font-weight:700 ;
    color:${({theme})=>theme.colors.lightBlue} ;
}
`

export const TableData = styled.td`
 padding: 12px;
 ${({theme})=>
    theme.isLTR
    ?css`
    text-align: left;
    `
    :css`
    text-align: right;
    `
}
    border: 1px solid #ddd;
    color:#5d666e;

`
export const ConditionWrapper= styled.div`
padding:15px ;
width:70%;
margin:0 auto ;
border-radius: 10px;
@media(max-width:600px){
width:100% ;
}
`
export const TableHeading= styled.h3`
color:${({theme})=>theme.colors.lightBlue} ;
text-transform:capitalize ;
`
export const Heading= styled.h3`

color:${({theme})=>theme.colors.lightBlue} ;
text-transform:capitalize ;
`