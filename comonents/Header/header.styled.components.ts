import styled, { css } from "styled-components";
export const HeaderWrapper = styled.div`

`
export const HeaderNavbarWrapper= styled.div`
position: fixed;
top: 0;
z-index:9999;
width: 100%;
background: linear-gradient(-30deg,#0676bb5e 30%,#38b7ae4f);
&.scrolled {
  opacity:.9 ;
  background:linear-gradient(-30deg,#0576bc 30%,#38b7ae);
  animation: rotateMenu 1000ms ease-in-out;
  transform-origin: top center;
  }
  &.other-pages{
  background:linear-gradient(-30deg,#0576bc 30%,#38b7ae);
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
export const  NavBar = styled.ul`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
margin:0 ;
padding:0 ;
`
export const Container = styled.div`
display:flex ;
justify-content: space-between;
align-items:center ;
width:1170px;
margin:0 auto ;
>a {
  padding: 9px 0px 0px 0px;
}
`
export const ImageContainer =styled.div`
`
export const  NavBarList =styled.li`
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
  background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
  opacity:.8 ;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
  z-index: 1;
  padding: 0;
  margin: 0;
  top: 100%;
  border-radius:8px ;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  display:none ;
  transition: background-color 0.5s linear;
}

:hover{
  color:#a7f5ef;
transition:.6s ease-in;
& .dropdown-content{
  padding:12px ;
  display:flex ;
  justify-content: space-between;
  min-width: 661px;
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
&.services{
  min-width:250px ;
}
&.about-us{
  min-width:240px ;
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
  color:#a7f5ef;
}
}
`
export const NavLink = styled.a`
text-decoration:none ;
color: #fff;
`
export const NavbarItems =styled.ul`
padding: 0;
margin: 0;
list-style-type: none;
`
export const NavbarItemsList =styled.li`
  transition:.5s ;
  margin: 0px 12px;
    padding: 0px 12px;
:hover{
  transition:.5s ;
  background-color:#16242a82;

}
`
export const NavbarItemsLink =styled.a`
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
export const MainHeading =styled.div`
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
${({ theme }) =>
  theme.isLTR
  ? css`
    left:4% ;
      `
  : css`
  left:12% ;
  `}
  }
`
export const Text = styled.p<{lineHeight?:string}>`
margin:0 ;
font-size: 70px;
font-weight: 600;
color:#fff;
line-height:${({lineHeight})=>lineHeight} ;
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
}
& .down-arrow{
position:absolute ;
bottom:20px ;
left:50.4% ;
right:50.4%;
@media (max-width: 600px) {
  left: 51.6%;
  right: 50.6%;
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
export  const HeaderTopBannerContainer = styled.div`
width:100% ;
background-color: #34495E;
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
`
export const LangButton = styled.a`
text-decoration:none ;
display: inline-block;
padding: .75rem 1.15rem;
border-radius: 8px;
color: #fff;
text-transform: uppercase;
font-size: 1rem;
transition: all .6s;
z-index: 1;
transition:.5s ;
cursor: pointer;
border:none ;
margin: 0px 11px ;
:hover{
background-color:#6fc5e8;
transition:.6s ;
}
`
export const Divider = styled.div`
width: 100vw;
height: 3px;
background-image: url("https://zadip.com/images/components/stripe.png");
background-repeat: repeat-x;
`
export const VideoWrapper = styled.div<{background:string}>`
position: relative;
width: 100%;
::before{
  content: '';
position: absolute;
background: ${({background})=>background};
top: 0;
right: 0;
bottom: 10px;
left: 0;
}
`
export const Video= styled.video`
width:100% ;
@media (max-width: 600px) {
height: 100vh;
width:auto ;
}
`
export const ScrollTopButton =  styled.button`

position: fixed;
padding: 16px 20px;
font-size: 20px;
bottom: 40px;
right: 23px;
background-color: #99d2e3;
color: rgb(255, 255, 255);
border-radius: 100%;
border: none;
text-align: center;
cursor: pointer;
transition: .5s;
z-index: 9999;
:hover{
  background: #38b7ae;
  transition: .5s;
}

`