import styled from "styled-components";
export const HeaderContainer = styled.div`
font-size:12px;
`
export const Link = styled.a`
  color: #a8aeb3;
  text-decoration:none;
  padding: 0px 8px;
` 
export const HeaderLogo = styled.img`
 @media (max-width: 600px) {
 display:flex ;
 justify-content:center ;
 align-items:center ;
 width:200px ;
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
background: ${({headerBgColor})=>headerBgColor}; 
color: rgba(17, 23, 21, 0.2);
box-shadow: none;
transition: .5s;

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
  background:#006791;
  transition: .6s;
      }
}

.nav-items{
text-decoration:none ;
color:#fff ;
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
  width: 100%;
  height: 3px;
  background-image: url("https://zadip.com/images/components/stripe.png");
  background-repeat: repeat-x;
`
export const BannerImage= styled.div`
  background-image: url("https://startp-next.envytheme.com/images/bigdata-analytics/main-banner.jpg");
  background-position: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 112vh;
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