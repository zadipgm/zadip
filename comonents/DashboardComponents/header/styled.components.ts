import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
    padding:0px 12px ;
    width:100%;
    height:70px ;
`
export const WrapperMobileDash = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`
export const BurgerMenuDash = styled.div`

>svg {
  width: 50px;
    height: 50px;
    display: block;
}
@media(max-width:768px){
  display:block ;
}
@media(min-width:768px) {
  display:none;
}
`
export const MobileContainer = styled.div`
display:flex; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
padding:12px;
justify-content: space-between;
align-items: center;
`
export const SideContainerMobileDash = styled.div`

`
export const LogoutContainerMobile = styled.div`
display:flex;
justify-content:center;

`
export const ProfileImageContainer = styled.div`
>div{
display:flex ;
justify-content:flex-start;
gap:6px;
align-items:center ;
color: #fff;
position: relative;
padding:15px 0px;
cursor: pointer;
&.mobile{width:100%;
  justify-content:space-between;
}
> img{
    width:40px ;
    height:40px ;
    border-radius:100% ;
}
}

`
export const HeadersContainer = styled.div`
.mobile {
  @media (max-width: 768px) {
    display: block;
  }
  @media (min-width: 768px) {
    display: none;
  }
}
.desktop {
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
}
`;
export const Langwrapper = styled.div`
 padding: 0px 20px;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:6px;
    transition:.5s ;
    color:${({ theme }) => theme.colors.black1};
    :hover{
    transition:.5s ;
    background-color:${({ theme }) => theme.colors.darkBlue} ;
    a{
        color:#fff ;

    }
    > div>svg {
        stroke:${({ theme }) => theme.colors.white};
    }
 }
   `
export const LangButton = styled.a`

    display:flex ;
    align-items:center ;
    gap:6px;
    width:100% ;
    color:${({ theme }) => theme.colors.black1};
    text-decoration:none ;
&.mobile-lang {
  padding: 0px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;
    font-size: 16px;
}
&.mobile-lang-dash {
  padding: 0px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;width:35%;
    text-align: center;
    font-size: 16px;
    border-radius:8px;
        display: flex;
    justify-content: center;
}
`
export const ArrowWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
color:${({ theme }) => theme.colors.black1} ;
> span{
    font-size: 18px;
    font-weight: 600;
}
`
export const ProfileList = styled.ul`
    list-style-type: none;
    color: black;
    padding:0px !important;
    margin: 0px!important;
    width: 100%; 
    > a {
        display:flex;
        padding:0px 12px ;
        justify-content:flex-start;
        align-items:center;
        transition:.5s ;
        font-size:16px ;
        text-decoration:none ;
        color:${({ theme }) => theme.colors.black1} ;
        font-family: 'Cairo', sans-serif !important;
 :hover{
    transition:.5s ;
    background-color:${({ theme }) => theme.colors.darkBlue} ;
    color:#fff ;
    > div > svg {
        fill:${({ theme }) => theme.colors.white};
        stroke:${({ theme }) => theme.colors.white};
    }
 }
}
`
export const IconWrapper = styled.div`
width:40px ;
height:40px ;
display:flex;
justify-content:center ;
align-items:center ;
`
export const ProfileListItems = styled.li`
    padding: 8px 5px;
    font-size: 13px;
`
export const LogoutContainer = styled.div`
>a{
display: flex;
justify-content: center;
align-items:center ;
gap:6px;
color:#fff;
text-decoration:none ;
> svg {
    transform: rotate(180deg);
}
}
`



