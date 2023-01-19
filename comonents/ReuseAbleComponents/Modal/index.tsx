import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Wrapper } from "./styled.components";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "27%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  outline: "none",
  boxShadow: 24,
};
interface IProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactElement;
  classname?: string;
}
const ModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  children,
  classname,
}) => {
  return (
    <Wrapper className={classname}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </Wrapper>
  );
};
export default ModalComponent;
