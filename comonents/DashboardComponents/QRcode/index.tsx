import React from "react";
import ReactDOM from "react-dom";
import { QRCodeCanvas } from "qrcode.react";

const QRcodeComponent = () => {
  let value =
    "http://localhost:3000/en/dashboard/certificate/preview/?idnumber=2529283364&certificate_number=004&expire_date=2023-05-09&name=Muhammad+Zeshan+Aslam&idnumberArabic=2529283364&certificate_numberArabic=004&expire_dateArabic=2023-05-29&nameArabic=Muhammad+Zeshan+Aslam";
  return (
    <div
      style={{
        height: "150px",
        margin: "0 auto",
        maxWidth: 64,
        width: "150px",
      }}
    >
      <QRCodeCanvas value="https://zadip.sa/" />
    </div>
  );
};
export default QRcodeComponent;
