import * as React from "react";
import {
  Wrapper,
  TableHeading,
  TableRow,
  TableData,
  Table,
  Thead,
} from "../TamTable/styled.components";
import { useTheme } from "styled-components";
interface IData {
  row_en: string;
  row_ar: string;
  cost: string;
  costs_en?: string;
  costs_ar?: string;
  rows_en: string;
  rows_ar: string;
  costs?: string;
}
interface IProps {
  title: string;
  condition?: string;
  data?: Array<string>;
  data_head?: Array<IData>;
  classname: string;
}
const SmartGateTable: React.FC<IProps> = ({ title, data, data_head }) => {
  const { isLTR, translations } = useTheme();
  return (
    <Wrapper>
      <TableHeading>{title}</TableHeading>
      <Table>
        <TableRow>
          <Thead>
            {isLTR
              ? "For points earned in the system"
              : "لنقاط المكتسبة في النظام"}
          </Thead>
          <Thead>
            {isLTR
              ? "The value of the package is in Saudi riyals *Does not include VAT"
              : "يمة الباقة بالريال السعودي *لا تشمل ضريبة القيمة المضافة"}
          </Thead>
          <Thead>
            {isLTR
              ? "The number of checks to issue permits *Includes all individuals and vehicles in one permit"
              : "عدد عمليات التحقق لإصدار تصاريح *تشمل كل الأفراد والمركبات في التصريح الواحد"}
          </Thead>
          <Thead>{isLTR ? "Package name" : "اسم الباقة"}</Thead>
        </TableRow>

        {data_head?.map((item) => {
          return (
            <TableRow>
              <TableData>{isLTR ? item.row_en : item.row_ar}</TableData>
              <TableData>{isLTR ? item.rows_en : item.rows_ar}</TableData>
              <TableData>{item.cost}</TableData>
              <TableData>{isLTR ? item.costs_en : item.costs_ar}</TableData>
            </TableRow>
          );
        })}
      </Table>
    </Wrapper>
  );
};
export default SmartGateTable;
