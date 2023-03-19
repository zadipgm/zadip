import styled from "styled-components";
export const Container = styled.div``
export const Title = styled.h1`
font-size:28px;
text-align:center;
margin:30px 0px ;
color:${({ theme }) => theme.colors.lightBlue} ;
`
export const Form = styled.form`
     background-color:#1212121f;
    padding: 20px;
    margin:0px 50px ;
    border-radius:20px ;
`
export const FormWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
`
export const Wrapper = styled.div`
width:70% ;
margin:12px ;
`
export const Label = styled.label`
font-size:16px ;
color:gray ;
margin:12px ;
font-family: 'Cairo', sans-serif !important;

`
export const Input = styled.input`
width:100% ;
font-size:16px ;
padding:10px 8px ;
outline:none ;
border-radius:6px;
border:1px solid gray ;
font-family: 'Cairo', sans-serif !important;
:focus{
border: 1px solid ${({ theme }) => theme.colors.lightBlue} ;
}
`
export const Select = styled.select`
width: 100%;
font-size: 16px;
padding: 10px 8px;
outline: none;
color:gray ;
border-radius: 6px;
border: 1px solid gray;
font-family: 'Cairo',sans-serif !important;
cursor: pointer;
`
export const TextArea = styled.textarea`
width:100% ;
font-size:16px ;
padding:10px 8px ;
outline:none ;
border-radius:6px;
color:gray ;
border:1px solid gray ;
font-family: 'Cairo', sans-serif !important;
:focus{
border: 1px solid ${({ theme }) => theme.colors.lightBlue} ;
}
`
export const Submit = styled.input`
width: 20%;
    padding: 10px;
    font-size:16px ;
    border: 1px solid gray;
    border-radius: 6px;
    margin: 0 auto;
    display:flex ;
    justify-content:center;
    align-items:center ;
    color: gray;
    font-family: 'Cairo', sans-serif !important;
    cursor: pointer;
    :focus{
border: 1px solid ${({ theme }) => theme.colors.lightBlue} ;
}
`