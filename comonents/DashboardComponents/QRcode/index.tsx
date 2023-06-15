import React from "react";
import ReactDOM from "react-dom";
import { QRCodeCanvas } from "qrcode.react";
import { Container } from "./style";

interface IProps {
  value: string;
  width?: string;
  height?: string;
  classname?: string;
}
const QRcodeComponent = ({ value, width, height, classname }: IProps) => {
  return (
    <Container className={classname}>
      <QRCodeCanvas
        value={value}
        width={"50px"}
        height={"54px"}
        style={{ width: width, height: height }}
        className={classname}
      />
    </Container>
  );
};
export default QRcodeComponent;
