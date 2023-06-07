import React from "react";
import { ImageWrapper, InputWrapper } from "./styled";
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
const MobilePreview = ({ data }: IProps) => {
  const router = useRouter();
  //filter user by ID_number
  let filter_certificate =
    data && data?.filter((u) => u.nationalID === router.query.idnumber);
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  console.log("mpreview", data);
  return (
    <>
      {data && (
        <ImageWrapper className="mobile">
          <img
            src={`/images/${
              filter_certificate && filter_certificate[0]?.gender === "male"
                ? "male"
                : "female"
            }.jpg`}
            alt="certificate"
            width={"100%"}
          />
          <InputWrapper className="ID-number-arabic mobile">
            {toFa(
              filter_certificate &&
                (filter_certificate[0]?.nationalID as string)
            )}
          </InputWrapper>
          <InputWrapper className="Certificate-number-arabic mobile">
            {toFa(
              filter_certificate && filter_certificate[0]?.certificate_number
            )}
          </InputWrapper>
          <InputWrapper className="Expire-Date-arabic mobile">
            {filter_certificate && filter_certificate[0]?.expiry_date}
          </InputWrapper>
          <InputWrapper className="name-arabic mobile">
            {filter_certificate && filter_certificate[0]?.name}
          </InputWrapper>
          <QRcodeComponent
            value={`https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${
              filter_certificate && filter_certificate[0]?.nationalID
            }`}
            width={"127px"}
            height={"127px"}
            classname={"mobile-qr"}
          />
        </ImageWrapper>
      )}
    </>
  );
};
export default MobilePreview;
