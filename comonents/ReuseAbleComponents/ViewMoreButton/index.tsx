import * as React from "react";
import { LearnMore } from "./styled.components";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
interface IProps {
  color: string;
}
const ViewMore: React.FC<IProps> = ({ color }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <LearnMore color={color}>
      <a href="#">
        {/* <EastOutlinedIcon /> */}
        {t("viewmore")}...
      </a>
    </LearnMore>
  );
};
export default ViewMore;
