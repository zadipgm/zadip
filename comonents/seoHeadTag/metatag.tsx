import React from "react";
interface IDataProps {
  id: number;
  Page_Title: string;
  Meta_Description: string;
  Meta_Keyword_Description: string;
  Meta_og_title: string;
  Meta_og_description: string;
  Meta_og_image: string;
  Page_Name: string;
}
interface IData {
  data: IDataProps[];
}
const MetaTags = ({ data }: IData) => {
  return (
    <>
      <title>{data[0]?.Page_Title}</title>
      <meta
        name="description"
        content={data[0]?.Meta_Description}
        key={"description"}
      />
      <meta
        name="keywords"
        content={data[0]?.Meta_Keyword_Description}
        key={"keywords"}
      />
      <meta property="og:url" content="https://zadip.sa" key={"og:url"} />
      <meta property="og:site_name" content="zadip" key={"og:site_name"} />
      <meta
        property="og:title"
        content={data[0]?.Meta_og_title}
        key={"og:title"}
      />
      <meta
        property="og:description"
        content={data[0]?.Meta_og_description}
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
