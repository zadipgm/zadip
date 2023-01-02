import * as React from "react";
import PlaySvg from "../../../public/icons/playSvg";
import ModalComponent from "../Modal";
import {
  ProductVedio,
  VedioLinkWrapper,
  VedioWrapper,
} from "./styled.components";
const VedioComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ProductVedio>
      <VedioWrapper>
        <VedioLinkWrapper onClick={handleOpen}>
          <PlaySvg width="50px" height="50px" fill="#eb0000" />
        </VedioLinkWrapper>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </VedioWrapper>
      <ModalComponent handleClose={handleClose} open={open} />
    </ProductVedio>
  );
};
export default VedioComponent;
