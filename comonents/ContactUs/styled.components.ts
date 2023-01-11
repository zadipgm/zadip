import styled from "styled-components";

export const Wrapper = styled.div`
padding:15px ;
width: 1170px;
margin:0 auto ;
@media(max-width:600px){
    width:100% ;
}
`
export const MainWrapper = styled.div`
    width:33% ;
    @media(max-width:600px){
        width:100% ;
        margin: 15px 0px;
    }
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    background-color: rgba(13,74,118,0.04);
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    cursor: pointer;
    transition: background-color 800ms;
    :hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    transition: .5s ease-in;
    color: #fff;
    background-position:  350px;
      background-color: #A0A0A0;
    > p{
        color: #fff;
    }
   > p > a{
        color: #fff;
    }
    & .icons{
        background: #fff;
        svg{
            fill:#2193b0
        }
    }
    }
`
export const Container = styled.div`

display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0px;
@media(max-width:600px){
    display:block ;
}
`
export const Text = styled.p`
font-size:18px ;
font-weight:600 ;
margin: 0;
color:#505152;
a{
    padding:4px ;
    font-weight:normal;
    text-decoration:none ;
    color:#006791 ;
}
`
export const IconWrapper= styled.div`
width:60px ;
height:60px ;
border-radius:100% ;
color:#fff ;
display:flex ;
justify-content:center ;
align-items:center ;
background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
svg {
    fill:#fff
}
`
export const LocationLink  =styled.a``

export const OrderWrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    @media(max-width:600px){
        width:100% ;
    }
`