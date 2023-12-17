import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// Import styles
import {
  DownloadButton,
  InputSubscription,
  Label,
  NameInput,
  NumberWrapper,
  Root,
} from "./style";
import OtpComponent from "../otpComponent";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
let obj = {
  input1: "",
  input2: "",
  input3: "",
  input4: "",
  input5: "",
  input6: "",
  input7: "",
  input8: "",
  input9: "",
  input10: "",
  input11: "",
  input12: "",
  input13: "",
  input14: "",
  input15: "",
  input16: "",
  input17: "",
  input18: "",
  input19: "",
  input20: "",
  input21: "",
  input22: "",
  input23: "",
  input24: "",
  input25: "",
  input26: "",
  user1: "",
  user2: "",
  user3: "",
  user4: "",
  user5: "",
  user6: "",
};
const MyPdfViewer = ({ pdfUrl }) => {
  const [data, setData] = React.useState(obj);
  const [show, setShow] = React.useState(false);
  const downloadPdfDocument = () => {
    setShow(true);
    setTimeout(() => {
      const input = document.getElementById("rootElementId");
      html2canvas(input, { scale: 1.5 }).then((canvas) => {
        const componentWidth = input.offsetWidth;
        const componentHeight = input.offsetHeight;
        const orientation = componentWidth >= componentHeight ? "l" : "p";
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation,
          unit: "px",
        });
        pdf.internal.pageSize.width = componentWidth;
        pdf.internal.pageSize.height = componentHeight;
        pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        pdf.save("ektefa_form.pdf");
      });
    }, 300);
  };
  const hanldeotp = () => {};
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Root id="rootElementId">
        <Worker
          workerUrl={`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfUrl}></Viewer>
        </Worker>
        <InputSubscription type="checkbox" className="new" />
        <InputSubscription type="checkbox" className="renew" />
        <InputSubscription type="checkbox" className="newsub" />
        <InputSubscription type="checkbox" className="renewsub" />
        <NumberWrapper>
          <OtpComponent otpNumber={10} width={"1.78em"} />
        </NumberWrapper>
        <NumberWrapper className="fifteenlength">
          <OtpComponent otpNumber={15} width={"1.78em"} />
        </NumberWrapper>
        <NameInput className="first">
          {show === true ? (
            <>{data.input1}</>
          ) : (
            <input onChange={handleChange} type="text" name="input1" />
          )}
        </NameInput>
        <NameInput className="second">
          {show === true ? (
            <>{data.input2}</>
          ) : (
            <input onChange={handleChange} type="text" name="input2" />
          )}
        </NameInput>
        <InputSubscription type="checkbox" className="company" />
        <InputSubscription type="checkbox" className="org" />
        <NumberWrapper className="ninelength">
          <OtpComponent otpNumber={9} width={"1.75em"} />
        </NumberWrapper>
        <NameInput className="input3">
          {show === true ? (
            <>{data.input3}</>
          ) : (
            <input onChange={handleChange} type="text" name="input3" />
          )}
        </NameInput>
        <NameInput className="input4">
          {show === true ? (
            <>{data.input4}</>
          ) : (
            <input onChange={handleChange} type="text" name="input4" />
          )}
        </NameInput>
        <NameInput className="input5">
          {show === true ? (
            <>{data.input5}</>
          ) : (
            <input onChange={handleChange} type="text" name="input5" />
          )}
        </NameInput>
        <NameInput className="input6">
          {show === true ? (
            <>{data.input6}</>
          ) : (
            <input onChange={handleChange} type="text" name="input6" />
          )}
        </NameInput>
        <NameInput className="input7">
          {show === true ? (
            <>{data.input7}</>
          ) : (
            <input onChange={handleChange} type="text" name="input7" />
          )}
        </NameInput>
        <NameInput className="input8">
          {show === true ? (
            <>{data.input8}</>
          ) : (
            <input onChange={handleChange} type="text" name="input8" />
          )}
        </NameInput>
        <NameInput className="input9">
          {show === true ? (
            <>{data.input9}</>
          ) : (
            <input onChange={handleChange} type="text" name="input9" />
          )}
        </NameInput>
        <NameInput className="input10">
          {show === true ? (
            <>{data.input10}</>
          ) : (
            <input onChange={handleChange} type="text" name="input10" />
          )}
        </NameInput>
        <NameInput className="input11">
          {show === true ? (
            <>{data.input11}</>
          ) : (
            <input onChange={handleChange} type="text" name="input11" />
          )}
        </NameInput>{" "}
        <NameInput className="input12">
          {show === true ? (
            <>{data.input12}</>
          ) : (
            <input onChange={handleChange} type="text" name="input12" />
          )}
        </NameInput>{" "}
        <NameInput className="input13">
          {show === true ? (
            <>{data.input13}</>
          ) : (
            <input onChange={handleChange} type="text" name="input13" />
          )}
        </NameInput>{" "}
        <NameInput className="input14">
          {show === true ? (
            <>{data.input14}</>
          ) : (
            <input onChange={handleChange} type="text" name="input14" />
          )}
        </NameInput>{" "}
        <NameInput className="input15">
          {show === true ? (
            <>{data.input15}</>
          ) : (
            <input onChange={handleChange} type="text" name="input15" />
          )}
        </NameInput>{" "}
        <NameInput className="input16">
          {show === true ? (
            <>{data.input16}</>
          ) : (
            <input onChange={handleChange} type="text" name="input16" />
          )}
        </NameInput>
        <NumberWrapper className="Tenlength">
          <OtpComponent otpNumber={10} width={"2.1em"} />
        </NumberWrapper>
        <NameInput className="input17">
          {show === true ? (
            <>{data.input17}</>
          ) : (
            <input onChange={handleChange} type="text" name="input17" />
          )}
        </NameInput>{" "}
        <NameInput className="input18">
          {show === true ? (
            <>{data.input18}</>
          ) : (
            <input onChange={handleChange} type="text" name="input18" />
          )}
        </NameInput>
        <InputSubscription type="checkbox" className="checkbox7" />
        <InputSubscription type="checkbox" className="checkbox8" />
        <InputSubscription type="checkbox" className="checkbox9" />
        <InputSubscription type="checkbox" className="checkbox10" />
        <InputSubscription type="checkbox" className="checkbox11" />
        <InputSubscription type="checkbox" className="checkbox12" />
        <NameInput className="user1">
          {show === true ? (
            <>{data.user1}</>
          ) : (
            <input onChange={handleChange} type="text" name="user1" />
          )}
        </NameInput>
        <NumberWrapper className="Tenlength1">
          <OtpComponent otpNumber={10} width={"2.1em"} />
        </NumberWrapper>
        <NameInput className="user2">
          {show === true ? (
            <>{data.user2}</>
          ) : (
            <input onChange={handleChange} type="text" name="user2" />
          )}
        </NameInput>
        <NameInput className="user3">
          {show === true ? (
            <>{data.user3}</>
          ) : (
            <input onChange={handleChange} type="text" name="user3" />
          )}
        </NameInput>
        <NameInput className="user4">
          {show === true ? (
            <>{data.user4}</>
          ) : (
            <input onChange={handleChange} type="text" name="user4" />
          )}
        </NameInput>
        <NameInput className="user5">
          {show === true ? (
            <>{data.user5}</>
          ) : (
            <input onChange={handleChange} type="text" name="user5" />
          )}
        </NameInput>
        <NameInput className="user6">
          {show === true ? (
            <>{data.user6}</>
          ) : (
            <input onChange={handleChange} type="text" name="user6" />
          )}
        </NameInput>
        <NumberWrapper className="Tenlength2">
          <OtpComponent otpNumber={10} width={"2.1em"} />
        </NumberWrapper>
        <NameInput className="input19">
          {show === true ? (
            <>{data.input19}</>
          ) : (
            <input onChange={handleChange} type="text" name="input19" />
          )}
        </NameInput>
        <NameInput className="input20">
          {show === true ? (
            <>{data.input20}</>
          ) : (
            <input onChange={handleChange} type="text" name="input20" />
          )}
        </NameInput>
        <NameInput className="input21">
          {show === true ? (
            <>{data.input21}</>
          ) : (
            <input onChange={handleChange} type="text" name="input21" />
          )}
        </NameInput>
        <NameInput className="input22">
          {show === true ? (
            <>{data.input22}</>
          ) : (
            <input onChange={handleChange} type="text" name="input22" />
          )}
        </NameInput>
        <NameInput className="input23">
          {show === true ? (
            <>{data.input23}</>
          ) : (
            <input onChange={handleChange} type="text" name="input23" />
          )}
        </NameInput>
        <NameInput className="input24">
          {show === true ? (
            <>{data.input24}</>
          ) : (
            <input onChange={handleChange} type="text" name="input24" />
          )}
        </NameInput>
        <NameInput className="input25">
          {show === true ? (
            <>{data.input25}</>
          ) : (
            <input onChange={handleChange} type="text" name="input25" />
          )}
        </NameInput>
        <NameInput className="input26">
          {show === true ? (
            <>{data.input26}</>
          ) : (
            <input onChange={handleChange} type="text" name="input26" />
          )}
        </NameInput>
      </Root>
      <DownloadButton onClick={downloadPdfDocument}>
        Download Pdf
      </DownloadButton>
    </>
  );
};
export default MyPdfViewer;
