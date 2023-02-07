import styled from "styled-components";

export const SocialIconsWrapper =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 61px;
    &.about-page{
    gap:10px;
    justify-content:center ;
    }
> svg{
&.facebook{
  
  margin: 20px 5px;

background: #3b5998;
border-radius: 6px;
cursor: pointer;
transition: .5s;
width: 59px;
    height: 52px;
    padding: 12px;


:hover{
  opacity: .8;
}
}
}
& .twitter{

  margin: 20px 5px;
  width: 59px;
    height: 52px;
    padding: 12px;
background: #55acee;
cursor: pointer;
border-radius: 6px;
transition: .5s;
:hover{
  opacity: .8;
}

}
& .linkdein{

  margin: 20px 5px;
  width: 59px;
    height: 52px;
    padding: 12px;
background:#0976b4;
cursor: pointer;
border-radius: 6px;
transition: .5s;
:hover{
  opacity: .8;
}

}


`