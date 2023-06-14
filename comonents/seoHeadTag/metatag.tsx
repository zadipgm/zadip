import React from "react";
interface IDataProps {
  id: number;
  Page_Title_en: string;
  Page_Title_ar: string;
  Meta_Description_en: string;
  Meta_Description_ar: string;
  Meta_Keyword_Description_en: string;
  Meta_Keyword_Description_ar: string;
  Meta_og_title_en: string;
  Meta_og_title_ar: string;
  Meta_og_description_en: string;
  Meta_og_description_ar: string;
  Meta_og_image: string;
  Page_Name: string;
  Meta_og_Url: string;
}
interface IData {
  data: IDataProps[];
  locale: string;
}
const MetaTags = ({ data, locale }: IData) => {
  return (
    <>
      <title>{data[0]?.[`Page_Title_${locale}`]}</title>
      <meta
        name="description"
        content={data[0]?.[`Meta_Description_${locale}`]}
        key={"description"}
      />
      <meta
        name="keywords"
        content={data[0]?.[`Meta_Keyword_Description_${locale}`]}
        key={"keywords"}
      />
      <meta property="og:url" content={data[0]?.Meta_og_Url} key={"og:url"} />
      <meta property="og:site_name" content="zadip" key={"og:site_name"} />
      <meta
        property="og:title"
        content={data[0]?.[`Meta_og_title_${locale}`]}
        key={"og:title"}
      />
      <meta
        property="og:description"
        content={data[0]?.[`Meta_og_description_${locale}`]}
        key={"og:description"}
      />
      <meta property="og:type" content="website" key={"og:type"} />
      <meta
        property="og:image:alt"
        content="about zadip"
        key={"og:image:alt"}
      />
      <meta
        property="og:image:type"
        content="image/png"
        key={"og:image:type"}
      />
      <meta
        property="og:image"
        content={data[0]?.Meta_og_image}
        key={"og:image"}
      />
      <meta property="og:image:width" content="200" key={"og:image:width"} />
      <meta property="og:image:height" content="200" key={"og:image:height"} />
    </>
  );
};
export default MetaTags;
