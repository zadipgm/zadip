import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
interface IProps {
  handleClose: () => void;
  open: boolean;
  message: string;
  color: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SimpleSnackbar = ({ handleClose, open, message, color }: IProps) => {
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;
  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose();
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6666000}
        onClose={handleCloseSnack}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={color === "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export default SimpleSnackbar;
