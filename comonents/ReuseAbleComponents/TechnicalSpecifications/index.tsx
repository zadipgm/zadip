import * as React from "react";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import {
  SpecsContainer,
  SpecsWrapper,
  SpecsDescription,
  SpecsTitle,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import LocaleContext from "../../../LocaleContext";
import BadgeSvg from "../../../public/icons/badgeSvg";
import IconComponent from "../IconComponent";
import AnimationBar from "../AnimationBar/AnimationBar";
interface ISpecsData {
  id?: number;
  name?: string;
  description?: string;
  icon?: string;
}
interface IProps {
  data?: ISpecsData[] | undefined;
  title: string;
  page: string;
}
const TechnicalSpecsTable: React.FC<IProps> = ({ data, title, page }) => {
  return (
    <SpecsContainer>
      {(data?.length as number) > 0 && (
        <AnimationBar
          title={"Key Features"}
          description={""}
          headingColor={"#0576bc"}
          descriptionColor={""}
        />
      )}
      <SpecsContainer>
        {data?.map((item) => {
          return (
            <SpecsWrapper
              key={item.id}
              className={
                page === "services" || page === "muaref"
                  ? "services-detail"
                  : "services"
              }
            >
              {/* {page === "services" && <BadgeSvg width="25px" height="25px" />} */}
              {item.icon === "" && <SpecsTitle>{item.name}</SpecsTitle>}
              <div>
                <IconComponent
                  icon={item.icon}
                  fill={""}
                  width={"40px"}
                  height={"40px"}
                />

                <SpecsDescription>{item.description}</SpecsDescription>
              </div>
            </SpecsWrapper>
          );
        })}
      </SpecsContainer>
    </SpecsContainer>
  );
};
export default TechnicalSpecsTable;
