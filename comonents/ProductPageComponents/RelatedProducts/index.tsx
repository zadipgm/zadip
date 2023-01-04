import * as React from "react";
import RelatedSection from "../../ReuseAbleComponents/RelatedSection";
import productData from "../../../DataLayer/product.json";
import { useRouter } from "next/router";

const RelatedProducts = () => {
  const router = useRouter();
  const relatedCategories = productData.all.filter(
    (item) => item.type === router.query.detail
  );
  return (
    <>
      <RelatedSection relatedData={relatedCategories} page={"products"} />
    </>
  );
};
export default RelatedProducts;
