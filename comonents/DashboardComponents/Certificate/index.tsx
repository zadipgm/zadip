import * as React from "react";
import { Container, PreviewCertificate } from "./styled";
import DataTable from "../DataTable";
import CertificateModal from "../ReuseableComponents/Modal";
import { fetchUserData } from "../hooks/api/getUsers";
import { useFetch } from "../hooks/api/certificate";
import axios from "axios";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
import { useTheme } from "styled-components";
interface IUser {
  name_ar?: string;
  name_en?: string;
  email?: string;
  nationalID?: string;
  gender?: string;
  role?: string;
  phoneNUmber?: string;
}
interface IProps {
  userData?: IUser[];
}
const Certificate = ({ userData }: IProps) => {
  const [open, setOpen] = React.useState(false);
  const [openToast, setOpenToast] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const { isLTR } = useTheme();
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { certificateData } = useFetch(fetchurl);
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClick = () => {
    setOpenToast(true);
  };

  const handleClosetoast = () => {
    setOpenToast(false);
  };
  let filter_user = userData.filter((user) => user.role !== "admin");
  const [certificate, setCertificate] = React.useState(null);

  const deleteCertificate = async (id) => {
    try {
      await axios.delete(`${APP_URL}/delete_certificate/${id.trim()}`);
      handleClick();
      setMessage(
        isLTR ? "User Added successfully!" : "تم تسجيل المستخدم بنجاح!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
      }, 3000);
      setColor("#0d880d");
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
    }
  };
  return (
    <Container>
      <SimpleSnackbar
        open={openToast}
        handleClose={handleClosetoast}
        message={message}
        color={color}
      />
      <PreviewCertificate className="generate" onClick={handleOpen}>
        Generate Certificate
      </PreviewCertificate>
      <CertificateModal open={open} handleClose={handleClose}>
        <DataTable
          title="Customers"
          data={filter_user && filter_user}
          showFilter={true}
          setCertificate={setCertificate}
          isEditable={false}
          generateCertificate={true}
          nestedTable={false}
          renewCertificate={false}
          view={false}
          isDelete={false}
          classname={"certificate"}
        />
      </CertificateModal>
      {certificateData?.length > 0 && (
        <DataTable
          title="Certificates"
          data={certificateData && certificateData}
          showFilter={true}
          setCertificate={setCertificate}
          deleteHandler={deleteCertificate}
          isEditable={false}
          generateCertificate={false}
          nestedTable={false}
          renewCertificate={true}
          view={false}
          isDelete={true}
        />
      )}
    </Container>
  );
};

export default Certificate;
