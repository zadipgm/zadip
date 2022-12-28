import styled from "styled-components";

export const AboutUsContainer = styled.div`

@media (min-width: 1200px){
width:1170px ;
margin:0 auto ;
}

`

export const AboutusWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:30px 0px ;
`
export const AboutusDescription = styled.div`
padding: 15px;
color:#737c85; ;
`
export const AboutusImage = styled.img``
export const AboutusImageWrapper =styled.div`  
padding: 15px;
`
export const BreadCrumbWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items: center;
margin-top:100px ;
`
export const AboutHeading = styled.h2`
color: #737c85;
`

export const OurHistory = styled.div`
transition: .5s;
border: 1px solid #dee2e6;
cursor: pointer;
border-radius:10px ;
margin:15px ;
padding:15px ;
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
:hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color: #fff;
transition: .5s;
transform: translateY(-10px);
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
p{
color:#fff ;
}
}
`
export const AboutComapny = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:30px 0px ;

`

export const Title = styled.h4``
export const Text = styled.p`

color:#737c85;
`



export const OurTeam =styled.div`
margin: 30px 0px;
`
export const TeamCards =styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
margin: 30px 0px;

`
export const TeamCradsWrapper =styled.div`
text-align:center ;
transition: .5s;
    box-shadow: 0px 3px 24px rgb(0 0 0 / 20%);
margin: 15px;
padding: 15px;
border-radius: 20px;
cursor: pointer;
transition: .5s;
>img{
    border-radius:100% ;
    border: 2px solid #fff;
}
:hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color: #fff;
transition: .5s;
transform: translateY(-10px);
    box-shadow: 0px 3px 24px rgb(0 0 0 / 20%);
svg{
    fill:#fff
}
img{
    border: 2px solid #23bdb8;
}
&.info{
    border-radius: 1px;
}
p{
    color:#fff ;
}
}
`
export const TeamInfo =styled.div`
background: linear-gradient(135deg,#23bdb8,#43e794);

border-radius: 75px;
margin: 25px 10px;
transition: .5s;
`
export const InfoTitle =styled.h4`
font-size: 18px;
margin:0 ;
color: #fff;
`
export const InfoTitleSkill =styled.span`
color: #fff;
font-size: 13px;
`
export const SocialIcons =styled.div`
svg{
margin:6px ;
}
`
export const MemberDescription =styled.p`
margin-top: 15px;
margin-bottom: 0;
color: #737c85;;
line-height: 1.8;
`
export const OurClients = styled.div`
display:flex ;
flex-wrap:wrap ;
justify-content:center ;
align-items:center ;
margin:30px 0px  ;
`
export const ClientWrapper= styled.div`
text-align: center;
-webkit-transition: .5s;
transition: .5s;
border: 1px solid #dee2e6;
    box-shadow: 0px 3px 24px rgb(0 0 0 / 20%);
margin: 15px;
padding: 15px;
border-radius: 20px;
cursor: pointer;
-webkit-transition: .5s;
transition: .5s;
:hover{
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
color: #fff;
transition: .5s;
transform: translateY(-10px);
box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
h5{
color:#fff ;
}
span{
color: #fff;
}
img{
border-radius:100% ;
}
}
`
export const ClientTitle= styled.h5`
margin: 0;
color: #737c85;`
export const ClientSector= styled.span`
color: #737c85;;
`