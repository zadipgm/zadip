import styled from "styled-components";

export const Wrapper = styled.div<{ color: string }>`
display:flex ;
justify-content:space-between ;
& .MuiSnackbar-root.MuiSnackbar-anchorOriginBottomLeft{
    & .MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation6.MuiSnackbarContent-root {
        background-color:${({ color }) => color} !important ;
    }
}
`