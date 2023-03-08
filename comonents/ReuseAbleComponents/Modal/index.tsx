import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Wrapper } from "./styled.components";
import { useTheme } from "styled-components";

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactElement;
  classname?: string;
  bgColor?: string;
}
const ModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  children,
  classname,
  bgColor,
}) => {
  const { device } = useTheme();
  const mobilestyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    height: "100%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    background: bgColor,
    border: "none",
    outline: "none",
    boxShadow: 24,
    zIndex: "9999",
    overflow: "scroll",
    transition: ".5s",
  };
  const style = {
    position: "absolute" as "absolute",
    top: "42%",
    left: "49.43%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    background: bgColor,
    border: "none",
    borderRadius: "20px",
    outline: "none",
    boxShadow: 24,
  };
  const myCloseModal = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    handleClose();
  };
  return (
    <Wrapper className={classname}>
      <Modal
        open={open}
        onClose={(e) => myCloseModal(e, "backdropClick")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classname}
      >
        <Box sx={device === "desktop" ? style : mobilestyle}>{children}</Box>
      </Modal>
    </Wrapper>
  );
};
export default ModalComponent;
