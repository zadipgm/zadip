import * as React from "react";
import AnimationBar from "../AnimationBar/AnimationBar";
import { Container, Description, Image } from "./styled.components";
interface IProps {
  text?: string;
  image: string;
  title?: string;
}
const OverView: React.FC<IProps> = ({ text, image, title }) => {
  return (
    <>
      <Container>
        <Description>
          <h2>{title}</h2>
          <p>{text}</p>
        </Description>
        <Image src={image} alt="overview" />
      </Container>
    </>
  );
};
export default OverView;
