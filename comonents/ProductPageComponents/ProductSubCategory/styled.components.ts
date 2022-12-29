import styled from "styled-components"

export const ProductSubCategoryContainer =  styled.div`
background-attachment: fixed !important;
width:100% ;
height:100% ;
padding: 36px 0px;
margin-bottom: -60px;
background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url("https://demo.htmlcodex.com/1798/cctv-website-template/img/carousel-2.jpg") repeat;
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
// export const LoadMoreButton = styled.button<{color:string}>`
// padding: 15px 30px ;
// display:flex ;
//     background: inherit;
// color:${({color})=>color};
// border:1px solid ${({color})=>color}; 
// border-radius:10px ;
// cursor: pointer;
// transition:.5s ease;
// font-size: 18px;
// font-weight: 600;
// width:250px ;
// margin: 0 auto ;
// justify-content: center;
// align-items: center;
// :hover{
//     background: #55badf;
// color:#fff ;
// border:1px solid #55badf ;
// transition:.5s ease;
// }
// `
// export const ProductCardsListItems = styled.li` 
//     position: relative;
// padding: 1rem;
// border-radius: 1rem;
// background: #f2f3f7;
// height: 100%;
// display: flex;
// flex-flow: column nowrap;
// justify-content:center ;
// align-items:center ;
// transition: .5s ease;
// :hover{
//     p{
//     color: #fff;
//     }
//     h3{
//     color: #fff;
//     }
// background-color: #0d4a76;
// color:#fff ;
// transition: .5s ease;
// transform: translateY(-10px);
// svg{
//     fill:#fff
// }
// }
// `
// export const ProductCardsImage = styled.img`
// border-radius: 2rem;
// transition: all 0.3s;
// overflow: hidden;
// width: 100%;
// height: 100%;
// height: 300px;
// object-fit: cover;
// `
// export const ProductCardsTitle = styled.h3`
// text-align:center ;
// color: #0196e3;
// `
// export const ProductCardsDescription = styled.p`   
// width: 30ch;
// margin: 0 auto;
// text-align:center ;
// color: #737c85;
// `
// export const OverLay =  styled.div`
// position: absolute;
// top: 0;
// bottom: 0;
// border-radius: 14px;
// left: 0;
// right: 0;
// height: 100%;
// width: 100%;
// opacity: 0;
// transition: .5s ease;
// background-color: #607DAC;
// :hover{
// opacity:0.99 ;
// transition: .5s ease;
// }
// `
// export const  OverLayTitle = styled.h3`
// text-align:center ;
// margin:0 ;
// `
// export const OverLaySubtitle = styled.p`
// text-align:center ;

// `
// export const OverLayWrapper = styled.div`
// text-align: center;
// position: absolute;
// top: 29%;
// left: 14%;
// right: 14%;
// bottom: 0;

// `
// export const DownLoadButton= styled.button`
// text-decoration:none ;
// padding:11px 40px ;
// background-color:  #55badf;
// color:#fff ;
// border: none;
// border-radius: 12px;
// cursor: pointer;
// font-size:18px ;
// svg{
//   fill:#fff ;  
//   margin:0px 5px ;
// }
// `
// export const SearchSvgWrapper = styled.div`
// width: 12%;
//     height: 53px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #55BADF;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius: 10px;
//     svg{
//         fill: #fff;
//     }
// `
// export const  SearchWrapper= styled.div`
// display: flex;
//     justify-content: center;
//     align-items: center;
//         max-width: 700px; 
// margin: 0 auto;
   
// `
// export const  Input= styled.input`
// padding:15px ;
// border:none ;
// outline:none ;
// width:88% ;
// margin:20px 0px  ;
// font-size:20px ;
// color:#474d52;
// border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;

// `