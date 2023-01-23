import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import _data from "../../../DataLayer/product.json";

import DetailsComponent from "../../ReuseAbleComponents/DetailsComponent";

const ProductDetails = () => {
  const router = useRouter();
  let type = router.query.sub_category;
  const filterProducts = _data.all.filter((item) =>
    item.link.includes(type as string)
  );
  const filterRelatedProducts = _data.all.filter(
    (item) => item.type === router.query.detail
  );
  const { isLTR } = useTheme();
  return (
    <>
      <DetailsComponent
        title={
          isLTR ? filterProducts[0]?.title_en : filterProducts[0]?.title_ar
        }
        page={"products"}
        image={filterProducts[0]?.image}
        description={
          isLTR
            ? filterProducts[0]?.detail_description_en
            : filterProducts[0]?.detail_description_ar
        }
        filterRelatedData={filterRelatedProducts}
        technical_specs={filterProducts[0]?.technical_specs}
      />
    </>
  );
};
export default ProductDetails;
