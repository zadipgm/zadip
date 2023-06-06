import * as React from "react";
import { Container, PreviewCertificate } from "./styled";
import DataTable from "../DataTable";
import CertificateModal from "../ReuseableComponents/Modal";
import { fetchUserData } from "../hooks/api/getUsers";
import { useFetch } from "../hooks/api/certificate";

const Certificate = () => {
  const [userdata, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { certificateData } = useFetch(fetchurl);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    fetchUserData(setData);
  }, []);
  const handleOpen = () => {
    fetchUserData(setData);
    setOpen(true);
  };
  const [certificate, setCertificate] = React.useState(null);
  return (
    <Container>
      <PreviewCertificate className="generate" onClick={handleOpen}>
        Generate Certificate
      </PreviewCertificate>
      <CertificateModal open={open} handleClose={handleClose}>
        <DataTable
          title="Customers"
          data={userdata && userdata}
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
