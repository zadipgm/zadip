import * as React from "react";
interface IProps {
  all_page_content?: string;
}
const GtmScript = ({ all_page_content }: IProps) => {
  const findScriptOpenTag = all_page_content?.search("<script>");
  const findScriptCloseTag = all_page_content?.search("</script>");
  const findScript = all_page_content?.substring(
    findScriptOpenTag + 8,
    findScriptCloseTag
  );
  return (
    <script
      id="gtm-tags"
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
    ${findScript}
`,
      }}
    />
  );
};
export default GtmScript;
