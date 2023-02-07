import styled from "styled-components";

export const Container = styled.div`
margin:0 auto ;
@media (max-width: 600px) {
        width: 100%;
      }
      @media (min-width: 600px) {
        width: 100%;
      }
      @media (min-width: 1440px) {
        width:1170px ;
      }
`
export const Wrapper = styled.div`
display:flex;
justify-content:center ;
align-items:center ;
@media(max-width:600px) {
   display:block ;
}
 >img{
    width:50% ;
    height:50% ;
    padding:15px ;
    border-radius:40px ;
    @media(max-width:600px) {
    width:100% ;
    height:100% ;
}
 }
`
export const Description = styled.div`
padding:15px;
width:50%;
text-align:justify ;
@media(max-width:600px) {
    width:100% ;
}
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:30px 0px ;
    padding:15px ;
    @media(max-width:600px) {
    width:100% ;
    display:block ;
}
> a{
    >img {
        width:70% ;
        height:70% ;
        @media(max-width:600px) {
    width:100% ;
    height:100% ;
}
    }
}

`