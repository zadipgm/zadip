import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
interface IProps {
  open: boolean;
  handleClose: () => void;
}
const ModalComponent: React.FC<IProps> = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/zkTYTA9cx6k?rel=0&amp;controls=0&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComponent;
