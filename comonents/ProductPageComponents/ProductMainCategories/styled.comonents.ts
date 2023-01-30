import styled from "styled-components"


export const ProductCategoriesContainer = styled.div`
transition:.5s ;
margin:70px 0px 0px 0px ;
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
text-transform:capitalize ;

`



export const ProductCards = styled.div`
@media (max-width:600px) {
width:100%
}
@media (min-width: 1200px) {
width:1170px;
margin: 0 auto ;
}
transition: .5s;

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




  