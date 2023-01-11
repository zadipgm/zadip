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
export const ProductCardsItems = styled.ul`
    all: unset;
    @media (max-width: 600px) {
display:block ;
}
    display:flex ;
    list-style: none;
        flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition:.5s ;
    margin:50px 0px ;
    > a{
text-decoration:none ;
width: 22%;
@media (max-width: 600px) {
 width: 100%;
}
    margin: 12px;
    }
    `
    export const ProductCardsListItems = styled.li` 
    position: relative;
   padding: 1rem;
   border-radius: 1rem;
   background: #f2f3f7;
   height: 100%;
   display: flex;
   flex-flow: column nowrap;
   transition:.5s ;
   justify-content:center ;
   align-items:center ;
   box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
   
   :hover{
       transition:.5s ;
       background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
   color:#fff ;
   h2{
       color:#fff ;
   }
   p{
       color: #fff;
   }
   transition: .5s;
   transform: translateY(-10px);
   box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
   svg{
      fill:#fff
   }
 }
   `


export const ProductCardsTitle = styled.h2`
   text-align: center;
   color: #0196e3;
   font-size: 16px;

`
export const ProductCardsDescription = styled.p`   
margin: 0 auto;
   text-align: center;
   color: #737c85;
   font-size: 14px;
   `
       export const ProductCardsImage = styled.img`
       border-radius: 2rem;
       transition: all 0.3s;
       overflow: hidden;
       width: 100%;
       @media(max-width:600px){
           width:300px ;
       }
       height: 100%;

    height: 170px;
       object-fit: cover;
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