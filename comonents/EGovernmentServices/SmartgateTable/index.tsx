import * as React from "react";
import {
  Wrapper,
  TableHeading,
  TableRow,
  TableData,
  Table,
  Thead,
  TableDescription,
  TableWrapper,
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
interface IHead {
  name_ar: string;
  name_en: string;
}

interface ITableData {
  row1_en: string;
  row1_ar: string;
  row2_en: string;
  row2_ar: string;
  row3_en: string;
  row3_ar: string;
  row4_en: string;
  row4_ar: string;
}
interface IProps {
  title: string;
  condition?: string;
  data?: Array<string>;
  data_head?: Array<IData>;
  classname: string;
  head?: Array<IHead>;
  second_head?: Array<IHead>;
  table_data?: Array<ITableData>;
}
const SmartGateTable: React.FC<IProps> = ({
  title,
  data,
  data_head,
  head,
  second_head,
  table_data,
}) => {
  const { isLTR, translations } = useTheme();
  return (
    <Wrapper>
      <TableHeading>{title}</TableHeading>
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              {head?.map((item, index) => {
                return (
                  <Thead key={index}>
                    {isLTR ? item.name_en : item.name_ar}
                  </Thead>
                );
              })}
            </TableRow>
          </thead>
          <tbody>
            {data_head?.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableData>{isLTR ? item.row_en : item.row_ar}</TableData>
                  <TableData>{isLTR ? item.rows_en : item.rows_ar}</TableData>
                  <TableData>{item.cost}</TableData>
                  <TableData>{isLTR ? item.costs_en : item.costs_ar}</TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
      <TableDescription>
        {translations?.smartgateTableDescription}
      </TableDescription>

      <TableHeading>
        {isLTR
          ? "The cost of subscription packages for Kashif service"
          : "تكلفة باقات الاشتراك لخدمة كاشف"}
      </TableHeading>
      <TableWrapper>
        <Table className="second-table">
          <thead>
            <TableRow>
              {second_head?.map((item, index) => {
                return (
                  <Thead key={index}>
                    {isLTR ? item.name_en : item.name_ar}
                  </Thead>
                );
              })}
            </TableRow>
          </thead>
          <tbody>
            {table_data?.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableData>{isLTR ? item.row1_en : item.row1_ar}</TableData>
                  <TableData>{isLTR ? item.row2_en : item.row2_ar}</TableData>
                  <TableData>{isLTR ? item.row3_en : item.row3_ar}</TableData>
                  <TableData>{isLTR ? item.row4_en : item.row4_ar}</TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
      <TableDescription>
        {translations?.smartgateSecondtableDescription}
      </TableDescription>
    </Wrapper>
  );
};
export default SmartGateTable;
