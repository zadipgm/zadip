import * as React from "react";
import {
  Wrapper,
  TableHeading,
  TableRow,
  TableData,
  Table,
  Thead,
} from "./styled.components";
import { useTheme } from "styled-components";
import { TableContainer } from "../../ReuseAbleComponents/PricingTable/styled.components";
interface IData {
  row_en: string;
  row_ar: string;
  cost: string;
  rows_en: string;
  rows_ar: string;
  costs?: string;
  costs_en?: string;
  costs_ar?: string;
}
interface IProps {
  title: string;
  condition?: string;
  data?: Array<string>;
  data_head?: Array<IData>;
  classname: string;
}
const TamTable: React.FC<IProps> = ({ title, data, data_head }) => {
  const { isLTR, translations } = useTheme();
  return (
    <Wrapper>
      <TableHeading>{title}</TableHeading>
      <TableContainer>
        <Table>
          <TableRow>
            <Thead>{isLTR ? "Transation" : "العملية"}</Thead>
            <Thead>{isLTR ? "Cost SAR" : "الرسوم (ريال السعودي)"}</Thead>
            <Thead>{isLTR ? "Transation" : "العملية"}</Thead>
            <Thead>{isLTR ? "Cost SAR" : "الرسوم (ريال السعودي)"}</Thead>
          </TableRow>

          {data_head?.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableData>{isLTR ? item.row_en : item.row_ar}</TableData>
                <TableData>{item.cost}</TableData>
                <TableData>{isLTR ? item.rows_en : item.rows_ar}</TableData>
                <TableData>{item.costs}</TableData>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
export default TamTable;
