import Link from "next/link";
import * as React from "react";
import { Container, Button } from "./styled.components";
interface IProps {
  title: string;
  classname?: string;
}
const ButtonComponent = ({ title, classname }: IProps) => {
  return (
    <Container>
      <Link href={"/"}>
        <Button className={classname}>{title}</Button>
      </Link>
    </Container>
  );
};
export default ButtonComponent;
