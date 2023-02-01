import * as React from "react";
import CloseSvg from "../../public/icons/closeSvg";
import ModalComponent from "../ReuseAbleComponents/Modal";
import {
  Container,
  Label,
  Input,
  Title,
  Wrapper,
  SvgWrapper,
} from "./styled.components";
interface IProps {
  handleClose: () => void;
}

const LogIn = ({ handleClose }: IProps) => {
  const close = () => {
    handleClose();
    console.log("here is close");
  };
  return (
    <Container>
      <Wrapper>
        <Title>LogIn</Title>
        <SvgWrapper onClick={close}>
          <CloseSvg width="25px" height="25px" fill="#fff" />
        </SvgWrapper>
      </Wrapper>
      <form>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name.." required />
        <Label>Password</Label>
        <Input type="text" placeholder="Enter password.." required />
        <Input type={"submit"} className={"submit"} />
      </form>
    </Container>
  );
};
export default LogIn;
