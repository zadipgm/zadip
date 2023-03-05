import * as React from "react";
import AccurateSvg from "../../../public/icons/acurateSvg";
import SecurehSvg from "../../../public/icons/secureSvg";
import TransactionSvg from "../../../public/icons/transactionSvg";
import DownLoadButton from "../ReuseableButton";
import VedioComponent from "../Vedio";
import {
  AdvantageWrapper,
  AdvantageContainer,
  Heading,
  Description,
  Wrapper,
  VedioLinkWrapper,
  VideoWrapper,
  Video,
} from "./styled.components";
import data from "../../../DataLayer/services.json";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
interface IProps {
  id: number;
  title_en: string;
  title_ar: string;
  icon: string;
  description_en: string;
  description_ar: string;
}
interface Idata {
  data?: IProps[];
  poster?: string;
  path?: string;
}
const ServicesAdvantageSection = ({ data, poster, path }: Idata) => {
  const { isLTR, colors } = useTheme();
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <AdvantageWrapper>
      <AdvantageContainer>
        {data?.map((item) => {
          return (
            <Wrapper key={item.id}>
              <IconComponent
                fill={colors.lightBlue}
                width={"25px"}
                height={"25px"}
                icon={item.icon}
              />
              <Heading>{isLTR ? item.title_en : item.title_ar}</Heading>
              <Description>
                {isLTR ? item.description_en : item.description_ar}
              </Description>
            </Wrapper>
          );
        })}
      </AdvantageContainer>
      <VideoWrapper>
        <Video
          poster={poster}
          className="videoTag"
          autoPlay
          loop
          muted
          controls
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src={path} type="video/mp4" />
        </Video>
      </VideoWrapper>
    </AdvantageWrapper>
  );
};
export default ServicesAdvantageSection;
