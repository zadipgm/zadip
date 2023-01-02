import * as React from "react";
import FaqSection from "../../ReuseAbleComponents/FaqSection";
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
import OrderNowForm from "../OrderNowForm";
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
    (item) => item.link === `/${type}`
  );
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}`}
    >
      {"services"}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router?.query?.sub_category}?type=${
        router.query.detail
      }`}
    >
      {router.query.sub_category}
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
          title={filterServices[0]?.title}
          page={"services"}
          image={filterServices[0]?.image}
          filterRelatedData={filterRelatedServices}
          description={filterSpecificItem[0]?.detail_description}
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
              Go Back
            </GoBackButton>
            <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
          </PageBreadCrumbWrapper>
          <AnimationBar
            title={`${type} Advantages`}
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={"#737c85;"}
          />
          <ServicesAdvantageSection />
          <AnimationBar
            title={"Pricing Packages"}
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={""}
          />
          <PricingTable
            title={`${type} Shamel`}
            data={specs_data.pricing_Data}
            classname={""}
            condition={
              "This packages provides unlimited transactions for all resident workers working in the establishment by the authorized entity or person within this establishment for an annual subscription with a one-time payment."
            }
          />
          <PricingTable
            title={`${type} Amalyat`}
            classname={"direction"}
            data={specs_data.pricing_Data}
            condition={
              "This packages provides unlimited transactions for all resident workers working in the establishment by the authorized entity or person within this establishment for an annual subscription with a one-time payment."
            }
          />
          <TechnicalSpecsTable
            data={specs_data.features}
            title={"Features"}
            page={"services"}
          />
          <AnimationBar
            title={"Supporting Documents"}
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={""}
          />
          <ButtonsWrapper>
            <DownLoadButton title={`${type} Priclist`} />
            <DownLoadButton title={`${type} Subscription Form`} />
            <DownLoadButton title=" Edit or Delete User Form " />
          </ButtonsWrapper>
          <OrderNowForm title="Order Now" buttonTitle={"Send Order"} />
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
