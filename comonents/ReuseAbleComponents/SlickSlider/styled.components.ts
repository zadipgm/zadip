import styled from "styled-components";

export const  SliderContainer = styled.div<{locale:string}>`
     
        @media (max-width: 600px) {
         display:block ;
         width:100% ;
        }
    @media (min-width: 1200px) {
            display:block ;
            width:1170px ;
           }
     
    
margin:0 auto ;
.slick-dots{
    width: 40px;
    height:40px ;
    display:flex !important;
    justify-content:center ;
    align-items:center ;
    position:unset !important ;
    bottom: 0px !important;
    margin: 0 auto !important;
}
.slick-dots li button{
    content: "" !important;
    background-color: #99d2e3;
    width:20px ;
    height: 8px;
    padding: 2px;
    border-radius: 10px;
}
.slick-dots li.slick-active button:before{
    background-color:#0D4A76  !important ;
    opacity: .75;
    height: 8px;
    width:20px ;
    border-radius: 10px;
}
.slick-dots li button:before {
    font-size: unset;
    line-height: unset;
  }
 
  .slick-arrow{
width: 50px;
background: #99d2e3;
height:50px ;
transition: .5s;
border-radius: 100%;
:hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    transition: .5s;
}
&.slick-prev{
    left:${({locale})=>locale==="en-US"? "-60px !important":"auto"};
    right:${({locale})=>locale==="en-US"? "auto":"-60px !important"};
   
}
&.slick-next{
    right:${({locale})=>locale==="en-US"? "-60px !important":"auto"};
    left:${({locale})=>locale==="en-US"? "auto":"-60px !important"};
    
}
  }

`
export const SliderWrapper = styled.div`
&.recent-news{
    display:flex !important ;
 justify-content:center ;
 margin: 40px 20px;
     background: #fff;
    border-radius: 25px;
    cursor: pointer;
    transition: .5s;
    :hover{
        background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
        color: #fff;
        transition: .5s;
            transform: translateY(-5px);
            box-shadow: -3px 4px 15px 9px rgba(148,148,148,0.47);
    }
}

    &.partner-slider{
        display:flex !important ;
 justify-content:center ;
 margin: 20px ;
    border-radius: 25px;
    border:none ;
    cursor: pointer;
    transition: .5s;
    :hover{
        
        transition: .5s;
            transform: translateY(-5px); 
    }
    }
`
export const Image= styled.img``
export const Title = styled.h4`
    margin: 25px;
    font-weight: 700;
    letter-spacing: 0.6px;

    `

