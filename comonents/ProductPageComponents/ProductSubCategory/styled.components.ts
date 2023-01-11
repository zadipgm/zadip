import styled from "styled-components"

export const ProductSubCategoryContainer =  styled.div<{bgimage?:string}>`
background-attachment: fixed !important;
width:100% ;
height:100% ;
padding: 36px 0px;
margin-bottom: -60px;
background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url(${({bgimage})=>bgimage}) no-repeat;
background-position: center center;
    background-size: cover;
`
export const ProductSubCategoryWrapper  = styled.div`
@media (min-width:1200px){
width: 1170px ;
margin:0 auto ;
}

`
export const ProductCardsItems = styled.ul`
all: unset;
display:flex ;
list-style: none;
    flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
margin:30px 0px ;
> a{
text-decoration:none ;
width: 29%;
margin: 12px;
}

`
export const ProductBreadcrumbWrapper = styled.div`
display: flex;
justify-content:flex-end ;
align-items:center ;
margin: 100px 0px 0px 0px;
@media (max-width:600px){
    margin: 70px 15px 0px 15px;

}

`
