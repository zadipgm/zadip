import { ImageWrapper, InputWrapper } from "./styled";
import { useRouter } from "next/router";
import QRcodeComponent from "../QRcode";

const MobilePreview = () => {
  const router = useRouter();
  const toFa = (n) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  return (
    <>
      <ImageWrapper>
        <img src="/images/certificate.jpeg" alt="certificate" width={"100%"} />
        <InputWrapper className="ID-number mobile">
          {router.query.idnumber}
        </InputWrapper>
        <InputWrapper className="Certificate-number mobile">
          {router.query.certificate_number}
        </InputWrapper>
        <InputWrapper className="Expire-Date mobile">
          {router.query.expire_date}
        </InputWrapper>
        <InputWrapper className="name mobile">{router.query.name}</InputWrapper>
        <InputWrapper className="ID-number-arabic mobile">
          {toFa(
            (router.query.idnumber as string)
              .split("")
              .reverse()
              .join("") as string
          )}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic mobile">
          {toFa(
            (router.query.certificate_numberArabic as string)
              .split("")
              .reverse()
              .join("") as string
          )}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic mobile">
          {
            toFa(router.query.expire_dateArabic as string)
              .split("")
              .reverse()
              .join("") as string
          }
        </InputWrapper>
        <InputWrapper className="name-arabic mobile">
          {router.query.nameArabic}
        </InputWrapper>
        <QRcodeComponent
          value={""}
          width={"35px"}
          height={"35px"}
          classname={"mobile-qr"}
        />
      </ImageWrapper>
    </>
  );
};
export default MobilePreview;
