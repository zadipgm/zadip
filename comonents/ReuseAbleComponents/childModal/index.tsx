import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "styled-components";
import { ThanksMessage, ThanksTitle } from "./styled.components";

const style = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
interface Props {
  open: boolean;
  handleClose: () => void;
  message: string;
  color: string;
  name: string;
}
const ChildModal = ({ open, handleClose, name, message }: Props) => {
  const { isLTR } = useTheme();
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "30%" }}>
          <ThanksTitle>
            {isLTR ? "Dear" : "عزيزي"} {name},
          </ThanksTitle>
          <ThanksMessage id="child-modal-title">{message}</ThanksMessage>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
export default ChildModal;
