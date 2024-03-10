import styled from "styled-components";

export const Wrapper = styled.div`
display:flex ;
justify-content:space-evenly ;
gap:12px;
@media (max-width: 600px) {
 display:block ;
 
}
`
export const ChartWrapper = styled.div`
border:1px solid lightgray ;
width:50% ;
@media (max-width: 600px) {
    width:100% ;margin-bottom:20px ;
}

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
`
export const Title = styled.div`
text-align:center ;
border-bottom:1px solid lightgray ;
color:${({ theme }) => theme.colors.darkBlue};
font-size:24px ;
`