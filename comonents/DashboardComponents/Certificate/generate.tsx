import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Goback,
  ImageWrapper,
  InputWrapper,
  PreviewCertificate,
  Title,
} from "./styled";
import QRcodeComponent from "../QRcode";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { arabicDate } from "../hooks/certificateDate/iindex";
import { findMaxNumber, useFetch } from "../hooks/api/certificate";
import axios from "axios";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";

interface IUser {
  name_ar?: string;
  nationalID?: string;
  gender?: string;
}
interface IProps {
  userData?: IUser[];
}

const GenerateCertificate = ({ userData }: IProps) => {
  const [open, setOpen] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");

  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { certificateData } = useFetch(fetchurl);

  const router = useRouter();
  const { device, isLTR } = useTheme();
  const toFa = (n) => n?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  let page = device === "desktop" ? "preview" : "mpreview";
  let url = new URL(
    `https://zadip.sa/en//dashboard/certificate/mpreview/?idnumber=${router.query.idnumber}`
  );
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //filter user by ID_number
  let user = userData?.filter((u) => u.nationalID === router.query.idnumber);
  console.log(user);
  const Create_Certificate = async () => {
    let body = {
      name: user[0]?.name_ar as string,
      certificate_number: findMaxNumber(certificateData),
      nationalID: user[0]?.nationalID as string,
      gender: user[0]?.gender,
      expiry_date: arabicDate,
    };
    try {
      await axios.post(`${APP_URL}/create_certificate`, body);
      handleClick();
      setMessage("Certificate Generated successfully");
      setIsComplete(true);
      setColor("#0d880d");
      setTimeout(function () {
        setIsComplete(false);
        setColor("#0d880d");
        router.push(
          `/dashboard/certificate/${page}/?idnumber=${user[0]?.nationalID}`
        );
      }, 1000);
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 3000);
        setColor("#ec0e0e");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
              ? error.response?.data?.message_en
              : error.message
            : error.response?.data?.message_ar
            ? error.response?.data?.message_ar
            : error.message
        );
      }
      console.log(error);
    }
  };
  return (
    <div>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <Goback onClick={() => router.back()} className="back">
        Go back to list
      </Goback>
      <Title>Certificate Preview</Title>
      <ImageWrapper>
        <img
          src={`/images/${user[0]?.gender === "male" ? "male" : "female"}.jpg`}
          alt="certificate"
        />
        <InputWrapper className="ID-number-arabic">
          {toFa(user[0]?.nationalID)}
        </InputWrapper>
        <InputWrapper className="Certificate-number-arabic">
          {toFa(findMaxNumber(certificateData))}
        </InputWrapper>
        <InputWrapper className="Expire-Date-arabic">
          {arabicDate.substring(0, 12) as string}
        </InputWrapper>
        <InputWrapper className="name-arabic">{user[0]?.name_ar}</InputWrapper>
        <QRcodeComponent
          value={url as unknown as string}
          width="61px"
          height="61px"
        />
      </ImageWrapper>

      <PreviewCertificate onClick={Create_Certificate}>
        Generate Certificate
      </PreviewCertificate>
    </div>
  );
};
export default GenerateCertificate;
