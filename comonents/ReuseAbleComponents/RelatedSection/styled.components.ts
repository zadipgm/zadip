import styled from "styled-components";

export const RelatedProductsWrapper= styled.div`

background-image:url("https://bootstrapmade.com/demo/templates/Sailor/assets/img/slide/slide-2.jpg") ;
`
export const RelatedWrapper= styled.div`
padding: 15px;
@media(min-width:1200px) {
    width:1170px ;
    margin: 0 auto;
} 
`
export const RelatedTitle = styled.h3`
text-align:center ;
margin:30px 20px ;
color: #0196e3;
`
export const Divider = styled.div`
 display: flex;
  align-items: center;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ::after {
  content: '';
  height: 2px;
  background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
  flex-grow: 1;
  }
  ::before {
  content: '';
  height: 2px;
  background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
  flex-grow: 1;
  }
`