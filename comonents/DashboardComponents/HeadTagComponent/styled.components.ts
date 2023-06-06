import styled from "styled-components";
export const Container = styled.div``
export const Title = styled.h1`
font-size:28px;
text-align:center;
margin:30px 0px ;
color:${({ theme }) => theme.colors.lightBlue} ;
`
export const Form = styled.form` `
export const FormContainer = styled.div`
 background-color:#1212121f;
 padding: 20px;
    border-radius:20px ;
`
export const FormWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
`
export const Wrapper = styled.div`
width:50% ;
padding:12px ;
&.all-pages{
    width: 100%;
}
&.page_selection{
    width:100% ;
    margin:0 auto ;
}
&.check{
    display: flex;
    justify-content:flex-start ;
    align-items:center ;
    width:100% ;
}
`
export const Label = styled.label`
font-size:16px ;
color:${({ theme }) => theme.colors.darkBlue};
margin:6px ;
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
&.checkbox{
    width:auto ;
}
`
export const Select = styled.select`
width: 100%;
font-size: 16px;
padding: 10px 8px;
outline: none;
color:${({ theme }) => theme.colors.black1};
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

`