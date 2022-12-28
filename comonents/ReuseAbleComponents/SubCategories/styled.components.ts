import styled from "styled-components"

export const LoadMoreButton = styled.button<{color:string}>`
padding: 15px 30px ;
display:flex ;
    background: inherit;
color:${({color})=>color};
border:1px solid ${({color})=>color}; 
border-radius:10px ;
cursor: pointer;
transition:.5s ease;
font-size: 18px;
font-weight: 600;
width:250px ;
margin: 0 auto ;
justify-content: center;
align-items: center;
:hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color:#fff ;
border:1px solid #55badf ;
transition:.5s ease;
}
`
export const CategoryCardsListItems = styled.li` 
    position: relative;
padding: 1rem;
border-radius: 1rem;
background: #f2f3f7;
height: 400px;
display: flex;
flex-flow: column nowrap;
justify-content:center ;
align-items:center ;
transition: .5s ease;
:hover{
    p{
    color: #fff;
    }
    h3{
    color: #fff;
    }
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color:#fff ;
transition: .5s ease;
transform: translateY(-10px);
svg{
    fill:#fff
}
}
`
export const CategoryCardsItems = styled.ul`
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
export const CategoryCardsImage = styled.img`
border-radius: 2rem;
transition: all 0.3s;
overflow: hidden;
width: 100%;
height: 100%;
height: 300px;
object-fit: cover;
`
export const CategoryCardsTitle = styled.h3`
text-align:center ;
color: #0196e3;
`
export const CategoryCardsDescription = styled.p`   
width: 30ch;
margin: 0 auto;
text-align:center ;
color: #737c85;
`
export const CardListWrapper= styled.div`
display:flex ;
flex-wrap:wrap ;
&.MuiPaper-root.MuiButtonBase-root.MuiCardContent-root{
    width:300px ;
}
>a{
    text-decoration:none ;
}
`
export const OverLay =  styled.div`
position: absolute;
top: 0;
bottom: 0;
border-radius: 14px;
left: 0;
right: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: .5s ease;
background-color: #607DAC;
:hover{
opacity:0.99 ;
transition: .5s ease;
}
`
export const  OverLayTitle = styled.h3`
text-align:center ;
margin:0 ;
`
export const OverLaySubtitle = styled.p`
text-align:center ;

`
export const OverLayWrapper = styled.div`
text-align: center;
position: absolute;
top: 29%;
left: 14%;
right: 14%;
bottom: 0;

`

export const SearchSvgWrapper = styled.div`
width: 12%;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    svg{
        fill: #fff;
    }
`
export const  SearchWrapper= styled.div`
display: flex;
    justify-content: center;
    align-items: center;
        max-width: 700px; 
margin: 0 auto;
   
`
export const  Input= styled.input`
padding:15px ;
border:none ;
outline:none ;
width:88% ;
margin:20px 0px  ;
font-size:20px ;
color:#474d52;
border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

`