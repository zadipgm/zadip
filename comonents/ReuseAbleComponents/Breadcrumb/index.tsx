import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "./styled.components";

interface IProps {
  color: string;
  breadcrumbs: any;
}
const Breadcrumb: React.FC<IProps> = ({ color, breadcrumbs }) => {
  // "#0196e3"
  return (
    <Wrapper>
      <Stack
        spacing={2}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          style={{ color: color }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Wrapper>
  );
};
export default Breadcrumb;
