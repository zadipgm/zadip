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
import DownLoadButton from "../ReuseAbleComponents/DownLoadButton";
import { ButtonsWrapper } from "../ServicesPageComponents/ServicesDetails/styled.components";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import ServicesAdvantageSection from "../ReuseAbleComponents/ServicesAdvantageSection";
import ListComponent from "../ReuseAbleComponents/ListComponent";
const EGovernmentServices = () => {
  const { translations, isLTR } = useTheme();
  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#2193b0" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#2193b0" }}>
      {translations?.egovService}
    </Typography>,
  ];

  const filter_services = _data.e_services.filter(
    (item) => item.title_en?.toLowerCase() === router.query.slug
  );
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>{translations?.egoveservices}</Heading>
          <Breadcrumb color={"#2193b0"} breadcrumbs={breadcrumbs} />
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
        {router.query.slug === "tam" && (
          <ServicesAdvantageSection
            data={filter_services[0]?.tam}
            poster={filter_services[0]?.poster}
            videoLink={filter_services[0]?.video_link}
          />
        )}
        {router.query.slug === "muqeem" && (
          <ServicesAdvantageSection
            data={filter_services[0]?.muqeem}
            poster={filter_services[0]?.poster}
            videoLink={filter_services[0]?.video_link}
          />
        )}
        {router.query.slug === "masarat" && (
          <ServicesAdvantageSection
            data={filter_services[0]?.masarat}
            poster={filter_services[0]?.poster}
            videoLink={filter_services[0]?.video_link}
          />
        )}
        {router.query.slug === "masarat" ? (
          ""
        ) : (
          <>
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
          </>
        )}
        <AnimationBar
          title={translations?.keyFeatures}
          description={""}
          headingColor={"#2193b0"}
          descriptionColor={""}
        />
        <ListComponent list={filter_services[0]?.list} />
        <AnimationBar
          title={translations?.supportingDocuments}
          description={""}
          headingColor={"#2193b0"}
          descriptionColor={""}
        />

        <ButtonsWrapper>
          <DownLoadButton
            title={
              isLTR
                ? (filter_services[0]?.button_title_en as string)
                : (filter_services[0]?.button_title_ar as string)
            }
          />
          <DownLoadButton
            title={
              isLTR
                ? (filter_services[0]?.form_button_en as string)
                : (filter_services[0]?.form_button_ar as string)
            }
          />
          <DownLoadButton title={translations?.editdeletform as string} />
        </ButtonsWrapper>

        <OrderNowForm
          classname="e-services"
          title={translations?.requestService as string}
          buttonTitle={translations?.sendOrder as string}
        />
      </Container>
    </>
  );
};
export default EGovernmentServices;
