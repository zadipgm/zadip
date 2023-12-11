import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import React, { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import MyPdfViewer from "./pdfviewer";
import { EktefaFormContainer, PdflogoTitle } from "./style";
import { BreadCrumbWrapper } from "comonents/AboutUS/styled.components";
import AnimationBar from "comonents/ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import Breadcrumb from "comonents/ReuseAbleComponents/Breadcrumb";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const EktefaForm = () => {
  const pdfUrl = "/images/ektefa_form.pdf";
  const { colors, translations } = useTheme();
  const divRef = React.useRef(null);
  const breadcrumbs = [
    <Links underline="hover" key="1" color={colors.lightBlue} href="/">
      {translations?.home}
    </Links>,
    <Typography
      key="3"
      color="text.primary"
      style={{ color: colors.lightBlue }}
    >
      {"Ektefa Form"}
    </Typography>,
  ];
  return (
    <EktefaFormContainer>
      <BreadCrumbWrapper>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.ektefasubsForm}
        description={""}
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />

      <MyPdfViewer pdfUrl={pdfUrl} />
    </EktefaFormContainer>
  );
};

export default EktefaForm;
