import styled from "styled-components";

export const OrderNowFormContainer = styled.div`
width:90% ;
margin: 0 auto;
@media (max-width: 600px) {
display: block;
}
`
export const Wrapper = styled.div`
&.contact-us{
width:100% ;
}
@media (max-width: 600px) {
width:100% ;
margin:0px ;
    }
border-radius: 10px;
padding: 20px;
margin: 20px;
`
export const InputWarapper = styled.div`
margin-bottom: 12px;
:focus-within label {
color:#178ce1;
transition: .5s
}
`
export const Label = styled.label`
font-size:22px ;
transition: .5s;
color:#2193b0 ;
`
export const Input= styled.input`
width: 95%;

@media (max-width: 600px) {
width:100% ;
    }
border-bottom: 1px solid gray;
border-top:1px solid transparent ;
border-left:1px solid transparent ;
border-right:1px solid transparent ;
outline: none;
font-family: 'Cairo', sans-serif !important;

font-size:16px ;
transition:.3s ;
:focus{
    transition:.3s ;
    border-bottom:1px solid #178ce1 ;
}
`
export const Textarea =styled.textarea`
width: 95%;
@media (max-width: 600px) {
width:100% ;
    }
outline: none;
border-bottom: 1px solid gray;
border-top:1px solid transparent ;
border-left:1px solid transparent ;
border-right:1px solid transparent ;
font-size:16px ;
font-family: 'Cairo', sans-serif !important;
transition:.3s ;
:focus{
    transition:.3s ;
    border-bottom:1px solid #178ce1 ;
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
`
export const FormHeading = styled.h3`
font-size:23px ;
text-align:center ;
padding-top: 30px;
color:#2193b0 ;
margin:0;
`
export const   CallUsNowWrapper =styled.div`
width:40% ;
@media(max-width:600px){
width:100% ;
}
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