import styled from "styled-components"

export const FooterContainer= styled.div`
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    padding: 12px;
`
export const FooterWrapper = styled.div`
@media (max-width: 600px) {
width:100% ;
display:block ;
}

width:1170px ;
margin: 0 auto;
`

export const FooterRow = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
@media (max-width: 600px) {
width:100% ;
display:block ;
}
width:1170px ;
margin:0 auto ;
`
export const FooterUL = styled.ul`	
list-style: none;
padding: 0;
margin: 0;

`
export const FooterCol = styled.div`
width: 50%;
@media (max-width: 600px) {
width:100% ;
display:block ;
padding:0 ;
}
width:1170px ;
margin:0 auto;
padding: 0 15px;
`
export const FooterHeading =  styled.h4`   
font-size: 16px;
color: #fff !important;
font-weight: 700;
`

export const  FooterLI = styled.li`
font-style: normal;
display: flex;
justify-content: flex-start;
align-items: center;
>a {
text-align: center;
text-decoration: none;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
padding:6px 0px  ;
transition:.5s ;
> svg {
    width:20px ;
        height:20px ;
        margin: 0px 6px ;
}
:hover {
    color: #6fc5e8;
transition:.5s ;

}
}

`

export const FooterSocialLink =  styled.div`
display: flex;
height: 40px;
width: 40px;
text-align: center;
line-height: 40px;
border-radius: 50%;
color: #ffffff;
transition: all 0.5s ease;
> a {
    svg {
        width:40px ;
        height:40px ;
        margin: 0px 6px ;
        fill: #fff
    }
    :hover {
        svg{
            fill:#6fc5e8;
        }
  
}
}
`


export const FooterCopyRights = styled.div`
border-top: 1px solid rgba(0, 0, 0, .15);
margin:0px 66px;
padding:30px;
color:#ffff;
display:flex ;
justify-content:space-between ;
align-items:center ;
@media (max-width: 600px) {
     width:100% ;
     margin:0px;
padding:0px;
display:block ;
 }
> a {
padding:0px 8px ;
color:#ffff ;
text-decoration:none ;
:hover{
    color: #6fc5e8; 
}
}
`