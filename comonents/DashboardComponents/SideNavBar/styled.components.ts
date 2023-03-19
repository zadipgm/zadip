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
        width:8% ;
        transition:.5s ;
    }
    &.In-active{
        transition:.5s ;
        width:18% ;
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
justify-content:center ;
align-items: center ;
width:50px;
height:50px;
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
    margin-bottom: 100px;
    transition:.5s ;
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
    border-bottom:1px solid ${({ theme }) => theme.colors.gray3}; ;
    :hover{
        background-color: #00000052;
    
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
export const Langwrapper = styled.div`
 
 padding: 10px 18px;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:6px;
    width:100% ;
    color:#fff;
    :hover{
        background-color: #00000052;
    
    }
   `