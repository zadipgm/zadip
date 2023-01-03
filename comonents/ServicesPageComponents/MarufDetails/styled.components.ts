import styled from "styled-components";

export const Container = styled.div`
/* margin:100px 0px; */
`
export const MuarefVedioWrapper = styled.div`
width:70% ;
`
export const MuarefSectionContainer =styled.div`
display:flex ;
justify-content:center ;
align-items: center;
@media(max-width:600px){
    display:block ;
}
`
export const Description =styled.div`
color:#737c85 ;
font-size:18px ;
margin: 20px 0px;
width:50% ;
@media(max-width:600px){
    width:100% ;
    padding:15px ;
}
text-align:justify ;
word-break:break-all ;
>a{
    text-decoration:none ;
    color: #6fc5e8;
transition:.5s ;
    :hover{
        color:darkgray ;
transition:.5s ;
    }
}

`
export const   MuarefCompatibleWrapper = styled.div`
width:100% ;
    display: flex;
    justify-content: center;
    align-items: center;
        margin: 40px 0px;
        @media(max-width:600px){
    display:block ;
}
`
export const   MuarefBGImage = styled.div`
background-image: url("https://zadip.com/images/components/promo-primary.png");
background-color: #34495e;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width:80% ;
    @media(max-width:600px){
        width:100% ;
}
    padding: 20px;
    text-align: center;
   
    &.play-store{
        /* height:200px ; */
    }
`
export const DownloadAppWrapper =styled.div``
export const Compatible =styled.div`
width:50% ;
`
export const   Text = styled.p`
    color: #2193b0;
    font-size:24px;
margin: 0;
    
    

`
export const   Image = styled.img``
export const   MuarefDescription = styled.p`   
 font-size: 18px;
line-height: 22px;
margin: 0 auto;
    width: 280px;
color:#fff ;
`
export const Link = styled.a`
    padding: 10px 30px;
    text-decoration: none;
    color: #fff;
   text-align:center ;
    border-radius: 6px;
    transition: .5s;
    @media(max-width:600px){
        display: block;
    }
    :hover{
        opacity:.8 ;
    transition: .5s;

    }
`
export const ValuedWrapper = styled.div`
display:flex ;
justify-content:center ;
margin:50px 0px ;
`
export const ValuedDistributors = styled.div`
    width: 70%;
    text-align: center;
    padding: 20px;
    @media(max-width:600px){
       
        width:100% ;
      
    }

`
export const Heading = styled.div`
font-size:24px ;
 color: #737c85;
 margin: 20px;
`
export const Wrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
gap:52px;
 @media(max-width:600px){
        display: block;
        width:100% ;
    }
`
export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(13,74,118,0.04);
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    padding: 15px;
    @media(max-width:600px){
        display: block;
        width:100% ;
        margin: 20px 0px;
    }
    width: 313px;
    height: 200px;

`

  export const TechImage = styled.img``
  export const ValueLink = styled.a`
      text-decoration: none;
    color: #6fc5e8;
    margin: 0px 12px;
    transition: .5s;
    :hover{
        opacity:.5 ;
    transition: .5s;
    }
  `
  export const HRGateImage = styled.img``
  export const HRGateLink = styled.a``

  