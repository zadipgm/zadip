import styled from "styled-components";

export const ButtonsWrapper = styled.div`
margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
  display: block;
  margin:20px ;
  >button{
    margin:15px ;
  }
}
    
`
