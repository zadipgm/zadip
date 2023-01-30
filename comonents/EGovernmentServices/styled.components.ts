import styled from "styled-components";

export const Container = styled.div`
width:1170px;
margin: 0 auto;
margin-bottom:30px ;
@media (max-width: 600px) {
width:100% ;

}
`
export const Wrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
margin-top:80px ;
@media (max-width: 600px) {
 display:block ;
 padding:0px 15px ;
}
`
export const Heading = styled.h2`
color:#2193b0 ;
`