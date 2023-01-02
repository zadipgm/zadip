import styled from "styled-components"

export const ProductVedio = styled.div`
width:100% ;
display: flex;
    justify-content: center;
    align-items: center;
`
export const VedioWrapper =  styled.div`
    width: 100%;
    height: 442px;
    position:relative ;
    background-image:url("https://ektefa.net/agency/img/illustrations/superadmin.svg") ;
    background-repeat:no-repeat ;
    background-position:center center ;

    & .circle {
  width: 50%;
  height: 50%;
  background-color: #046ef9;
  position: absolute;
  top:30% ;
  left:30% ;
  right:30% ;
  border-radius: 100%;
  animation: ripple-animation 1.5s infinite ease-out;
}



& .circle2 {
  animation-delay: 500ms;
}

&.circle3 {
  animation-delay: 4s;
}

@keyframes ripple-animation {
  0% {
    transform: scale(0.1);
    opacity: .5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
`
export const VedioLinkWrapper =styled.div`
position:absolute ;
top:50% ;
left:50% ;
right:50% ;
z-index:9999 ;
cursor: pointer;

`

export const IconWrapper = styled.div`

`