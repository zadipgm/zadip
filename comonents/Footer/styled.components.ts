import styled from "styled-components"
export const FooterParent = styled.div`
`
export const FooterContanerThreeWrapper = styled.div`
@media (max-width: 600px) {
width:100% ;
display:block ;
}
@media (min-width: 1200px) {
        width:1170px ;
        }
margin: 0 auto;
`
export const FooterContanerThreeLink = styled.a`
text-align: center;
text-decoration: none;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
padding:6px 0px  ;
> svg {
    width: 3em;
height: 1.4em;
}
:hover {
    color: #6fc5e8;
}
`
export const FooterContanerThreeRow = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
@media (max-width: 600px) {
width:100% ;
display:block ;
}
@media (min-width: 1200px) {
        width:1170px ;
        }
`
export const FooterContanerThreeUL = styled.ul`	
list-style: none;
padding: 0;
margin: 0;

`
export const FooterContanerThree= styled.div`
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    padding: 12px;
`
export const FooterContanerThreeCol = styled.div`
width: 33%;
:last-child{
    width:40% ;
}
@media (max-width: 600px) {
width:100% ;
display:block ;
}
@media (min-width: 1200px) {
width:1170px ;
}
padding: 0 15px;
`
export const FooterContanerThreeHeading =  styled.h4`   
font-size: 16px;
color: #fff !important;
font-weight: 700;
`

export const  FooterContanerThreeLI = styled.li`
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
> svg {
    width:20px ;
        height:20px ;
        margin: 0px 6px ;
}
:hover {
    color: #6fc5e8;
}
}

`

export const FooterContanerThreeSocialLink =  styled.div`
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
margin-top:30px ;
padding:30px;
color:#ffff;
display:flex ;
justify-content:center ;
align-items:center ;
> a {
padding:0px 8px ;
color:#ffff ;
text-decoration:none ;
:hover{
    color: #6fc5e8; 
}
}
`