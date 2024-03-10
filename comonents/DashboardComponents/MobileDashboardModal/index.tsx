import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "#044783",
  boxShadow: 24,
  height: "100%",
  p: 4,
};
interface Iprops {
  open: boolean;
  handleClose: () => void;
  children: React.ReactElement;
}
const MobileDashboardModal = ({ open, handleClose, children }: Iprops) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
export default MobileDashboardModal;
