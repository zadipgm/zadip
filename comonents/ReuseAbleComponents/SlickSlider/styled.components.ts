import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
@media (max-width: 600px) {
     width:100% ;
    }
    @media (min-width: 600px) {
    width:100% ;
    }
    @media (min-width: 1440px) {
    width:1170px ;
    }
    display:block ;
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
        background: ${({ theme }) => theme.colors.themeColor};
        transition: .5s;
        transform: translateY(-5px);
        box-shadow: -3px 4px 15px 9px rgba(148,148,148,0.47);
    }
}

    &.partner-slider{
        display:flex !important ;
 justify-content:center ;
    border:none ;
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
export const Image = styled.img`
width:50%;
height:50% ;
`


