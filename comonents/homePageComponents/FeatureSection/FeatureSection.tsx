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
import Link from "next/link";
const FeatureSection = () => {
  const { t } = useTranslation();
  return (
    <FeatureSectionParent>
      <AnimationBar
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={t("featureProduct") as string}
        description={t("featureDescription")}
      />
      <FeatureSectionContainer>
        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="/images/ektefa.png"
              alt="Feature"
              width={100}
              height={100}
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://ektefa.net">
            {t("featureTitleEktefa")}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html: t("featurecardDescriptionEktefa"),
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="/images/nafeth.png"
              alt="Feature"
              width={100}
              height={100}
            />
          </FeatureIcon>
          <FeatureTitleLink href="/services/tam/eGov_services">
            {t("featureTitleNafeth")}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html: t("featurecardDescriptionNafeth"),
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="images/mauref.png"
              alt="Feature"
              width={100}
              height={100}
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://nafeth.com">
            {t("featureTitleMuaref")}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html: t("featurecardDescriptionMuaref"),
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>

        <FeatureSectionWrapper>
          <FeatureIcon>
            <img
              src="images/ihtiwa.png"
              alt="Feature"
              width={100}
              height={100}
            />
          </FeatureIcon>
          <FeatureTitleLink href="https://www.ehtiwa.com/">
            {t("featureTitleEhtiwa")}
          </FeatureTitleLink>
          <FeatureDescription
            dangerouslySetInnerHTML={{
              __html: t("featurecardDescriptionEhtiwa"),
            }}
          ></FeatureDescription>
        </FeatureSectionWrapper>
      </FeatureSectionContainer>
    </FeatureSectionParent>
  );
};
export default FeatureSection;
