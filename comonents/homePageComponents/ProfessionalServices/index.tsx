import Image from "next/image";
import * as React from "react";
import { useTheme } from "styled-components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import {
  Container,
  Description,
  ServicesWrapper,
  Wrapper,
} from "./styled.components";
const ProfessionalServices = () => {
  const { isLTR } = useTheme();
  return (
    <Container>
      <AnimationBar
        description={
          isLTR
            ? "We have successfully tied partnerships with global leaders in technology, advertising and building frameworks harnessing best practices to enhance the dependability of our solutions and offerings."
            : "لقد نجحنا في ربط شراكات مع قادة عالميين في مجال التكنولوجيا والإعلان وأطر البناء التي تسخر أفضل الممارسات لتعزيز موثوقية حلولنا وعروضنا."
        }
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={isLTR ? "Professional Services" : "خدمات احترافية"}
        fontSize={"18px"}
      />
      <Wrapper>
        <ServicesWrapper>
          <Image src="/images/emuqeem.png" alt="" width={150} height={100} />
          <Description>
            {isLTR
              ? "The facility resident service enables the completion of resident transactions at the General Directorate of Passports electronically. Among these services is the renewal and issuance of a resident identity, the implementation of electronic visa operations, the completion of services transfer operations, and others"
              : "تمكن خدمة مقيم المنشآت من انجاز معاملات المقيمين لدى المديرية العامة للجوازات الكترونيا.  ومن هذه الخدمات تجديد وإصدار هوية مقيم، تنفيذ عمليات التأشيرات الإلكترونية، إتمام عمليات نقل الخدمات وغيرها"}
          </Description>
        </ServicesWrapper>
        <ServicesWrapper>
          <Image src="/images/etam.png" alt="" width={150} height={100} />
          <Description>
            {isLTR
              ? "The TAMM service makes it easier for establishments to manage the traffic operations of their vehicles electronically. Among the services it provides is the authorization to drive the vehicle, inquire about violations, and so on"
              : "تسهل خدمة تم على المنشآت من إدارة العمليات المرورية الكترونيا لمركباتهم. من ضمن الخدمات التي تقدمها تم تفويض قيادة المركبة والاستعلام عن المخالفات وغير ذلك"}
          </Description>
        </ServicesWrapper>
      </Wrapper>
    </Container>
  );
};
export default ProfessionalServices;
