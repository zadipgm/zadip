import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "./style";
import CloseSvg from "public/icons/closeSvg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "80%",
  overflow: "auto",
  height: "80%",
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};
interface IProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactElement;
}
const CertificateModal = ({ open, handleClose, children }: IProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close onClick={handleClose}>
            <CloseSvg />
          </Close>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
export default CertificateModal;
