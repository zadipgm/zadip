import styled from "styled-components";

export const Container= styled.div`
padding:60px 0px  ;
background-image:url("https://www.zadip.com/en/images/slider/full-width/p8.jpg") ;
width:100% ;
height:100% ;
background-attachment: fixed;
background-repeat:repeat ;
`
export const FaqContainer = styled.div`
display:flex ;
 justify-content: center ;
 align-items:center ;
 width: 70%;
 @media (max-width: 600px) {
    width:100% ;

}

`
export const ImageWrapper = styled.div`
margin-top:50px;
@media (max-width: 600px) {
    max-width: 80%;
    margin: 0 auto;
    padding: 34px 0px;

}

> img{
border-radius:10px ;
} ;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width:600px) {
     display:block ;

}

width:1170px ;
margin: 0 auto;

margin-bottom:50px  ;

`