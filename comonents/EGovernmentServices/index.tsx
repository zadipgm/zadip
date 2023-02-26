import * as React from "react";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  Container,
  Heading,
  Wrapper,
  ButtonsWrapper,
  Video,
  VideoWrapper,
} from "./styled.components";
import _data from "../../DataLayer/services.json";
import { useRouter } from "next/router";
import PricingTable from "../ReuseAbleComponents/PricingTable";
import DownLoadButton from "../ReuseAbleComponents/ReuseableButton";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import ServicesAdvantageSection from "../ReuseAbleComponents/ServicesAdvantageSection";
import ListComponent from "../ReuseAbleComponents/ListComponent";
import TamTable from "./TamTable";
import SmartGateTable from "./SmartgateTable";
const EGovernmentServices = () => {
  const { translations, isLTR, colors } = useTheme();
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color={`${colors.lightBlue}`} href="/">
      {translations?.home}
    </Links>,
    <Typography
      key="3"
      color="text.primary"
      style={{ color: colors.lightBlue }}
    >
      {translations?.egovService}
    </Typography>,
  ];

  const filter_services = _data.e_services.filter(
    (item) => item.title_en?.toLowerCase() === router.query.slug
  );
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <>
      <VideoWrapper>
        <Video
          poster="/images/thumb.png"
          className="videoTag"
          autoPlay
          loop
          muted
          controls
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src={`/vedio/${router.query.slug}.mp4`} type="video/mp4" />
        </Video>
      </VideoWrapper>
      <Container>
        <Wrapper>
          <Heading>{translations?.egoveservices}</Heading>
          <Breadcrumb color={colors.lightBlue} breadcrumbs={breadcrumbs} />
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
          headingColor={colors.lightBlue}
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
        {router.query.slug === "muqeem" && (
          <>
            <AnimationBar
              headingColor={colors.lightBlue}
              descriptionColor={"#737c85"}
              title={isLTR ? "Pricing Packages" : "قائمة الاسعار"}
              description={""}
            />
            <PricingTable
              show={true}
              title={
                isLTR
                  ? `${filter_services[0]?.title_en} Shamel`
                  : `باقة ${filter_services[0]?.title_ar} شامل`
              }
              data_head={
                isLTR
                  ? filter_services[0].shamel?.number_of_worker_en
                  : filter_services[0].shamel?.number_of_worker_ar
              }
              data={
                isLTR
                  ? filter_services[0].shamel?.cost_in_sar_en
                  : filter_services[0].shamel?.cost_in_sar_ar
              }
              classname={""}
              condition={translations?.conditions as string}
            />
            <PricingTable
              show={true}
              title={
                isLTR
                  ? `${filter_services[0]?.title_en} Amalyat`
                  : `باقة ${filter_services[0]?.title_ar} عمليات`
              }
              data_head={filter_services[0]?.amalyat?.number_of_worker}
              data={filter_services[0].amalyat?.cost_in_sar}
              classname={""}
              condition={translations?.conditions as string}
            />
          </>
        )}
        {router.query.slug === "tam" && (
          <>
            <PricingTable
              title={isLTR ? "Annual Pricing" : "الاشتراك السنوي"}
              data_head={
                isLTR
                  ? filter_services[0]?.shamel?.number_of_worker_en
                  : filter_services[0]?.shamel?.number_of_worker_ar
              }
              data={
                isLTR
                  ? filter_services[0]?.shamel?.cost_in_sar_en
                  : filter_services[0]?.shamel?.cost_in_sar_ar
              }
              classname={""}
              condition={translations?.conditions as string}
              show={false}
            />
            <TamTable
              title={isLTR ? "Transactional Charges" : "رسوم العمليات"}
              classname={""}
              data_head={filter_services[0]?.number_of_worker}
            />
          </>
        )}
        {router.query.slug === "smartgate" && (
          <>
            <SmartGateTable
              title={
                isLTR
                  ? "The cost of subscription packages for permit service"
                  : "تكلفة باقات الاشتراك لخدمة تصريح"
              }
              classname={""}
              data_head={filter_services[0]?.number_of_worker}
              head={filter_services[0]?.head}
              second_head={filter_services[0]?.second_head}
              table_data={filter_services[0]?.table_data}
            />
          </>
        )}
        <AnimationBar
          title={translations?.keyFeatures}
          description={""}
          headingColor={colors.lightBlue}
          descriptionColor={""}
        />
        <ListComponent list={filter_services[0]?.list} />
        {router.query.slug !== "masarat" &&
          router.query.slug !== "smartgate" && (
            <>
              <AnimationBar
                title={translations?.supportingDocuments}
                description={""}
                headingColor={colors.lightBlue}
                descriptionColor={""}
              />
              <ButtonsWrapper>
                <DownLoadButton
                  title={
                    isLTR
                      ? (filter_services[0]?.button_title_en as string)
                      : (filter_services[0]?.button_title_ar as string)
                  }
                  classname={"download-button"}
                  href={`/images/${router.query.slug}_pricelist.png`}
                />
                <DownLoadButton
                  title={
                    isLTR
                      ? (filter_services[0]?.form_button_en as string)
                      : (filter_services[0]?.form_button_ar as string)
                  }
                  classname={"download-button"}
                  href={`/images/${router.query.slug}.pdf`}
                />
                <DownLoadButton
                  title={translations?.editdeletform as string}
                  classname={"download-button"}
                  href={`/images/${router.query.slug}_user.pdf`}
                />
              </ButtonsWrapper>
            </>
          )}
        <OrderNowForm
          title={translations?.requestService as string}
          buttonTitle={translations?.requestService as string}
          icon={"salesSvg"}
          page={filter_services[0]?.title_en}
        />
      </Container>
    </>
  );
};
export default EGovernmentServices;
