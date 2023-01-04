import styled, { css } from "styled-components";

export const Wrapper = styled.div`
.MuiSvgIcon-root{
    ${({ theme }) =>
    theme.isLTR
    ? css`
        
        `
    : css`
    transform: rotate(180deg);
    `}
    }


` 