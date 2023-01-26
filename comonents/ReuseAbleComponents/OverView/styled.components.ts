import styled from "styled-components";
export const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  @media(max-width:600px){
    
       display:block ;
    }

`
export const Description = styled.div`
    width: 50%;
    text-align: justify;
    padding: 25px;
    color:#5d666e;
    > h2 {
        color: #0576bc;
    }
    @media(max-width:600px){
    
   width:100% ;
   padding:15px ;
 }
`
export const Image = styled.img`
 width: 50%;
 height:400px ;
    text-align: justify;
    padding: 15px;
    border-radius: 31px;
    @media(max-width:600px){
    
    width:100% ;
    padding:15px ;
  }
`