import styled, { css } from "styled-components";
export const Container = styled.div`
display:flex ;
justify-content: space-between;
align-items:center ;
height:99px ;
width:100% ;
margin:0 auto ;
&.ektefa_form{
  display: none;
}
@media(max-width:600px){
  width:100% ;
  padding: 15px;
}
@media(min-width:600px){
  width:100% ;
}
@media(min-width:1440px){
  width:1170px;
}
`
export const HeaderWrapper = styled.div`
`
export const HeaderNavbarWrapper = styled.div`
position: fixed;
top: 0;
z-index:9999;
width: 100%;
background: ${({ theme }) => theme.colors.headerLightColor};
backdrop-filter: saturate(180%) blur(5px);
&.scrolled {
  opacity:.9 ;
  background:${({ theme }) => theme.colors.themeColor};
  animation: rotateMenu 1000ms ease-in-out;
  transform-origin: top center;
  }
  &.other-pages{
  background:${({ theme }) => theme.colors.themeColor};
 animation:none
  }
`
export const HeaderContainer = styled.div`
font-size:12px;
`
export const Link = styled.a`
color: #a8aeb3;
text-decoration:none;
padding: 0px 8px;
`
export const HeaderLogo = styled.img`
padding-top:12px ;
@media (max-width: 600px) {
display:flex ;
justify-content:center ;
align-items:center ;
width:200px ;
}
`
export const NavBar = styled.ul`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
margin:0 ;
padding:0 ;
@media(max-width:600px){
  display:none ;
}
@media(min-width:600px){
  display:none ;
}
@media(min-width:992px){
  display:flex ;
}
@media(min-width:1440px){
  display:flex;
}
`
export const ImageContainer = styled.div`
`
export const NavBarList = styled.li`
padding: 33px 18px;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
position:relative ;
transition:.6s ease-in-out;
perspective: 1000px;
& .dropdown-content{
  position: absolute;
  background: ${({ theme }) => theme.colors.themeColor};
  opacity:.8 ;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
  z-index: 1;
  padding: 0;
  margin: 0;
  top: 100%;
  display:none ;
  transition: background-color 0.5s linear;
  color:#fff ;
}
& .dropdown-content .survillence{
     > li > ul {
    display:none;
    position: absolute;
    top: 0;
    ${({ theme }) =>
    theme.isLTR
      ? css`
      left: 100%;
        `
      : css`
    right:100% ;
    `}
    animation: rotateMenu 800ms ease-in-out forwards;
    transform-origin: top center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 200px;
    background: ${({ theme }) => theme.colors.themeColor};
    
  }
}
& .dropdown-content .access-control{
    > li > ul{
    display:none ;
    position: absolute;
    animation: rotateMenu 800ms ease-in-out forwards;
    transform-origin: top center;
    top: calc(100% - 54px);
     ${({ theme }) =>
    theme.isLTR
      ? css`
      left: 100%;
        `
      : css`
    right:100% ;
    `}
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 200px;
    background: ${({ theme }) => theme.colors.themeColor};
    }
  }
:hover{
  color:${({ theme }) => theme.colors.black};
transition:.6s ease-in;
& .dropdown-content{
  display:block ;
  min-width: 250px;
  animation: rotateMenu 800ms ease-in-out forwards;
  transform-origin: top center;
@keyframes rotateMenu {
    0% {
        transform: rotateX(-90deg);
        opacity:0 ;
    }
    70% {
        transform: rotateX(20deg) ;
        opacity:0.4;
    }
    100% {
        transform: rotateX(0deg) ;
        opacity:0.9 ;
    }
}
&.other-items{
  min-width:250px ;
  > ul {
    padding:0 ;
    :hover{
      background:none ;
    }
    > a{
      padding:12px ;
    }
  }
}
}
}
& .dropdown-content .survillence{
  :hover{
   > li > ul {
      display:block ;
    transition:.5s ;
    }
  }
}
& .dropdown-content .access-control{
  :hover{
   > li > ul {
      display:block ;
    transition:.5s ;
    }
  }
}

border-radius: 8px;
color: #fff;
text-transform: uppercase;
cursor: pointer;
margin:0px 12px ;
>a{
  text-decoration: none;
  color:#fff ;
  transition:.5s ;
  :hover{
  transition:.5s ;
  color:${({ theme }) => theme.colors.black};
}
}
`
export const NavLink = styled.a`
text-decoration:none ;
color: #fff;
`
export const NavbarItems = styled.ul`
padding: 0;
margin: 0;
list-style-type: none;
padding:12px ;
transition:.5s ;
:hover{
  transition:.5s ;
  background-color: #000000de;
}
`
export const MenuListcontainer = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width:250px ;
>svg {
  ${({ theme }) =>
    theme.isLTR
      ? css`
      transform:rotate(-90deg) ;
        `
      : css`
   transform:rotate(90deg) ;
    `}
  
}
`

export const LogoWrapper = styled.div`
width: 150px;
>img{
  width: 100%;
  height: 100%;
}
`
export const MenuListWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`
export const NavbarItemsList = styled.li`
  transition:.5s ;
    padding: 6px;
:hover{
  transition:.5s ;
  background-color:#000000de;
}
`
export const NavbarItemsLink = styled.a`
color: #fff;
display: flex;
text-transform:none ;
justify-content: flex-start;
align-items: center;
gap: 5px;
padding: 6px;
text-decoration: none;
  > div >svg{
    display:flex ;
  }
`
export const MainHeading = styled.div`
  position: absolute;
  top: 70%;
  bottom: 0;
  ${({ theme }) =>
    theme.isLTR
      ? css`
    right:6% ;
      `
      : css`
  left:6% ;
  `}
 
@media (max-width: 600px) {
  top:63% ;
${({ theme }) =>
    theme.isLTR
      ? css`
    left:4%;
    top:66% ;
      `
      : css`
  left:4% ;
  `}
  }
  @media (min-width: 390px) {
    top:70% ;
  }
`
export const Text = styled.h1<{ lineHeight?: string }>`
margin:0 ;
font-size: 70px;
font-weight: 600;
color:#fff;
line-height:${({ lineHeight }) => lineHeight} ;
@media(max-width:600px){
    font-size: 40px;
    line-height: 55px;
}
`
export const IconsWrapper = styled.div`
& .mouse{
position:absolute ;
bottom:80px ;
left:50% ;
right:50%;
width:40px ;
height:40px ;
fill:#fff ;
@media(max-width:600px){
    bottom: 49px;
}

}
& .down-arrow{
position:absolute ;
bottom:20px ;
left:50.4% ;
right:50.4%;
@media (max-width: 600px) {
  left: 51.6%;
  right: 51.6%;
}
width:25px ;
height:25px ;
fill:#fff ;
transition:.3s ease ;
animation: mouseArrowAnimation 1.5s linear infinite;
animation-direction: reverse;
animation-duration: 2s;
animation-iteration-count: infinite;
}
@keyframes mouseArrowAnimation {
  from {bottom: 0px;}
  to {bottom: 60px;}
  }
`

export const LangButton = styled.a`
text-decoration:none ;
display: inline-block;
padding: .75rem 1.15rem;
border-radius: 10px;
color: #fff;
text-transform: uppercase;
font-size: 16px;
transition: all .6s;
z-index: 1;
transition:.5s ;
cursor: pointer;
border:none ;
margin: 0px 11px ;
:hover{
background-color:#6fc5e8;
transition:.6s;
}
&.mobile-lang {
  padding: 6px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;
    font-size: 16px;
}
`
export const VideoWrapper = styled.div<{ background: string }>`
position: relative;
width: 100%;
::before{
  content: '';
position: absolute;
background: ${({ background }) => background};
top: 0;
right: 0;
bottom: 10px;
left: 0;
}
@media (max-aspect-ratio: 9/16) {
  video{
     width: 100%;
    height: 100vh;
    object-fit:cover ;
  }
}
@media (min-width:600px) {
  video{
    width: 100%;
    height: 100vh;
    object-fit:cover ;
  }
}
`
export const Video = styled.video`
width:100% ;
@media (max-width: 600px) {
  width: 100%;
    height: 100vh;
    object-fit: cover;
}
`
export const ScrollTopButton = styled.button`
position: fixed;
padding: 16px 20px;
font-size: 20px;
${({ theme }) => theme.isLTR ? css`right:7px` : css`left:7px`};
bottom: 67px;
background-color: ${({ theme }) => theme.colors.lightBlue};
color: rgb(255, 255, 255);
border-radius: 100%;
border: none;
text-align: center;
cursor: pointer;
transition: .5s;
z-index: 9999;
:hover{
  background: ${({ theme }) => theme.colors.darkBlue};
  transition: .5s;
}

`