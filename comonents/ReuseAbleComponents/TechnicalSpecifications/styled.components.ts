 import styled from "styled-components";




export const TechnicalSpecsMainPage = styled.div`
    margin-top: 105px;

`
export const SpecsContainer = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
@media(max-width:600px){
      display: block;
      padding:15px ;
    }
`
export const SpecsWrapper = styled.div`
overflow: visible;
    
    display:block ;
    text-align:center ;
    padding:1rem;
    border-radius: 1rem;
    transition: .5s ease-in;
    margin: 1rem;
    width: 40%;
    @media (max-width: 600px) {
       width:100% ;
       margin:1rem 0rem ;
       padding:1rem 0rem ;

}
        background-color: rgba(13,74,118,0.04);
        box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
       
          display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 800ms;
    :hover{
      transition: all 0.5s ease-in;
      color:#fff ;
      background: ${({theme})=>theme.colors.themeColor};
      background-position:  469px;
      background-color: #A0A0A0;
      
      div{
        color:#fff ;
      }
      svg{
        fill:#fff;
        
      }
      h2{
        color:#fff
      }
    }
    &.services-detail{
      display:block ;
    }
    &.services{
      display:block ;

    }
        
`
export const SpecsTitle = styled.h2`
    min-width: fit-content;
    color: #0196e3;
    margin:0px ;
    font-size:18px ;
    font-size:1 ;
    :hover{
      color:#fff ;
    }
`
export const SpecsDescription = styled.div`
padding:0px 12px ;
display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    word-break:break-all ;
    text-align: justify;
    color:#5d666e;
    :hover{
      color:#fff ;
    }
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height:100px ;
    text-align:center ;
    text-overflow: ellipsis;

`
export const TechSpecsTitle = styled.h3`
    color: #0576bc;
    font-size:20px ;
    margin:0px ;

`

export const TitleWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
@media (max-width: 600px) {
       display:block ;

}
`
export const SpecsMainSection = styled.div`


width: 1170px;
margin:0 auto ;
@media (max-width: 600px) {
       width:100% ;

}
`

export const Button= styled.button`
text-decoration:none ;
padding:11px 40px ;
background: ${({theme})=>theme.colors.themeColor};
color:#fff ;
border: none;
border-radius: 12px;
cursor: pointer;
font-size:18px ;
display: flex;
margin: 30px auto;
    justify-content: center;
    align-items: center;
svg{
  fill:#fff ;  
  margin:0px 5px ;
  width: 50px;
    height: 50px;
}
`