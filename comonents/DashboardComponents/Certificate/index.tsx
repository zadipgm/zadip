import * as React from "react";
import { Container, PreviewCertificate } from "./styled";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import DataTable from "../DataTable";
import data from "dataLayer/certificate.json";
import users from "dataLayer/user.json";
import CertificateModal from "../ReuseableComponents/Modal";

const Certificate = () => {
  const { locale } = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [certificate, setCertificate] = React.useState(null);
  return (
    <Container>
      <PreviewCertificate className="generate" onClick={handleOpen}>
        Generate Certificate
      </PreviewCertificate>
      <CertificateModal open={open} handleClose={handleClose}>
        <DataTable
          title="Customers"
          data={users.user}
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
      <DataTable
        title="Certificates"
        data={data.certificate}
        showFilter={true}
        setCertificate={setCertificate}
        isEditable={false}
        generateCertificate={false}
        nestedTable={false}
        renewCertificate={true}
        view={false}
        isDelete={true}
      />
    </Container>
  );
};

export default Certificate;
