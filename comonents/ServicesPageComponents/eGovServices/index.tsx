import * as React from "react";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import { BreadCrumbWrapper } from "../../AboutUS/styled.components";
const EgovServices = () => {
  const router = useRouter();

  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links underline="hover" key="1" color="inherit" href="/services">
      services
    </Links>,
    <Links underline="hover" key="1" color="inherit" href="/">
      {router.query.services_category}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      details
    </Typography>,
  ];
  return (
    <div>
      <BreadCrumbWrapper>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
    </div>
  );
};
export default EgovServices;
