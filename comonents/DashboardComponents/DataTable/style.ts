import styled from "styled-components";
import ArrowUpSvg from "public/icons/arrowUpsvg";
export const Container = styled.div`
>h1{text-align:center;color:${({ theme }) => theme.colors.gray1}}
table {
  border-collapse: collapse;
  width: 100%;

}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`


export const Table = styled.div`
border: 1px solid #dddddd;
border-top: none;
transition:.5s;
>h3{
  text-align:center;

}
&.details{
  border: none;
  margin-bottom: 20px;
  height:200px ;
  -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
  
 
}
`
export const PaginationWrapper = styled.div`
display:flex ;
justify-content: space-between;
align-items:center;
 
  `
export const PaginationOuterDiv = styled.div`
  width:25% ;
  `
export const SortArrow = styled.div`
display:grid;
>div{
  height:15px ;
  display:flex ;
  justify-content: center;
 >svg{
  :hover{
    fill:${({ theme }) => theme.colors.gray1}
  }
  }
}

`
export const TableData = styled.div`
:first-child{
  width: 6%;
}
  padding:5px;
  width: 15%;
  border-top: 1px solid #dddddd;
  text-align: left;
  word-break:break-all;
  &.table-header{
    :first-child{
    width: 6%;
}
    font-size:14px;
    width: 15%;
    font-weight:700;
    display:flex ;
    justify-content: space-between;
    /* border-right:    1px solid #dddddd; */
    border-left: 1px solid #dddddd;
    align-items: center;
   
    :hover{
      &.arrow{
        >div>svg{
          fill:white
        }
      }
    }
  }
  
`
export const Data = styled.div``
export const Row = styled.div`
display:flex ;
&.details-row{
  justify-content: center;
}
`

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width:40% ;
    color: #5a5c69;
    >span{
      font-size:14px;font-weight: bold;
    }
`
export const Wrapper = styled.div`   
 display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;
    `
export const SearchWrapper = styled.div`
width:60%;`
export const Label = styled.label``
export const Input = styled.input`
padding: 10px;
width:100% ;
    outline: none;
    border-radius: 5px;
     border: 1px solid lightgray;
    font-size: 14px;`
export const EntriesWrapper = styled.div`
width:40%;
display:flex;
justify-content:center;
align-items:center;
>span{
    color: #5a5c69;
  font-size:14px;font-weight: bold;
}`
export const IconWrapper = styled.div`
        display: flex;
    justify-content: center;
    align-items: center;

`
export const ActionWrapper = styled.div`
display:flex ;
gap:10px;
align-items:center;
position: relative;
`
export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    cursor: pointer;
`
export const ActionList = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 6px;
width: 100%;
position: absolute;
top: 35px;
background: white;
z-index: 999;
`
export const ActionListItems = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
padding:6px ;
width: 100%;
gap: 8px;
cursor: pointer;
    :hover{
      background-color: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.white};
      div{
        svg{
          fill:  ${({ theme }) => theme.colors.white};
        }
        border: 1px solid ${({ theme }) => theme.colors.white};
        &.delete{
     border: 1px solid ${({ theme }) => theme.colors.red};
     >svg{
      fill: red;
     }
    }
      }
    }
`
export const InnerWrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    &.delete{
     border: 1px solid ${({ theme }) => theme.colors.red};
    }
    
    `
export const Select = styled.select`
    padding: 11px 10px;
    outline: none;
    border-radius: 5px;
    margin: 10px;
    direction: ltr;
    cursor: pointer;
    border: 1px solid lightgray;
    font-size: 14px;
    transition: .5s;
    color: #5a5c69;
    :focus{
        border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
    }
    > option{
      &.actions{ 
        font-size: 15px;
        font-weight: 700;
    }
  
}  
`
export const Paginations = styled.div`
display: inline-block;
>a{
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  font-size: 22px;
  &.active{
    background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
  }
}
`