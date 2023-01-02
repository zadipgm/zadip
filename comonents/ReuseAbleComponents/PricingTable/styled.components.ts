import styled from "styled-components";

export const Conditions = styled.p`
 margin:0 ;
`
export const Wrapper= styled.div`
display: flex;
justify-content:center ;
align-items:center ;
gap:15px;
    padding: 15px;
    &.direction{
        margin:40px 0px ;
        flex-direction: row-reverse;
    }
& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root {
    /* background-color: #E7EBF0; */
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    width:50% ;
   
}
`
export const ConditionWrapper= styled.div`
padding:15px ;
width:50% ;
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
`
export const TableHeading= styled.h3`
color:#2193b0 ;
padding:0px 12px ;
text-transform:capitalize ;
`
export const Heading= styled.h4`

color:#2193b0 ;
text-transform:capitalize ;
`