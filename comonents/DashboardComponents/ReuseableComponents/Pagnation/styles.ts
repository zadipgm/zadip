import styled from "styled-components";

export const PaginationList = styled.ul`
display:flex ;
list-style-type: none;
padding: 0;flex-wrap:wrap;
`
export const PaginationListItem = styled.li`
flex-basis: 90px;
    flex-grow: 1;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    margin: 2px;
    border-radius:6px;
    transition:.5s ;

    cursor:pointer;
    &.active{
        transition:.5s ;

        background-color: ${({ theme }) => theme.colors.darkBlue};
        >a{

            color:${({ theme }) => theme.colors.white}; 
        }

    }
    :hover{
        background-color: ${({ theme }) => theme.colors.gray2};
        border:1px solid ${({ theme }) => theme.colors.gray2};
        transition:.5s ;

    }
    >a{
        text-decoration: none;
        color:${({ theme }) => theme.colors.lightBlue}; 
    }

`
