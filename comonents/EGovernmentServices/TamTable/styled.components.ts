import styled, { css } from "styled-components";
export const Wrapper= styled.div`
    padding: 15px;
`
export const TableWrapper =styled.div`
overflow-x:auto ;
width:100% ;
`
export const Table = styled.table`
 border-collapse: collapse;
  border-spacing: 0;
@media(max-width:600px){
   width: 900px; ;
}
@media(min-width:600px){
    width:900px ;
}
@media(min-width:1024px){
    width:100%;
}
padding:15px ;
&.second-table{
    > tr{
        :nth-child(3){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                }
           }
        }
    }
    > tr{
        :nth-child(4){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                }
           }
        }
    }
    > tr{
        :nth-child(5){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                }
           }
        }
    }
    > tr{
        :nth-child(6){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                 
                }
           }
        }
    }
    > tr{
        :nth-child(7){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                 border-top: 1px solid #ddd;
                }
           }
        }
    }
    
    > tr{
        :nth-child(8){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                }
           }
        }
    }
    > tr{
        :nth-child(9){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                }
           }
        }
    }
    > tr{
        :nth-child(10){
           > td{
               :last-child{
                border: none;
                ${({theme})=>
                theme.isLTR
                ?css`
                border-right: 1px solid #ddd;
                `
                :css`
                 border-left: 1px solid #ddd;
                `
                }
                 border-bottom: 1px solid #ddd;
                }
           }
        }
    }
   
}
`
export const TableDescription= styled.div`
width:600px ;
margin:0 auto ;
padding:15px ;
text-align:justify ;
@media(max-width:600px){
    width:100% ;
}
`
export const Tbody = styled.tbody``
export const TableRow = styled.tr`
`
export const Thead =styled.th`
font-weight:700 ;
border: 1px solid #ddd;
padding:6px;
color:${({theme})=>theme.colors.lightBlue} ;
font-size:14px ;
${({theme})=>
    theme.isLTR
    ?css`
    text-align: left;
    `
    :css`
    text-align: right;
 `
}
`
export const TableData = styled.td`
padding: 12px;
${({theme})=>
    theme.isLTR
    ?css`
    text-align: left;
    `
    :css`
    text-align: right;
    `
}
border: 1px solid #ddd;
color:#5d666e;
`
export const TableHeading= styled.h3`
color:${({theme})=>theme.colors.lightBlue} ;
text-transform:capitalize ;
`