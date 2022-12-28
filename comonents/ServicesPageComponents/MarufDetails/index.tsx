import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import {
  Container,
  MuarefVedioWrapper,
  MuarefSectionContainer,
  Description,
  MuarefCompatibleWrapper,
  MuarefBGImage,
  Text,
  Image,
  MuarefDescription,
  Link,
  ValuedWrapper,
  ValuedDistributors,
  Heading,
  Wrapper,
  ImageWrapper,
  TechImage,
  ValueLink,
  HRGateImage,
} from "./styled.components";
import _data from "../../../DataLayer/technicalSpecsTable.json";

const MuarefDetails = () => {
  return (
    <Container>
      <TechnicalSpecsTable
        data={_data.muaref_features}
        title={"Features"}
        page={"muaref"}
      />
      <AnimationBar
        title={"Muaref QR"}
        description={"Goodbye Biometric Devices!"}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
      />
      <MuarefSectionContainer>
        <MuarefVedioWrapper>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OmhpMuieTWM?rel=0&amp;controls=0&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </MuarefVedioWrapper>
        <MuarefCompatibleWrapper>
          <MuarefBGImage>
            <Text>100% COMPATIBLE WITH</Text>
            <Image
              src="https://www.zadip.com/en/images/products/muaref/ektefa.png"
              alt="ektef"
              width={178}
              height={58}
            />
            <MuarefDescription>
              {" "}
              Muaref if completely compatible with Ektefa - the premium Human
              Resources Management System.{" "}
            </MuarefDescription>
            <Link href="https://ektefa.net">Learn About Ektefa</Link>
          </MuarefBGImage>
        </MuarefCompatibleWrapper>
      </MuarefSectionContainer>
      <Description>
        Keep your workspace safe for yourself and others. Muaref is our QR based
        attendance system that seamlessly links with Ektefa and all our cloud
        solutions to provide safe and contactless attendance technology.
        <br></br>
        Using <strong>Muaref</strong> with your{" "}
        <a href="https://ektefa.net">Ektefa</a> Ektefa mobile application to
        mark attendance, you don't even need to select Check-In or Check-Out,
        the system will do it for you. Your attendance is updared and reflected
        in front of you within seconds.
      </Description>
      <ValuedWrapper>
        <MuarefCompatibleWrapper>
          <MuarefBGImage className="play-store">
            <Text>DownLoad The Application</Text>
            <Image
              src="https://zadip.com/images/playstore.png"
              alt="ektef"
              width={200}
              height={77}
            />
          </MuarefBGImage>
        </MuarefCompatibleWrapper>
        <ValuedDistributors>
          <Heading>Valued Distributors</Heading>
          <Wrapper>
            <ImageWrapper>
              <TechImage
                src="https://www.zadip.com/en/images/partners/tecsub.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {" "}
                Techsup Marketing Support Co.{" "}
              </ValueLink>
            </ImageWrapper>
            <ImageWrapper>
              <HRGateImage
                src="https://www.zadip.com/en/images/partners/hrgate.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {" "}
                HR Gate.{" "}
              </ValueLink>
            </ImageWrapper>
          </Wrapper>
        </ValuedDistributors>
      </ValuedWrapper>
    </Container>
  );
};
export default MuarefDetails;
