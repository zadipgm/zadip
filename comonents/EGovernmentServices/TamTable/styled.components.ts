import styled, { css } from "styled-components";
export const Wrapper= styled.div`
    padding: 15px;
`
export const Table = styled.table`
border-collapse:collapse ;
width: 100%;
padding:15px ;
`
export const Tbody = styled.tbody``
export const TableRow = styled.tr`
`
export const Thead =styled.th`
font-weight:700 ;
color:#2193b0 ;
font-size:18px ;
${({theme})=>
    theme.isLTR
    ?css`
    text-align: left;
    `
    :css`
    text-align: right;
 `
}
`
export const TableData = styled.td`
padding: 12px;
width:28% ;
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
export const TableHeading= styled.h3`
color:#2193b0 ;
text-transform:capitalize ;
`