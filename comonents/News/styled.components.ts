import styled from "styled-components";

export const NewsContainer = styled.div`
margin:100px 0px ;
width:1170px ;
padding:15px ;
margin:0 auto ;
@media(max-width:600px){
       width:100% ;
    }
`
export const NewsHeading =styled.h2`
color: #737c85;
`
export const Date= styled.div`
width:20% ;
@media(max-width:600px){
       width:100% ;
    }
padding:15px ;
color:#fff ;
background-color:#0d4a76 ;
margin-top:20px ;
`
export const NewsDescription= styled.div`
text-align:justify ;
word-break:break-all ;
`
export const NewsWrapper= styled.div`
    display: flex;
    justify-content: center;
    @media(max-width:600px){
        display:block ;
    }
`
export const Recentnews= styled.div`
width:70% ;
@media(max-width:600px){
       width:100% ;
    }
`
export const UpdatedNews= styled.div``
export const UpdatedNewsDescription= styled.span``
export const UpdatedNewsList= styled.ul`
list-style-type:none ;
width:30% ;
padding:0 ;
@media(max-width:600px){
       width:100% ;
    }
`
export const ListItems= styled.li`
margin:10px 0px ;
cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    padding:12px ;
    transition:.5s ;

    border-bottom:1px solid lightgray ;
:hover{
    transition:.5s ;
    opacity:.5 ;
}

`
export const UpdatedNewsImage= styled.img``  
export const Heading =styled.h3`
color:#737c85;
`

export const IconHeading =styled.h4`
    font-style: italic;
    font-weight: 700;
    color: #34495e;
    margin:50px 0px 0px 0px ;
`