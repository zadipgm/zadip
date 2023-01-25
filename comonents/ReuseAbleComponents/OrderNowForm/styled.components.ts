import styled from "styled-components";

export const OrderNowFormContainer = styled.div`

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
border-radius: 20px;
padding: 20px;

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
width: 100%;

@media (max-width: 600px) {
width:100% ;
    }
border-bottom: 1px solid #cdc1c1;
border-top:1px solid transparent ;
border-left:1px solid transparent ;
border-right:1px solid transparent ;
outline: none;
font-family: 'Cairo', sans-serif !important;

font-size:14px ;
transition:.3s ;
:focus{
    transition:.3s ;
    border-bottom:1px solid #178ce1 ;
}
`
export const Textarea =styled.textarea`
width: 100%;
@media (max-width: 600px) {
width:100% ;
    }
outline: none;
border-bottom: 1px solid #cdc1c1;
border-top:1px solid transparent ;
border-left:1px solid transparent ;
border-right:1px solid transparent ;
font-size:14px ;
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
color: #2193b0;
text-align:center ;
`
export const ContactButton = styled.button`
    color: #fff;
    padding: 16px;
    border: none;
    border-radius: 10px;
    outline: none;
    display: flex;
    font-size:20px ;
    justify-content: center;
    align-items: self-start;
    cursor: pointer;
    background-color: #0576bc;
    margin:0 auto ;
    transition: all 0.5s ease-in;
    
    :hover{
      transition: all 0.5s ease-in;
      color:#fff ;
     background-color: #24afe7
    }
    > div >svg {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        margin: 0px 7px;
    }
   &.e-services{
        width:30% ;
    }
`