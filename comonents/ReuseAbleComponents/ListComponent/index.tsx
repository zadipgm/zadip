import * as React from "react";
import { useTheme } from "styled-components";
import DownArrowSvg from "../../../public/icons/downArrowSvg";
import IconDownArrowHead from "../../../public/icons/dropdownArrowSvg";
import { List, ListItem } from "./styled.components";
interface IList {
  name_en?: string;
  name_ar?: string;
}
interface IProps {
  list?: IList[];
}
const ListComponent = ({ list }: IProps) => {
  const { isLTR } = useTheme();
  return (
    <>
      <List>
        {list?.map((item, index) => {
          return (
            <ListItem key={index}>
              <IconDownArrowHead fill="#2193b0" />
              {isLTR ? item.name_en : item.name_ar}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default ListComponent;
