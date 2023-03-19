import Link from "next/link";
import * as React from "react";
import { Container, ImageWrapper, UploadImage } from "./styled.components";
const ProfileComponent = () => {
  return (
    <Container>
      <ImageWrapper>
        <img src="/images/profileimg.jpg" alt="profile" />
        <UploadImage>
          <input type="file" />
        </UploadImage>
      </ImageWrapper>
    </Container>
  );
};
export default ProfileComponent;
