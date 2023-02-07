import styled, { css } from "styled-components";

export const Wrapper = styled.div`
text-transform: capitalize;
.MuiSvgIcon-root{
    ${({ theme }) =>
    theme.isLTR
    ? css`
        
        `
    : css`
    transform: rotate(180deg);
    `}
    }

    .MuiBreadcrumbs-li{
        > a{
                font-family: 'Cairo', sans-serif !important;
        }
        > p{
                font-family: 'Cairo', sans-serif !important;
        }
    }
` 