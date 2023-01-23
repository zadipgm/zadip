import * as React from "react";
import { LearnMore } from "./styled.components";
import { useTheme } from "styled-components";
interface IProps {
  color: string;
}
const ViewMore: React.FC<IProps> = ({ color }) => {
  const { translations } = useTheme();
  return (
    <LearnMore color={color}>
      <a href="#">{translations?.viewmore}...</a>
    </LearnMore>
  );
};
export default ViewMore;
