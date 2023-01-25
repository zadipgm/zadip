import styled from "styled-components";

export const Conditions = styled.p`
 margin:0 ;
`
export const Wrapper= styled.div`
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
padding:0px 12px ;
text-transform:capitalize ;
`
export const Heading= styled.h3`

color:#2193b0 ;
text-transform:capitalize ;
`