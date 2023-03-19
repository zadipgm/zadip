import React from "react";

interface IProps {
  title: string;
  serviceCounts: any;
  pageCounts: any;
}
import { Chart } from "react-google-charts";
import { useTheme } from "styled-components";
import { ChartWrapper, Title, Wrapper } from "./styled.components";

const Charts = ({ title, serviceCounts, pageCounts }: IProps) => {
  const { translations } = useTheme();
  const chartServicedata = [
    ["Task", "Hours per Day"],
    ["Ektefa", serviceCounts?.ektefa],
    ["Nafeth", serviceCounts.nafeth],
    ["Qadre", serviceCounts.qadre],
    ["Ihtiwa", serviceCounts.ihtiwa],
    ["Muaref", serviceCounts.muaref],
    ["Tamm", serviceCounts.tamm],
    ["Muqeem", serviceCounts.muqeem],
    ["Masarat", serviceCounts.masarat],
    ["Smart agte", serviceCounts.smartagte],
  ];
  const chartPagedata = [
    ["Task", "Page visibility"],
    ["Muaref", pageCounts?.Muaref],
    ["Professional Services", pageCounts[`${"Professional Services"}`]],
    ["Muqeem", pageCounts.Muqeem],
    ["Masarat", pageCounts.Masarat],
    ["Tam", pageCounts.Tam],
  ];

  const options = {
    title: ``,
  };
  const optionsPage = {
    title: ``,
  };
  return (
    <>
      <Wrapper>
        <ChartWrapper>
          <Title>{translations.userRequestedServices}</Title>
          <Chart
            chartType="PieChart"
            data={chartServicedata}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </ChartWrapper>
        <ChartWrapper>
          <Title>{translations.userVisitedPage}</Title>
          <Chart
            chartType="PieChart"
            data={chartPagedata}
            options={optionsPage}
            width={"100%"}
            height={"400px"}
          />
        </ChartWrapper>
      </Wrapper>
    </>
  );
};
export default Charts;
