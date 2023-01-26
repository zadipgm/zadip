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
    <Wrapper className={classname}>
      <TableHeading>{title}</TableHeading>
      <Table>
        <Tbody>
          <TableRow>
            {data_head?.map((item) => {
              return <TableData>{item}</TableData>;
            })}
          </TableRow>
          <TableRow>
            {data?.map((item) => {
              return <TableData>{item}</TableData>;
            })}
          </TableRow>
        </Tbody>
      </Table>
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
