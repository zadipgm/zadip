import styled from "styled-components"


export const CardContainer = styled.div`
@media (min-width: 1200px) {
width:1170px;
margin: 0 auto ;
}
transition: .5s;
`
export const CardItems = styled.ul`
all: unset;
display:flex ;
list-style: none;
    flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
margin:25px 0px ;
> a{
text-decoration:none ;
width: 29%;
margin: 12px;
}
`
export const CardTitle = styled.h2`
text-align:center ;
color: #0196e3;
margin-top: 100px;

`

export const CardDescription = styled.p`   


text-align:center ;
    color: #737c85;
`
export const ListWrapper = styled.div`
    position: relative;
gap:12px;
width: 300px;
height: 300px;
border-radius: 1rem;
background: #f2f3f7;
display: flex;
flex-flow: column nowrap;
justify-content:center ;
background: #f2f0f0;
box-shadow: 8px 8px 24px #00000030;
transition:.5s;
:hover{
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color:#fff ;
transition:.5s;
h2{
    color:#fff ;
    transition:.5s;
}
p{
transition:.5s;  color: #fff;
}
transition: .5s;
transform: translateY(-10px);
box-shadow: 8px 8px 24px #00000070;
.product_icon{
    background: #fff;
}
.product_icon svg{
    fill:#0D4A76;
    transition: .5s;
    transform: translateX(-10px);
}
}
`
export const IconWrapper =styled.div`
&.product_icon{
    position: absolute;
    top: 0;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    background: linear-gradient(-30deg, #0576bc 30%, #38b7ae);
    border-bottom-right-radius: 77px;
    
        svg{
        transition: .5s;
        fill:#fff;
        margin: 6px 12px;
    }
}
`
export const CardListItems = styled.li``