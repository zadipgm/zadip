import * as React from "react";
import {
  ComprehensiveContainer,
  Description,
  DescriptionVision,
  Title,
  ImageWrapper,
  Wrapper,
  VisionImage,
} from "./styled.components";
import Image from "next/image";
import visiionIMage2030 from "../../../public/images/saudi-vision.jpg";

const ComprehensiveAddedValue = () => {
  return (
    <ComprehensiveContainer>
      <Wrapper>
        <ImageWrapper>
          <Image src={visiionIMage2030} alt={"2030"} width={526} height={442} />
        </ImageWrapper>
        <Description>
          <Title>Comprehensive Added Value</Title>
          <DescriptionVision>
            The Vision 2030 initiative by the Custodian of the Two Holy Mosques,
            King Salman Bin Abdulaziz Al-Saud, may Allah protect him, derives
            its importance from the fast-paced and dynamic world we live in. The
            solutions of tomorrow are the ideas that we work on today. <br></br>
            <br></br>ZADIP has been tirelessly working with its esteemed group
            of partners and technology enthusiasts to bring emerging
            technologies into the service of our country and her people.
            <br></br>
            <br></br> We present our humble acknowledgement and determination to
            this ambitious initiative and pray for the success and pride that it
            would bring to our countrymen and the Muslim ummah.
          </DescriptionVision>
        </Description>
      </Wrapper>
      <Wrapper>
        <Description>
          <Title>ZADIP GROUP</Title>
          <DescriptionVision>
            <strong>ZADIP Group</strong>, has <span> over 7000 customers </span>
            all over KSA and operates from two offices located in Riyadh and
            Dammam. Our vigilant focus on emerging technologies in the global
            arena and their local relevance is where our service proposition
            becomes unparalleled and fits every business need. <br></br>
            <br></br>We have successfully tied partnerships with global leaders
            in technology, advertising and building frameworks harnessing best
            practices to enhance the dependability of our solutions and
            offerings.
          </DescriptionVision>
        </Description>
        <ImageWrapper>
          <VisionImage
            src="https://www.zadip.com/en/images/logo-full-color.png"
            width={"100%"}
            height={"auto"}
          />
        </ImageWrapper>
      </Wrapper>
    </ComprehensiveContainer>
  );
};
export default ComprehensiveAddedValue;
