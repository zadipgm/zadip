import dynamic from "next/dynamic";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  AnimationBarContainer,
  Title,
  SectionBar,
  DesCription,
} from "./styled.components";
interface IProps {
  title?: string | undefined;
  description: string;
  icon?: string;
  color?: string;
  headingColor: string;
  descriptionColor: string;
  fontSize?: string;
  fontWeight?: string;
}
const AnimationBar: React.FC<IProps> = ({
  title,
  description,
  icon,
  color,
  headingColor,
  descriptionColor,
  fontSize,
  fontWeight,
}) => {
  const Icon: React.ComponentType<{
    fill: string;
    width: string;
    height: string;
  }> = dynamic(() =>
    import(`../../../public/icons/${icon ?? ""}`).then((mod) => {
      return mod.default;
    })
  );
  const { locale, isLTR, isRTL, translations } = useTheme();

  return (
    <AnimationBarContainer>
      <Icon fill={color ?? ""} width={"100px"} height={"100px"} />
      <Title color={headingColor}>{title}</Title>
      <DesCription
        color={descriptionColor}
        fontWeight={fontWeight ?? ""}
        dangerouslySetInnerHTML={{ __html: description }}
      ></DesCription>
      <SectionBar></SectionBar>
    </AnimationBarContainer>
  );
};
export default AnimationBar;
