import React from "react";
import { ImageWrapper, InputWrapper, PreviewCertificate } from "./styled";
import { useRouter } from "next/router";
import QRcodeComponent from "../QRcode";

interface IData {
  name?: string;
  gender?: string;
  nationalID?: string;
  certificate_number?: string;
  expiry_date?: string;
}
interface IProps {
  data?: IData[];
}
// const MobilePreview = ({ data }: IProps) => {
//   const router = useRouter();
//   //filter user by ID_number
//   let filter_certificate = data?.filter(
//     (u) => u.nationalID.trim() === router.query.idnumber
//   );
//   const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
//   console.log("mpreview", data, filter_certificate);
//   return (
//     <>
//       <ImageWrapper className="mobile">
//         <img
//           src={`/images/${
//             filter_certificate[0]?.gender === "male" ? "male" : "female"
//           }.jpg`}
//           alt="certificate"
//           width={"100%"}
//         />
//         <InputWrapper className="ID-number-arabic mobile">
//           {toFa(filter_certificate[0]?.nationalID as string)}
//         </InputWrapper>
//         <InputWrapper className="Certificate-number-arabic mobile">
//           {toFa(filter_certificate[0]?.certificate_number)}
//         </InputWrapper>
//         <InputWrapper className="Expire-Date-arabic mobile">
//           {filter_certificate[0]?.expiry_date}
//         </InputWrapper>
//         <InputWrapper className="name-arabic mobile">
//           {filter_certificate[0]?.name}
//         </InputWrapper>
//         <QRcodeComponent
//           value={`https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${filter_certificate[0]?.nationalID}`}
//           width={"25px"}
//           height={"25px"}
//           classname={"mobile-qr"}
//         />
//       </ImageWrapper>
//     </>
//   );
// };
// export default MobilePreview;

import { createRef } from "react";
import * as htmlToImage from "html-to-image";

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

const MobilePreview = ({ data }: IProps) => {
  const router = useRouter();
  //filter user by ID_number
  let filter_certificate = data?.filter(
    (u) => u.nationalID.trim() === router.query.idnumber
  );
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  const ref = React.createRef<HTMLDivElement>();

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (
    image,
    { name = `${filter_certificate[0]?.name}`, extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div className="App">
      <header className="App-header">
        <div ref={ref}>
          <ImageWrapper className="mobile">
            <img
              src={`/images/${
                filter_certificate[0]?.gender === "male" ? "male" : "female"
              }.jpg`}
              alt="certificate"
              width={"100%"}
            />
            <InputWrapper className="ID-number-arabic mobile">
              {toFa(filter_certificate[0]?.nationalID as string)}
            </InputWrapper>
            <InputWrapper className="Certificate-number-arabic mobile">
              {toFa(filter_certificate[0]?.certificate_number)}
            </InputWrapper>
            <InputWrapper className="Expire-Date-arabic mobile">
              {filter_certificate[0]?.expiry_date}
            </InputWrapper>
            <InputWrapper className="name-arabic mobile">
              {filter_certificate[0]?.name}
            </InputWrapper>
            <QRcodeComponent
              value={`https:zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${filter_certificate[0]?.nationalID}`}
              width={"25px"}
              height={"25px"}
              classname={"mobile-qr mobile-style"}
            />
          </ImageWrapper>
        </div>
        <PreviewCertificate onClick={downloadScreenshot} className="mobile">
          Download Certificate
        </PreviewCertificate>
      </header>
    </div>
  );
};

export default MobilePreview;
