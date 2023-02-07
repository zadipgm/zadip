import * as React from "react";
import {
  Container,
  List,
  ListItems,
  ProfileImageContainer,
} from "./styled.components";
const Header = () => {
  return (
    <Container>
      <ProfileImageContainer>
        <img
          src="/images/zeshan.jpeg"
          alt="profile iamge"
          width={100}
          height={"auto"}
        />{" "}
        <span>zeshan</span>
      </ProfileImageContainer>
      <List>
        <ListItems>Profile</ListItems>
        <ListItems>Setting</ListItems>
      </List>
      <span> Logout</span>
    </Container>
  );
};
export default Header;
