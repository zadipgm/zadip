import * as React from "react";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import { Container, Heading, Wrapper } from "./styled.components";
import _data from "../../DataLayer/services.json";
import { useRouter } from "next/router";
import specs_data from "../../DataLayer/technicalSpecsTable.json";
import PricingTable from "../ReuseAbleComponents/PricingTable";
const EGovernmentServices = () => {
  const { translations, isLTR } = useTheme();
  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#737c85" }}>
      {translations?.egovService}
    </Typography>,
  ];

  const filter_services = _data.e_services.filter(
    (item) => item.title_en?.toLowerCase() === router.query.slug
  );
  console.log("here is router", router, filter_services);
  return (
    <Container>
      <Wrapper>
        <Heading>{translations?.egoveservices}</Heading>
        <Breadcrumb color={"#737c85"} breadcrumbs={breadcrumbs} />
      </Wrapper>
      <AnimationBar
        description={
          isLTR
            ? filter_services[0]?.description_en
            : filter_services[0]?.description_ar
        }
        title={
          isLTR ? filter_services[0]?.title_en : filter_services[0]?.title_ar
        }
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
      />
      <PricingTable
        title={
          isLTR
            ? `${filter_services[0]?.title_en} Shamel`
            : `باقة ${filter_services[0]?.title_ar} شامل`
        }
        data={specs_data.pricing_Data}
        classname={""}
        condition={translations?.conditions as string}
      />
      <PricingTable
        title={
          isLTR
            ? `${filter_services[0]?.title_en} Amalyat`
            : `باقة ${filter_services[0]?.title_ar} عمليات`
        }
        data={specs_data.pricing_Data}
        classname={""}
        condition={translations?.conditions as string}
      />
    </Container>
  );
};
export default EGovernmentServices;
