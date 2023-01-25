import * as React from "react";
import { useTheme } from "styled-components";
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
        {list?.map((item) => {
          return <ListItem>{isLTR ? item.name_en : item.name_ar}</ListItem>;
        })}
      </List>
    </>
  );
};
export default ListComponent;
