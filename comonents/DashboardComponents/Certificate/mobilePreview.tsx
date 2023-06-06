import { ImageWrapper, InputWrapper } from "./styled";
import { useRouter } from "next/router";
import QRcodeComponent from "../QRcode";
import React from "react";
import { fetchUserData } from "../hooks/api/getUsers";
import { useFetch } from "../hooks/api/certificate";
const MobilePreview = () => {
  const router = useRouter();
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { certificateData } = useFetch(fetchurl);

  //filter user by ID_number
  let user = certificateData?.filter(
    (u) => u.nationalID === router.query.idnumber
  );
  console.log;
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

  return (
    <>
      {user && (
        <ImageWrapper className="mobile">
          <img
            src={`/images/${user[0]?.gender}.jpg`}
            alt="certificate"
            width={"100%"}
          />
          <InputWrapper className="ID-number-arabic mobile">
            {toFa(user[0]?.nationalID as string)}
          </InputWrapper>
          <InputWrapper className="Certificate-number-arabic mobile">
            {toFa(user[0].certificate_number)}
          </InputWrapper>
          <InputWrapper className="Expire-Date-arabic mobile">
            {user[0]?.expiry_date}
          </InputWrapper>
          <InputWrapper className="name-arabic mobile">
            {user[0]?.name}
          </InputWrapper>
          <QRcodeComponent
            value={`https://zadip.sa/en/dashboard/certificate/mpreview/?idnumber=${user[0]?.nationalID}`}
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
