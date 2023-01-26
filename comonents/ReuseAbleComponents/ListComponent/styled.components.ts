import styled, { css } from "styled-components"
export const List = styled.ul`
margin:30px 0px ;
list-style-type: none;
padding: 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const ListItem =styled.li`
    width: 25%;
    padding: 8px 10px;
    display: flex;
color:#737c85;
> svg {
    margin-top:6px ;
    ${({theme})=>
        theme.isLTR ?
        css`
        transform:rotate(-90deg) ;
        
        `:css`
        transform:rotate(90deg) ;
        `
    }
}
` 