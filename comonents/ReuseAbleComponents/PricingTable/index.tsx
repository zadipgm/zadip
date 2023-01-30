import * as React from "react";
import {
  Wrapper,
  Conditions,
  Heading,
  TableHeading,
  ConditionWrapper,
  TableRow,
  TableData,
  Table,
  Tbody,
  TableContainer,
} from "./styled.components";
import { useTheme } from "styled-components";
interface IProps {
  title: string;
  condition: string;
  data?: Array<string>;
  data_head?: Array<string>;
  classname: string;
  show?: boolean;
}
const PricingTable: React.FC<IProps> = ({
  title,
  condition,
  data,
  data_head,
  classname,
  show,
}) => {
  const { translations } = useTheme();
  return (
    <Wrapper>
      <TableHeading>{title}</TableHeading>
      <TableContainer>
        <Table>
          <Tbody>
            <TableRow>
              {data_head?.map((item, index) => {
                return <TableData key={index}>{item}</TableData>;
              })}
            </TableRow>
            <TableRow>
              {data?.map((item, index) => {
                return <TableData key={index}>{item}</TableData>;
              })}
            </TableRow>
          </Tbody>
        </Table>
      </TableContainer>
      {show && (
        <ConditionWrapper>
          <Heading>{translations?.conditionsTitle}</Heading>
          <Conditions>{condition}</Conditions>
        </ConditionWrapper>
      )}
    </Wrapper>
  );
};
export default PricingTable;
