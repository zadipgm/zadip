import styled from "styled-components";

export const LearnMore = styled.div<{color:string}>`
position: absolute;
    bottom: 17px;
a{
    color: ${({color})=>color};
    font-weight: 500;
    display: inline-block;
    margin-top: 5px;
    position: relative;
    transition: .5s;
    text-decoration: none;
    font-weight: 700;
    svg {
        position: absolute;
        left: 0;
        top: 5px;
        transition: .5s;
    }
    :hover{
        color: #0d4a76;
        padding-left: 0;
        padding-right: 5px;
    svg {
        left: 100%;
        color: #fff;
        }
    }
}
`