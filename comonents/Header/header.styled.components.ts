import styled, { css } from "styled-components";
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
export const MainHeading =styled.div`
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 6%;
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
export const Text = styled.p`
margin:0 ;
font-size: 60px;
    font-weight: 600;
    color:#fff;
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
export const HeaderWrapper = styled.div<{headerBgColor:string}>`
 
& .MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root {
top:unset;
height: 100px;
background: ${({headerBgColor})=>headerBgColor}; 
color: rgba(17, 23, 21, 0.2);
box-shadow: none;
transition: opacity 1s linear;

& .MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular{
width:1170px ;
&.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit.MuiIconButton-edgeStart.MuiIconButton-sizeMedium {
  &.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium{

  
  > svg {
    fill:#fff
  }
}
}
@media (max-width: 600px) {
width: 100%;
}
margin:0 auto ;
padding:5px 0px ;

& .MuiButtonBase-root {
    svg {
  height:3rem ;
  width: 3rem;    
      }
  }  
}

& .MuiBox-root{
  padding:13px ;
}

&.scrolled {
  background:linear-gradient(-30deg,#0576bc 30%,#38b7ae);
  animation: gradient 15s ease infinite;
  opacity:.9 ;
  transition: opacity 2s linear;
      }
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
    transition:.5s ;
	}
	50% {
    transition:.5s ;
		background-position: 100% 50%;
	}
	100% {
    transition:.5s ;
		background-position: 0% 50%;
	}
}

.nav-items{
text-decoration:none ;
color:#fff ;
padding: 10px 20px;
border-radius:6px ;
transition: .6s;
font-family: '__Cairo_f3a025';
:hover{
    background-color:#60CBEF; ;
    transition: .6s;
  }

}
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
  background-color: #60CBEF;
  transition:.6s ;
}

`
export const Divider = styled.div`
  width: 100vw;
  height: 3px;
  background-image: url("https://zadip.com/images/components/stripe.png");
  background-repeat: repeat-x;
`
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  ::before{
    content: '';
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 4px;
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
  right: 40px;
  background-color: #99d2e3;
  color: rgb(255, 255, 255);
  border-radius: 100%;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: .5s;
  z-index: 9999;
  :hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    transition: .5s;
  }

`