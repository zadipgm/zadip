import * as React from "react";
import FaqSection from "../../ReuseAbleComponents/FaqSection";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import RelatedServices from "../RelatedServices";
import PricingTable from "../../ReuseAbleComponents/PricingTable";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import DownLoadButton from "../../ReuseAbleComponents/DownLoadButton";
import { ButtonsWrapper } from "./styled.components";
import ServicesAdvantageSection from "../../ReuseAbleComponents/ServicesAdvantageSection";
import OrderNowForm from "../OrderNowForm";
import MuarefDetails from "../MarufDetails";
import { useRouter } from "next/router";
interface IProps {
  page: string;
}
const ServicesDetail: React.FC<IProps> = ({ page }) => {
  const router = useRouter();
  let type = router.query.sub_category;
  return (
    <div>
      {type === "masarat" || type === "tam" || type === "muqeem" ? (
        <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
          <TechnicalSpecsTable
            data={_data.features}
            title={"Features"}
            page={"services"}
          />
          {/* <FaqSection /> */}
          {/* <EgovServices /> */}

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
            data={_data.pricing_Data}
            condition={
              "This packages provides unlimited transactions for all resident workers working in the establishment by the authorized entity or person within this establishment for an annual subscription with a one-time payment."
            }
          />
          <PricingTable
            title={`${type} Amalyat`}
            data={_data.pricing_Data}
            condition={
              "This packages provides unlimited transactions for all resident workers working in the establishment by the authorized entity or person within this establishment for an annual subscription with a one-time payment."
            }
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
      {type === "software_development" ||
      type === "mobile" ||
      type === "data_centers" ? (
        <div>
          <TechnicalSpecsTable
            data={_data.software_development}
            title={"Software Development"}
            page={"services"}
          />
          <FaqSection />
          <RelatedServices />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ServicesDetail;
