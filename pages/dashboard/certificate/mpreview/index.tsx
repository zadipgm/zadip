import MobilePreview from "comonents/DashboardComponents/Certificate/mobilePreview";
import { useFetcher } from "comonents/DashboardComponents/hooks/api/certificate";
import * as React from "react";
import useSWR from "swr";
const MobilePreviePage = () => {
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/certificates` as RequestInfo | URL;
  const { data, error, isLoading } = useSWR(fetchurl, useFetcher);
  return <>{isLoading ? <h2>Loading...</h2> : <MobilePreview data={data} />}</>;
};

export default MobilePreviePage;
