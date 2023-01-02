 import styled from "styled-components";




export const TechnicalSpecsMainPage = styled.div`
margin-top:80px ;

`
export const SpecsContainer = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
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

}
        background-color: rgba(13,74,118,0.04);
        box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
       
          display: flex;
    justify-content: flex-start;
    align-items: center;
   
    :hover{
      transition: all 0.5s ease-in;
      color:#fff ;
      background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
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

@media (min-width: 1200px) {
width: 1170px;
margin:0 auto ;
}
`

export const Button= styled.button`
text-decoration:none ;
padding:11px 40px ;
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
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