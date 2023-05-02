import * as React from "react";
import { useTheme } from "styled-components";
import Charts from "../pieChart";
import HomeCard from "../HomeCard";
const FormsDetails = () => {
  const { translations } = useTheme();
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  let showdata = 10;
  React.useEffect(() => {
    setLoading(true);
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    fetch(`${APP_URL}/get_zadipform`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
