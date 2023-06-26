import * as React from "react";
import { useTheme } from "styled-components";
import Charts from "../pieChart";
import HomeCard from "../HomeCard";
interface IHomeData {
  id: number;
  Email: string;
  MobileNumber: string;
  Name: string;
  Page: string;
  ServiceName: string;
}
interface IProps {
  data?: IHomeData[];
}
const FormsDetails = ({ data }: IProps) => {
  const { translations } = useTheme();
  let showdata = 10;
  const serviceCounts = {} as any;
  data.forEach((service) => {
    serviceCounts[service.ServiceName] =
      (serviceCounts[service.ServiceName] || 0) + 1;
  });

  const pageCounts = {} as any;
  data.forEach((service) => {
    pageCounts[service.Page] = (pageCounts[service.Page] || 0) + 1;
  });

  return (
    <>
      <HomeCard />
      <Charts
        title={translations.userRequestedServices}
        serviceCounts={serviceCounts}
        pageCounts={pageCounts}
      />
    </>
  );
};
export default FormsDetails;
