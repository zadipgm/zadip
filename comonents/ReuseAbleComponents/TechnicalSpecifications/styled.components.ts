 import styled from "styled-components";
export const SpecsContainerBGImage = styled.div`
background-repeat: repeat;
    background-attachment: fixed;
    padding: 100px 6px;


`
// export const Wrapper = styled.div``
// export const TableContainer = styled.div``
 export const Title = styled.h1`
    color: #0196e3;
    font-size:18px ;
 `
// export const Table = styled.table`
// border-collapse: collapse;
// width:100% ;
// display:flex ;
//  justify-content:center ;
//   align-items:center ;
// `
// export const TableBody = styled.tbody``
// export const StyledTableRow = styled.tr`
//  color: #737c85;
// :nth-child(odd) {
//     background-color:#34495e ;
//     color:#fff ;
// }
// `
// export const StyledTableHead = styled.th`
//     width: 20%;
//     padding: 20px;
//   font-size: 16px;
//   font-weight:500 ;

// `
// export const StyledTableData = styled.td`
//    font-size: 16px;
//   font-weight:500 ;
// `
export const TechmicalSpecsMainPage = styled.div`
`
export const SpecsContainer = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-wrap:wrap ;
`
export const SpecsWrapper = styled.div`
overflow: visible;
    
    display:block ;
    text-align:center ;
    padding:1rem;
    border-radius: 1rem;
    transition: .5s ease-in;
    margin: 1rem;
    width: 40%;
        background-color: rgba(13,74,118,0.04);
        box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
        &.services-detail{
          display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
      width:40px ;
      height:40px ;
    }
    :hover{
      transition: all 0.5s ease-in;
      color:#fff ;
      background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
      svg{
        fill:#fff;
        
      }
      h2{
        color:#fff
      }
    }
        }
`
export const SpecsTitle = styled.h2`
    min-width: fit-content;
    color: #0196e3;
    :hover{
      color:#fff ;
    }
`
export const SpecsDescription = styled.div`
padding:0px 12px ;
`

export const GoBackButton =  styled.button`
    width: 180px;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    padding: 14px;
    border-radius: 3rem;
    box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
    transition: all 0.3s;
    border: none;
    background: transparent;
    font-size: 18px;
    color: #0196e3;
    transition:.5s ;
    cursor: pointer;
    svg {
      margin:0px 6px ;
    }
    :hover{
      transition:.5s ;
      transform: translateY(-5px);
      box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff;
      background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
      color:#fff ;
    }
`
export const TitleWrapper = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
`
export const SpecsMainSection = styled.div`

@media (min-width: 1200px) {
width: 1170px;
margin:0 auto ;
}
`