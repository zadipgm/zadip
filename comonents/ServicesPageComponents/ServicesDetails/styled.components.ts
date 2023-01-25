import styled from "styled-components";

export const ButtonsWrapper = styled.div`
margin: 20px;
    display: flex;
    flex-direction:column ;
    align-items: center;
    gap:12px;
    @media (max-width: 600px) {
  display: block;
  margin:20px ;
  >button{
    margin:15px ;

  }
}
    
`
