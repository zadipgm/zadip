import * as React from "react";
import RelatedProducts from "../../ReuseAbleComponents/RelatedSection";
import servicesData from "../../../DataLayer/services.json";
import { useRouter } from "next/router";

const RelatedServices = () => {
  const router = useRouter();
  const relatedCategories = servicesData.sub_services.filter(
    (item) => item.type === router.query.detail
  );
  return (
    <>
      <RelatedProducts
        title="Related Services"
        relatedData={relatedCategories}
        page={"services"}
      />
    </>
  );
};
export default RelatedServices;
