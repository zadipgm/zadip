import styled from "styled-components";

export const Wrapper = styled.div`
padding:0px 12px ;
margin-top:50px ;
& .MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiAccordion-root.Mui-expanded{
border:none ;
}
& .MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiAccordion-root{
border:none ;
}
& .MuiAccordionSummary-root.Mui-expanded{
background-color: #0d4a76 ;
color:  #fff;
svg {
color:  #fff;
    font-size:20px  ;
}

}
& .MuiAccordionSummary-root{
transition:.5s ;
padding:20px 10px ;
svg {
    font-size:20px  ;
}
:hover{
transition:.5s ;
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    color:  #fff;
    svg {
    color:  #fff;
    font-size:20px  ;
}
}
}
`