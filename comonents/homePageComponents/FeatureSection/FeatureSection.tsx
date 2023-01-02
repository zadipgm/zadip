import * as React from "react";
import {
  FeatureSectionContainer,
  FeatureSectionWrapper,
  FeatureIcon,
  FeatureTitleLink,
  FeatureDescription,
  FeatureSectionParent,
} from "./styled.components";
// import { useTranslation } from "react-i18next";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import ViewMore from "../../ReuseAbleComponents/ViewMoreButton";
import Link from "next/link";
const FeatureSection = () => {
  // const { t } = useTranslation();
  return (
    <FeatureSectionParent>
      <AnimationBar
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={"Our Feature Products"}
        description={
          "Ektefa is a completely flexible and environement independent human resource management system. The objective behind the development of Ektefa as a complete enterprise level HRMS solution was to encourage a user-friendly, simple yet robust system which not only answers to the routine HR department issues but also provides intelligent analytics and new-age technological implementations. <a href={https://ektefa.net/}>read more...</a>"
        }
      />
      <FeatureSectionContainer>
        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="https://www.zadip.com/en//images/feature/2.png"
              alt="Feature"
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://ektefa.net">
            {"Ektef"}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html:
                "Ektefa is the most effectively delivered cloud solution for human resource management. Every component of Ektefa has been developed by a Saudi company with dedicated focus on Saudi businesses and challenges. With over 15 years in the business fraternity, we took it upon ourselves to provide an answer to human resource management issues faced by the government and private businesses and transform over 80% of everyday routine tasks that in a conventional business takes days to accomplish. <a href={https://ektefa.net/}>read more...</a>",
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="https://www.zadip.com/en//images/feature/3.png"
              alt="Feature"
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://nafeth.com">
            {"Nafeth"}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html:
                "The car rental management business in Saudi Arabia faces a variety of management issues in their daily operation routine. The most important of which is availability and dissemination of information to all branches of the business no matter where they are. Nafeth helps to safely manage operations, finances, customers and maintenance jobs through a single interface available anywhere anytime. Moreover, Nafeth is the only system integrated with the Moroor through the TAMM service. <a href={https://ektefa.net/}>read more...</a>",
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="https://www.zadip.com/en//images/feature/1.png"
              alt="Feature"
            />
          </FeatureIcon>
          <FeatureTitleLink href="/services/tam/eGov_services">
            {"TAm"}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html:
                "The TAMM service enables the government and private sectors to implement and query the services provided by the General Directorate of Traffic for vehicles belonging to their business around the clock. The local and international e-Visa service facilitates you from the convenience of your office and helps you to inquire about traffic violations on your vehicles and many other management services. TAMM from the General Directorate of Traffic is your gateway to developing and facilitating your business. <a href={https://ektefa.net/}>read more...</a>",
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>
      </FeatureSectionContainer>
    </FeatureSectionParent>
  );
};
export default FeatureSection;
