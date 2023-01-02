import * as React from "react";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import detailsPageData from "../../../DataLayer/product.json";
import { useRouter } from "next/router";
import OverView from "../../ReuseAbleComponents/OverView";
import Links from "@mui/material/Link";
import LocaleContext from "../../../LocaleContext";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import {
  GoBackButton,
  PageBreadCrumbWrapper,
  DetailsWrapper,
} from "./styled.components";
import RelatedProducts from "../RelatedSection";
interface IRelated {
  id?: number;
  title?: string;
  icon?: string;
  description?: string;
  link?: string;
  type?: string;
  specs?: boolean;
  image?: string;
}
interface ITechnical_specs {
  id?: number;
  name?: string;
  icon?: string;
  description?: string;
}
interface IProps {
  title: string;
  page: string;
  image: string;
  filterRelatedData: IRelated[];
  description?: string;
  technical_specs?: ITechnical_specs[] | undefined;
}
const DetailsComponent: React.FC<IProps> = ({
  title,
  page,
  image,
  filterRelatedData,
  description,
  technical_specs,
}) => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const query = router?.query?.sub_category;
  const data = detailsPageData.all.filter((item) =>
    item.link.includes(query as string)
  );
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}`}
    >
      {page}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${page}/${router?.query?.sub_category}?type=${router.query.detail}`}
    >
      {router.query.sub_category}
    </Links>,
  ];
  return (
    <DetailsWrapper>
      <PageBreadCrumbWrapper>
        <GoBackButton onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
          Go Back
        </GoBackButton>
        <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
      </PageBreadCrumbWrapper>
      <OverView text={description} image={image} title={title} />
      <TechnicalSpecsTable
        data={technical_specs}
        title={"Technical Specifications"}
        page={page}
      />

      <RelatedProducts
        relatedData={filterRelatedData}
        title={`Related ${page}`}
        page={page}
      />
    </DetailsWrapper>
  );
};
export default DetailsComponent;
