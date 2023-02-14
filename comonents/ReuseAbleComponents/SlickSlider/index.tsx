import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, SliderWrapper, Image } from "./styled.components";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
interface INewsDetails {
  date?: string;
  image?: string;
  description_en?: string;
  description_ar?: string;
}
interface sliderDataProps {
  image?: string;
  description_en?: string;
  description_ar?: string;
  id?: string;
  news_details?: INewsDetails[];
}
interface IProps {
  sliderData?: sliderDataProps[];
  rows?: number;
  sliderToShow: number;
  classname: string;
  autoplay: boolean;
  autoplaySpeed: number;
  speed?: number;
}
const SliderSlick: React.FC<IProps> = ({
  sliderData,
  rows,
  sliderToShow,
  classname,
  autoplay,
  autoplaySpeed,
  speed,
}) => {
  const router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    speed: speed,
    autoplay: autoplay,
    autoplaySpeed: 0,
    slidesToShow: sliderToShow,
    slidesToScroll: 1,
    rows: rows,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextIcon: false,
          prevIcon: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextIcon: false,
          prevIcon: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderContainer className={classname}>
      <Slider {...settings}>
        {sliderData?.map((item, index) => {
          return (
            <SliderWrapper className={classname} key={index}>
              <Image src={item.image} alt={item.id} width={100} height={100} />
            </SliderWrapper>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
export default SliderSlick;
