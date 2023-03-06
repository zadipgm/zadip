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
export const SpinnerWrapper = styled.div`
position: relative;
& .MuiBox-root {
    position: absolute;
    top: 7px;
    left: 48%;
    right: 48%;
    width:70px ;
    display:block ;
}
`
export const InputWarapper = styled.div`
margin-bottom: 12px;
:focus-within label {
color:#178ce1;
transition: .5s
}
`
export const Select = styled.select`
width: 100%;
    border-bottom: 1px solid #cdc1c1;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    outline: none;
    font-family: 'Cairo',sans-serif !important;
    font-size: 14px;
    transition: .3s;
`
export const Label = styled.label`
font-size:22px ;
transition: .5s;
color:${({ theme }) => theme.colors.lightBlue} ;
> span{
    color: red;
}
& .green{
    color:green ;
}
`
export const Input = styled.input`

 :out-of-range{
    border:1px solid red;
 }
 :in-range{
    border-bottom: 1px solid #cdc1c1;
border-top:1px solid transparent ;
border-left:1px solid transparent ;
border-right:1px solid transparent ;
 }
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
&.login{
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    border-radius:10px ;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    margin: 22px auto;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: 'Cairo', sans-serif !important;
    cursor: pointer;
    :hover{
        transition: all 0.5s ease-in 0s;
        background-color: #49b9ffd6;
    }

}
&.login-true{
    filter: blur(1px);
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    border-radius:10px ;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: #74a4cf;
    margin-top: 22px;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: 'Cairo', sans-serif !important;
    cursor: pointer;
}
`
export const Textarea = styled.textarea`
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
export const RecaptchaWrapper = styled.div`
> input { 
width:23px ;
height:23px ;
}
> label{
width: 30%;
margin: 0px 6px;
}
`
export const Button = styled.input<{ color: string }>`
width: 150px;
padding: 15px;
border-radius: 6px;
outline: none;
color:${({ theme }) => theme.colors.white} ;
font-size:16px ;
cursor: pointer;
border: none;
background:${({ theme }) => theme.colors.themeColor} ;
`
export const FormHeadingWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
`
export const IconWrapper = styled.div`
cursor: pointer;
`
export const FormHeading = styled.h3`
color: ${({ theme }) => theme.colors.lightBlue};
text-align:center ;
`
export const ContactButton = styled.button`
      color: ${({ theme }) => theme.colors.white};
    padding: 15px;
    border: none;
    border-radius: 10px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: self-start;
    transition: all 0.5s ease-in;
    font-size:16px;
    margin:20px auto;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    background-color:${({ theme }) => theme.colors.lightBlue};
    width:250px ;
    font-family: 'Cairo', sans-serif !important;
    
    :hover{
      transition: all 0.5s ease-in;
      color:${({ theme }) => theme.colors.white} ;
     background-color: ${({ theme }) => theme.colors.darkBlue};
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