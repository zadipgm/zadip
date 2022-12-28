import { colors } from "@mui/material";
import styled from "styled-components";

export const Title = styled.h2<{color:string}>`
    font-size:${({})} ;
    text-align: center;
    color: ${({color})=>color};
    text-transform:capitalize ;
`
export const AnimationBarContainer= styled.div`
    text-align: center;
    border-bottom: 1px solid linear-gradient(-30deg,#0576bc 30%,#38b7ae);;
    padding: 15px;
    margin: 0 auto;
`
export const SectionBar = styled.div`
    height: 5px;
    width: 150px;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    margin: 20px auto 4px auto;
    position: relative;
    border-radius: 30px;
    ::before {
        content: "";
    position: absolute;
    left: 0;
    top: -2.7px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: linear-gradient(-30deg,#0576bc 30%,#38b7ae);
    animation-duration: 2s;
    animation-direction: alternate-reverse;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: MOVE-BG;
    }
    @keyframes MOVE-BG {
    from {left: 0px;}
    to {left: 145px;}
    }

`
export const DesCription = styled.p<{color:string, fontWeight:string}>`
    max-width: 630px;
line-height: 26px;
    color:${({color})=>color};
    text-align:center ;
        letter-spacing: 1.4px;
    margin: 0 auto;
    font-weight:${({fontWeight})=>fontWeight} ;
`