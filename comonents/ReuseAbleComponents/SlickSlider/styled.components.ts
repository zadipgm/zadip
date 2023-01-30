import styled, { css } from "styled-components";

export const  SliderContainer = styled.div`
        @media (max-width: 600px) {
         display:block ;
         width:100% ;
        }
    
            display:block ;
            width:1170px ;
      
margin:0 auto ;




 
 


`
export const SliderWrapper = styled.div`
&.recent-news{
    ${({ theme }) =>
    theme.isLTR
    ? css`
        direction:ltr ;
        `
    : css`
    direction:rtl ;
    `}
    display:flex !important ;
    @media (max-width: 600px) {
         display:block !important ;
         width:100% ;
         :hover{
        background: transparent;
         }
        }
justify-content: flex-start; ;
 margin: 40px 20px;
     background: #fff;
    border-radius: 25px;
    cursor: pointer;
    transition: .5s;
    :hover{
       > h4{
            color: #fff;
        }
        background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
        transition: .5s;
        transform: translateY(-5px);
        box-shadow: -3px 4px 15px 9px rgba(148,148,148,0.47);
    }
}

    &.partner-slider{
        display:flex !important ;
 justify-content:center ;
 margin: 20px ;
    border-radius: 25px;
    border:none ;
    cursor: pointer;
    transition: .5s;
    :hover{
        
        transition: .5s;
            transform: translateY(-5px); 
    }
    }
    &.our-value-slider{
        > img{
            width: 100%;
            height: 100%;
        }
    }
`
export const Image= styled.img``
export const Title = styled.h4`
    font-weight: 700;
    text-align: start;
    margin: 0px 12px;
    color:#34495e ;
    `

