import styled, { css } from "styled-components";

export const Conditions = styled.p`
 margin:0 ;
 color:#737c85;
`

export const Wrapper= styled.div`

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
@media(max-width:600px){
    display:block ;
}

gap:15px;
    padding: 15px;
    &.direction{
        margin:40px 0px ;
        flex-direction: row-reverse;
    }
& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root {
    /* background-color: #E7EBF0; */
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
   
    border-radius: 10px;
    @media(max-width:600px){
        width:100% ;
}
   
}
`

export const Table = styled.table`
border-collapse:collapse ;
    width: 100%;
`
export const Tbody = styled.tbody``
export const TableRow = styled.tr`
td:first-child{
    font-weight:700 ;
    color:#2193b0 ;
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
color:#2193b0 ;
text-transform:capitalize ;
`
export const Heading= styled.h3`

color:#2193b0 ;
text-transform:capitalize ;
`