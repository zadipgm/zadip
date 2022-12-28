import * as React from "react";
import FacebookSvg from "../../../public/icons/facebookSvg";
import LinkedInSvg from "../../../public/icons/linkedinSvg";
import TwitterSvg from "../../../public/icons/twitterSvg";
import { SocialIconsWrapper } from "./styled.components";
const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <FacebookSvg
        className="facebook"
        width="20px"
        height="20px"
        fill="#fff"
      />
      <TwitterSvg className="twitter" width="20px" height="20px" fill="#fff" />
      <LinkedInSvg
        className="linkdein"
        width="20px"
        height="20px"
        fill="#fff"
      />
    </SocialIconsWrapper>
  );
};
export default SocialIcons;
