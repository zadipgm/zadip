import styled, { css } from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.themeColor};
    display: flex;
    flex-direction: column;
    width: 16rem;
    min-height: 100vh;
        background-size: cover;
        transition:.5s ;
    &.active{
        width:14% ;
        transition:.5s ;
    }
    &.In-active{
        transition:.5s ;
        width:25% ;
    }

`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition:.5s ;
`
export const SideIconWrapper = styled.div`
display:flex ;
padding:10px 15px;
gap:10px;
justify-content:flex-start; ;
align-items: center ;
>a{
    text-decoration: none;
    color:${({ theme }) => theme.colors.white}
}
:hover{
        background-color: ${({ theme }) => theme.colors.black1};cursor:pointer;
    }

`
export const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.black1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition:.5s ;
    ${({ theme }) =>
        theme.isLTR
            ? css`
                &.active{
                transform: rotate(-90deg);
                transition:.5s ;
            }  
            &.In-active{
                transform: rotate(90deg);
                transition:.5s ;
            }
                `
            : css` 
                &.active{
                transform: rotate(90deg);
                transition:.5s ;
            }  
            &.In-active{
                transform: rotate(-90deg);
                transition:.5s ;
            }
                `
    }
`




export const List = styled.ul`
    padding: 0;
    list-style-type: none;
    transition:.5s ;margin:0;
    &.menu-list{
        margin-bottom: 100px;
    }
    >a{
        padding:8px ;
    display:flex ;
    transition:.5s ;
    justify-content:flex-start ;
    align-items:center ;
    width:100% ;
    color:${({ theme }) => theme.colors.gray2};
    text-decoration:none ;
    &.active{
    transition:.5s ;
    display: block;
    text-align: center;
    }
    border-bottom:1px solid ${({ theme }) => theme.colors.gray3}; 
    :hover{
        background-color: ${({ theme }) => theme.colors.black1};
    }
   }

`

export const ListItems = styled.li`
 
   display:flex ;
   justify-content:flex-start;
   align-items: center;
   gap:6px;
   font-size: 18px;
   cursor: pointer;
   

`

export const AccordionContainer = styled.div`
margin-bottom:100px;
   & .MuiPaper-root{
    background-color: transparent;
    box-shadow: none;
    margin:0 ;
    & .MuiButtonBase-root {
        border-bottom:1px solid ${({ theme }) => theme.colors.gray3}; 
        :hover{
            background-color: ${({ theme }) => theme.colors.black1}; 
        }
    }
    &.Mui-expanded{
        margin: 0;
    }
   }
   `
export const PageWrapper = styled.div`
 
   padding: 10px 35px;
      display:flex ;
      justify-content:flex-start ;
      align-items:center ;
      gap:6px;
      width:100% ;
      a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black1}; 
      }
      :hover{
          background-color: #00000052;
        a{
            color: ${({ theme }) => theme.colors.white};
        }
      }
     `