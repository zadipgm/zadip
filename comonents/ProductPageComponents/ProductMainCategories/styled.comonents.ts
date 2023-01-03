import styled from "styled-components"


export const ProductCategoriesContainer = styled.div`
transition:.5s ;
margin:70px 0px ;
@media (max-width: 600px) {
    margin:60px 0px ;

}
`
export const ProductCategoriesHeader = styled.div`
background-image:url("https://cdn.pixabay.com/photo/2016/04/06/08/50/gears-1311171__340.jpg") ;
    padding: 29px;
    background-repeat:no-repeat ;
    background-size:cover ;
`
export const Title = styled.h2`
text-align:center ;
color:#fff ;

`



export const ProductCards = styled.div`
@media (max-width: 600px) {
width:100%
}
@media (min-width: 1200px) {
width:1170px;
margin: 0 auto ;
}
transition: .5s;

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
    margin:25px 0px ;
    > a{
text-decoration:none ;
width: 22%;
@media (max-width: 600px) {
 width: 100%;
}
    margin: 12px;
    }
    `
    export const LoadMoreButton = styled.button`
    padding: 15px 30px ;
    display:flex ;
        background: inherit;
    color:#55badf;
    border:1px solid #55badf ;
    border-radius:10px ;
    cursor: pointer;
    transition:.5s;
    font-size: 18px;
    font-weight: 600;
    width:250px ;
    margin: 0 auto ;
    justify-content: center;
    align-items: center;
    :hover{
        background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    color:#fff ;
    transition:.5s ease-in;
    }
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
    height: 140px;
    object-fit: cover;
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


  