import * as React from "react";
import {
  FeatureSectionContainer,
  FeatureSectionWrapper,
  FeatureIcon,
  FeatureTitleLink,
  FeatureDescription,
  FeatureSectionParent,
} from "./styled.components";
import { useTranslation } from "react-i18next";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import ViewMore from "../../ReuseAbleComponents/ViewMoreButton";
const FeatureSection = () => {
  const { t } = useTranslation();
  return (
    <FeatureSectionParent>
      <AnimationBar
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={t("featureProduct")}
        description={t("featureDescription")}
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
            {t("featureTitleEktefa")}
          </FeatureTitleLink>
          <FeatureDescription>{t("featurecardDescription")}</FeatureDescription>
          <ViewMore color={"#34495e"} />
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="https://www.zadip.com/en//images/feature/3.png"
              alt="Feature"
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://nafeth.com">
            {t("featureTitleNafeth")}
          </FeatureTitleLink>
          <FeatureDescription>{t("featurecardDescription")}</FeatureDescription>
          <ViewMore color={"#34495e"} />
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="https://www.zadip.com/en//images/feature/1.png"
              alt="Feature"
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://Feature.net">
            {t("featureTitleTam")}
          </FeatureTitleLink>
          <FeatureDescription>{t("featurecardDescription")}</FeatureDescription>
          <ViewMore color={"#34495e"} />
        </FeatureSectionWrapper>
      </FeatureSectionContainer>
    </FeatureSectionParent>
  );
};
export default FeatureSection;
