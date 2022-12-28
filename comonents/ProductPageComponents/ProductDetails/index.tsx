import * as React from "react";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import FaqSection from "../../ReuseAbleComponents/FaqSection";
import _data from "../../../DataLayer/technicalSpecsTable.json";

import RelatedProducts from "../RelatedProducts";
const ProductDetails = () => {
  return (
    <>
      <TechnicalSpecsTable
        data={_data.technical_specs}
        title={"Technical Specifications"}
        page={"products"}
      />
      <FaqSection />
      <RelatedProducts />
    </>
  );
};
export default ProductDetails;
