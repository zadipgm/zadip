import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Wrapper } from "./snackbar.components";
interface IProps {
  handleClose: () => void;
  open: boolean;
  message: string;
  color: string;
}
const SimpleSnackbar = ({ handleClose, open, message, color }: IProps) => {
  return (
    <Wrapper color={color}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </Wrapper>
  );
};
export default SimpleSnackbar;
