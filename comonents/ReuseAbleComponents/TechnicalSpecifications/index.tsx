import * as React from "react";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import {
  SpecsContainer,
  SpecsWrapper,
  SpecsDescription,
  SpecsTitle,
} from "./styled.components";
import IconComponent from "../IconComponent";
import AnimationBar from "../AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
interface ISpecsData {
  id?: number;
  name_en?: string;
  name_ar?: string;
  description_ar?: string;
  description_en?: string;
  icon?: string;
}
interface IProps {
  data?: ISpecsData[] | undefined;
  title: string;
  page: string;
}
const TechnicalSpecsTable: React.FC<IProps> = ({ data, title, page }) => {
  const { isLTR, translations } = useTheme();
  return (
    <SpecsContainer>
      {(data?.length as number) > 0 && (
        <AnimationBar
          title={translations?.keyFeatures}
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
              {item.icon === "" && (
                <SpecsTitle>{isLTR ? item.name_en : item.name_ar}</SpecsTitle>
              )}
              <div>
                <IconComponent
                  icon={item.icon}
                  fill={"#006791"}
                  width={"40px"}
                  height={"40px"}
                />

                <SpecsDescription>
                  <p className="ellipsis">
                    {isLTR ? item.description_en : item.description_ar}
                  </p>
                </SpecsDescription>
              </div>
            </SpecsWrapper>
          );
        })}
      </SpecsContainer>
    </SpecsContainer>
  );
};
export default TechnicalSpecsTable;
