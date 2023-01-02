import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Wrapper,
  Conditions,
  Heading,
  TableHeading,
  ConditionWrapper,
} from "./styled.components";
interface IPriceProps {
  name: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
}
interface IProps {
  title: string;
  condition: string;
  data: IPriceProps[];
  classname: string;
}

const PricingTable: React.FC<IProps> = ({
  title,
  condition,
  data,
  classname,
}) => {
  return (
    <Wrapper className={classname}>
      <TableContainer component={Paper}>
        <TableHeading>{title}</TableHeading>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.col1}</TableCell>
                <TableCell align="right">{row.col2}</TableCell>
                <TableCell align="right">{row.col3}</TableCell>
                <TableCell align="right">{row.col4}</TableCell>
                <TableCell align="right">{row.col5}</TableCell>
                <TableCell align="right">{row.col6}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConditionWrapper>
        <Heading>Conditions</Heading>
        <Conditions>{condition}</Conditions>
      </ConditionWrapper>
    </Wrapper>
  );
};
export default PricingTable;
