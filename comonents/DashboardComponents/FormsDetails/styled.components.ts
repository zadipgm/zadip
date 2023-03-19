import styled from "styled-components";
export const Container = styled.div`
`
export const Title = styled.h1`
font-size:28px;
color:${({ theme }) => theme.colors.lightBlue} ;
`
export const Table = styled.table`
 text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
`
export const IconsWrapper = styled.div`
display:inline-block ;
margin:8px ;
cursor: pointer;
`
export const Button = styled.button`

background-color:${({ theme }) => theme.colors.lightBlue};
    text-align: center;
    padding: 15px;
    width: 250px;
    margin: 12px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
`
export const TableBody = styled.tbody``
export const TableRow = styled.tr`
:nth-child(even){
    background-color: #f2f2f2;
}
:hover{
    background:${({ theme }) => theme.colors.headerLightColor};
}
`
export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
export const TableHead = styled.th`
 padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightBlue};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 8px;
`