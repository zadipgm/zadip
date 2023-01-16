import * as React from "react";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import _data from "../../../DataLayer/services.json";
import specs_data from "../../../DataLayer/technicalSpecsTable.json";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import RelatedServices from "../RelatedServices";
import PricingTable from "../../ReuseAbleComponents/PricingTable";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import DownLoadButton from "../../ReuseAbleComponents/DownLoadButton";
import { ButtonsWrapper } from "./styled.components";
import ServicesAdvantageSection from "../../ReuseAbleComponents/ServicesAdvantageSection";
import OrderNowForm from "../../ReuseAbleComponents/OrderNowForm";
import MuarefDetails from "../MarufDetails";
import { useRouter } from "next/router";
import Links from "@mui/material/Link";
import DetailsComponent from "../../ReuseAbleComponents/DetailsComponent";
import {
  GoBackButton,
  PageBreadCrumbWrapper,
} from "../../ReuseAbleComponents/DetailsComponent/styled.components";
import LocaleContext from "../../../LocaleContext";

import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import data from "../../../DataLayer/services.json";
interface IProps {
  page: string;
}
const ServicesDetail: React.FC<IProps> = ({ page }) => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);
  let type = router.query.sub_category;
  const filterServices = _data.sub_services.filter((item) =>
    item.link.includes(type as string)
  );
  const filterRelatedServices = _data.sub_services.filter(
    (item) => item.type === router.query.detail
  );
  const filterSpecificItem = filterServices.filter(
    (item) => item.link === `${type}`
  );
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}`}
    >
      {t("services")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router.query.detail}?type=${
        router.query.detail
      }`}
    >
      {isLTR
        ? filterSpecificItem[0]?.type?.replaceAll("_", " ")
        : filterSpecificItem[0]?.type_ar}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router?.query?.sub_category}?type=${
        router.query.detail
      }`}
    >
      {isLTR
        ? filterSpecificItem[0]?.title_en
        : filterSpecificItem[0]?.title_ar}
    </Links>,
  ];
  return (
    <div>
      {/*  software_development services && data_center services */}

      {type === "software_development" ||
      type === "website_development" ||
      type === "mobile_apps" ||
      type === "cisco_sla" ||
      type === "network_infrastructure" ||
      type === "servers_storage" ||
      type === "cadre" ? (
        <DetailsComponent
          title={
            isLTR ? filterServices[0]?.title_en : filterServices[0]?.title_ar
          }
          page={"services"}
          image={filterServices[0]?.image}
          filterRelatedData={filterRelatedServices}
          description={
            isLTR
              ? filterSpecificItem[0]?.detail_description_en
              : filterSpecificItem[0]?.detail_description_ar
          }
          technical_specs={filterServices[0]?.technical_specs}
        />
      ) : (
        ""
      )}

      {/* e_Govservices  */}

      {type === "masarat" || type === "tam" || type === "muqeem" ? (
        <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
          <PageBreadCrumbWrapper>
            <GoBackButton onClick={() => router.back()}>
              <KeyboardBackspaceIcon />
              {t("goBack")}
            </GoBackButton>
            <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
          </PageBreadCrumbWrapper>
          <AnimationBar
            title={
              type === "tam"
                ? isLTR
                  ? "Tam Advantages"
                  : "باقة تم مميزات "
                : type === "masarat"
                ? isLTR
                  ? "Masarat Advantages"
                  : "خدمة مسارات"
                : type === "muqeem"
                ? isLTR
                  ? "Muqeem Advantages"
                  : "باقة مقيم مميزات "
                : ""
            }
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={""}
          />
          {type === "tam" && <ServicesAdvantageSection data={data.tam} />}
          {type === "muqeem" && <ServicesAdvantageSection data={data.muqeem} />}
          {type === "masarat" && (
            <ServicesAdvantageSection data={data.masarat} />
          )}
          {type === "tam" || type === "muqeem" ? (
            <AnimationBar
              title={`${t("pricingPackages")}`}
              description={""}
              headingColor={"#2193b0"}
              descriptionColor={""}
            />
          ) : (
            ""
          )}
          {type === "tam" || type === "muqeem" ? (
            <PricingTable
              title={
                type === "tam"
                  ? isLTR
                    ? "Tam Shamel"
                    : "باقة تم شامل"
                  : type === "muqeem"
                  ? isLTR
                    ? "Muqeem Shamel"
                    : "باقة مقيم شامل"
                  : ""
              }
              data={specs_data.pricing_Data}
              classname={""}
              condition={`${t("conditions")}`}
            />
          ) : (
            ""
          )}
          {type === "tam" || type === "muqeem" ? (
            <PricingTable
              title={
                type === "tam"
                  ? isLTR
                    ? "Tam Amalyat"
                    : "باقة تم عمليات"
                  : type === "muqeem"
                  ? isLTR
                    ? "Muqeem Amalyat"
                    : "باقة مقيم عمليات"
                  : ""
              }
              classname={"direction"}
              data={specs_data.pricing_Data}
              condition={`${t("conditions")}`}
            />
          ) : (
            ""
          )}
          <TechnicalSpecsTable
            data={specs_data.features}
            title={"Features"}
            page={"services"}
          />

          <>
            {type === "tam" || type === "muqeem" ? (
              <AnimationBar
                title={`${t("supportingDocuments")}`}
                description={""}
                headingColor={"#2193b0"}
                descriptionColor={""}
              />
            ) : (
              ""
            )}
            {type === "tam" || type === "muqeem" ? (
              <ButtonsWrapper>
                <DownLoadButton
                  title={
                    type === "tam"
                      ? isLTR
                        ? "Tam Priclist"
                        : " تم قائمة الاسعار"
                      : type === "muqeem"
                      ? isLTR
                        ? "Muqeem Priclist"
                        : " مقيم قائمة الاسعار"
                      : ""
                  }
                />
                <DownLoadButton
                  title={
                    type === "tam"
                      ? isLTR
                        ? "Tam Subscription Form"
                        : " تم  نموذج الاشتراك"
                      : type === "muqeem"
                      ? isLTR
                        ? "Muqeem Subscription Form"
                        : " مقيم  نموذج الاشتراك"
                      : ""
                  }
                />
                <DownLoadButton title={`${t("editdeletform")}`} />
              </ButtonsWrapper>
            ) : (
              ""
            )}
          </>

          {type === "tam" || type === "muqeem" ? (
            <OrderNowForm
              classname="e-services"
              title={`${t("orderNow")}`}
              buttonTitle={`${t("sendOrder")}`}
            />
          ) : (
            ""
          )}
          <RelatedServices />
        </div>
      ) : (
        ""
      )}

      {type === "muaref" && (
        <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
          <MuarefDetails />
        </div>
      )}
    </div>
  );
};
export default ServicesDetail;
