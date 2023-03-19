import styled, { css } from "styled-components";

export const Container = styled.div`
background:${({ theme }) => theme.colors.themeColor} ;
width:100% ;
height:100vh ;
background-attachment: fixed;
background-image:url("/images/bgimage.jpg") ;
padding:50px 0px ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
export const UserTitle = styled.h2`
margin-top: 50px;
text-align:center ;
color:${({ theme }) => theme.colors.darkBlue} ;
`
export const ContainerUser = styled.div`
display:flex ;
justify-content:center ;
align-items: center;
margin:50px 0px;
`
export const ContentWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
background:${({ theme }) => theme.colors.themeColor} ;
width:50% ;
margin:0 auto ;
position:absolute ;
top:27% ;
padding: 20px;
left: 10%;
right:10% ;
border-radius:20px ;
&.create-account{
    width:70% ;
}
`
export const LogoWrapper = styled.div`
width:50%;
padding:15px ;
&.create-account{
    width:30% ;
}
`
export const Logo = styled.img`
width:100% ;
`
export const EditFormTitle = styled.h2`
color:${({ theme }) => theme.colors.darkBlue} ;
text-align:center ;
`
export const Form = styled.form`
width:50% ;
width:50%;
>a{
    text-decoration: none;
    color: #fff;
    transition: 0.5s ;
    :hover{
        transition:  0.5s ;
       color: #49b9ffd6;
        text-decoration: underline;
    }
}
&.create-account{
    width:100% ;
}
&.edit-account{
    width:100% ;
}
&.otp-form{
    width:100% ;
}

`
export const SvgWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
width:50px ;
height:50px ;
background-color:#e0e0e0;
>svg{

}
`
export const UserSelect = styled.select`
 color: #5c5858;
    width: 100%;
    padding: 15px 7px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: .5s;
    outline:none ;
    :focus{
        border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
    }
`
export const Wrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.create-account{
        width:46% ;
        padding:20px ;
        margin: 17px;
    }
    &.edit-account{
        width:100% ;
        padding:20px 
    }
    &.password{
    position: relative;
    }
    &.checkbox{
        > label{
            color:#fff ;
            margin:0px 4px ;
        }
    }
    
`
export const SpinnerWrapper = styled.div`
position: relative;
&.edit{
    width: 250px;
    margin: 0 auto;
}
& .MuiBox-root {
    position: absolute;
    top: 7px;
    left: 55px;
    right: 55px;
    width:70px ;
    display:block ;
}
`
export const Link = styled.a`
    color:${({ theme }) => theme.colors.darkBlue} ;
`
export const EyesWrapper = styled.div`
position: absolute;
    cursor: pointer;
    top: 15px;
    ${({ theme }) =>
        theme.isLTR
            ? css`
                right: 8px;
                `
            : css`
                left: 8px;
               `
    }
    &.MuiIcon-fontSizeLarge{
        font-size: 50px;
    }
`
export const Input = styled.input`
    color: #5c5858;
    /* ${({ theme }) =>
        theme.isLTR
            ? css`
                border-radius: 0px 20px 20px 0px;
    `
            : css`
                border-radius: 20px 0px 0px 20px;
    `
    } */
    width: 100%;
    padding: 15px 7px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: .5s;
    outline:none ;
    :focus{
        border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
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
&.update{
    display:block;
}
`
export const Hr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
`
export const Button = styled.button<{ disable: boolean }>`

&.login{
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    display: flex;
    border-radius:10px ;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 22px;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: 'Cairo', sans-serif !important;
   cursor: ${({ disable }) => disable ? "no-drop" : "pointer"};
   
   

}
&.login-true{
    filter: blur(1px);
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
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
}
`