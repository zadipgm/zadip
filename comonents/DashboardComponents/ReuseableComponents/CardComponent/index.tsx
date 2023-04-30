import * as React from "react";
import {
  Container,
  IconWrapper,
  TextWrapper,
  Wrapper,
} from "./styled.components";
import IconComponent from "comonents/ReuseAbleComponents/IconComponent";
interface IProps {
  number: number;
  title: string;
  icon: string;
  color: string;
}
const CardComponent = ({ number, title, icon, color }: IProps) => {
  return (
    <Container>
      <Wrapper color={color}>
        <TextWrapper color={color}>
          <span>{number}</span>
          <h4>{title}</h4>
        </TextWrapper>
        <IconWrapper>
          <IconComponent fill={color} width="60px" height="60px" icon={icon} />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};
export default CardComponent;
