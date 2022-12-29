import styled from "styled-components";

export const OrderNowFormContainer = styled.div`
display:flex ;
justify-content:space-between ;
/* align-items: ; */
  @media (max-width: 600px) {
  display: block;
  }
`

export const Wrapper = styled.div`
    width: 60%;
      @media (max-width: 600px) {
  width:100% ;
  margin:0px ;
      }
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
`
export const Input= styled.input`
    padding: 12px;
    width: 95%;
      @media (max-width: 600px) {
  width:100% ;

      }
    border-radius: 7px;
    margin:12px 0px ;
    outline: none;
    border: 1px solid transparent;
    font-size:18px ;
    transition:.3s ;

    :focus{
        transition:.3s ;
        border:1px solid #178ce1 ;
    }
   
`

export const Textarea =styled.textarea`
    padding: 12px;
    width: 95%;
    @media (max-width: 600px) {
  width:100% ;

      }
    border-radius: 7px;
    outline: none;
    margin: 12px 0px;  
      border: 1px solid transparent;


    font-size:18px ;
    transition:.3s ;

    :focus{
        transition:.3s ;
        border:1px solid #178ce1 ;
    }

`
export const RecaptchaWrapper =styled.div`
> input {
    
width:23px ;
height:23px ;
}
> label{
    width: 30%;
    margin: 0px 6px;
}
`
export const RecaptchaImage =styled.div`
background-image: url("https://www.gstatic.com/recaptcha/api2/logo_48.png");
background-repeat: no-repeat;
    width: 100%;
    height: 51px;

`

export const RecaptchaLinksWrapper = styled.div`
width:50% ;
`
export const Recaptcha = styled.div``
export const LinksWrapper = styled.div`
>span{
    font-size:10px ;
    margin:0px 4px ;
}
`
export const Link = styled.a`
text-decoration: none;
    color: gray;
    font-size:10px ;
`
export const RecaptchaContainer = styled.div`
display:flex ;
justify-content:space-between ;
align-items: center;
`
export const Button= styled.button<{color:string}>`
    width: 150px;
    padding: 14px;
    border-radius: 6px;
    outline: none;
    color:#fff ;
    font-size:16px ;
    cursor: pointer;
    border: none;
    background:${({color})=>color};
    margin: 12px;
`
export const Span = styled.span`
font-size:23px ;
color:#fff ;
text-align:center ;
padding:20px ;
`
export const   CallUsNowWrapper =styled.div`
width:40% ;
padding:20px ;
margin:20px ;
`

export const CallButton =styled.a`
    text-decoration: none;
    padding: 10px 119px;
    background-color: #c74040;
    color: #fff;
    border-radius: 6px;
    font-size: 18px;
    margin:20px 0px  ;
    transition: .5s;
    :hover{
        opacity: .8;
    }

`
export const CallContainer = styled.div`
    height: 55%;
`
export const Call =styled.p`
font-size:24px ;
color:#737c85 ;

`