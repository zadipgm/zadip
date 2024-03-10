
import styled from "styled-components"
export const MobileHeaderList = styled.ul`
list-style-type:none ;
padding:15px;
margin:0 ;
`
export const MobileHeaderListItem = styled.li`
color:#fff ;
font-size:18px ;
`
export const MobileHeaderListLink = styled.a`
text-decoration:none ;
text-transform:capitalize ;
font-size:18px ;
color: #fff;
display:flex ;
justify-content:flex-start ;
align-items:center ;
gap:6px;
`
export const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BurgerMenu = styled.div`
display:none ;
>svg {
  width: 50px;
    height: 50px;
    display: block;
}
@media(max-width:600px){
  display:block ;
}
@media(min-width:600px) {
  display:block ;
}
`
export const ListTitle = styled.span`
text-transform:capitalize ;
font-size:18px ;
color: #fff;
`
export const InnerList = styled.ul`
list-style-type:none ;
margin:0 ;
`
export const NestedList = styled.ul`
list-style-type:none ;
`
export const NestedListItems = styled.li``
export const NestedListItemsLink = styled.a`
color:#d6ecf9; ;
display:flex ;
text-decoration:none ;
justify-content:flex-start ;
align-items:center ;
gap:12px;
margin:6px ;
font-size:18px ;
`
export const IconWrapper = styled.div`
display:flex ;
justify-content: flex-start;
align-items:center ;
color:#fff ;
>svg {
  margin: 0px 6px;
}

`