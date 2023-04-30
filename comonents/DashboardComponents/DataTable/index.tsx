import * as React from "react";
import {
  ActionWrapper,
  Container,
  EntriesWrapper,
  Filter,
  InnerWrapper,
  Input,
  SearchWrapper,
  Select,
  Wrapper,
  Table,
  TableData,
  Row,
  SortArrow,
  Data,
  PaginationWrapper,
  PaginationOuterDiv,
  ActionList,
  ActionListItems,
  Actions,
} from "./style";
import EditSvg from "public/icons/editSvg";
import ArrowUpSvg from "public/icons/arrowUpsvg";
import ArrowDown2Svg from "public/icons/arrowdown2svg";
import { useTheme } from "styled-components";
import DeleteSvg from "public/icons/deleteSvg";
import Pagination from "../ReuseableComponents/Pagnation";
import ViewMoreSvg from "public/icons/viewmoreSvg";
import {
  HandleDescending,
  HandleAscending,
  RequestSearch,
} from "../hooks/useSorting";
import ArrowDown from "public/icons/arrowDownSvg";

interface Iprocedure {
  DOB?: string;
  total_trainings?: string;
  pending_trainings?: string;
  completed_trainings?: string;
  adress?: string;
  name_ar?: string;
  name_en?: string;
  trainer?: string;
  city_ar?: string;
  city_en?: string;
  phone?: string;
}
interface TableData {
  id: number;
  name_en?: string;
  name_ar?: string;
  company_en?: string;
  company_ar?: string;
  phone?: string;
  email?: string;
  status?: string;
  trainings?: number;
  rating?: string;
  trainer?: string;
  rating_en?: string;
  rating_ar?: string;
  last_login_date?: string;
  city_ar?: string;
  city_en?: string;
  product_en?: string;
  product_ar?: string;
  training_date?: string;
  slot?: string;
  procedures?: Iprocedure[];
}
interface IProps {
  data: TableData[];
  title: string;
  showFilter: boolean;
}
const DataTable = ({ data, title, showFilter }: IProps) => {
  const { colors } = useTheme();
  const [searchvalue, setSearchvalue] = React.useState(data);
  const [filterKey, setFilterKey] = React.useState("id");
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [showActions, setShowActions] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage, setRecordPerPage] = React.useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  React.useEffect(() => {
    let value = currentRecords;
    setSearchvalue(value);
  }, [indexOfLastRecord, indexOfFirstRecord]);

  // Entries to show
  const HandleViewDetails = (id) => {
    setActive(id);
    setExpanded(!expanded);
  };
  const handlerChangeRows = (e) => {
    let value = e.target.value;
    console.log(typeof value);
    setRecordPerPage(value);
  };

  //Select column to search

  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    let filtterArray = [];
    data.filter((obj) => {
      return filtterArray.push(obj[value]);
    });
    setFilterKey(value);
  };

  // Table Header
  const renderTableHeader = () => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return (
        <TableData key={index} className="table-header">
          <Data>{key.toUpperCase()}</Data>
          {key.toUpperCase() === "PROCEDURES" ? (
            ""
          ) : (
            <SortArrow>
              <div onClick={() => HandleAscending(key, setSearchvalue)}>
                <ArrowUpSvg fill={colors.gray2} />
              </div>
              <div onClick={() => HandleDescending(key, setSearchvalue)}>
                <ArrowDown2Svg fill={colors.gray2} />
              </div>
            </SortArrow>
          )}
        </TableData>
      );
    });
  };
  const actionHandler = (id) => {
    setOpen(!open);
    setShowActions(id);
  };
  const renderTableNestedHeader = () => {
    let header = Object.keys(data[0].procedures[0]);
    return header.map((key, index) => {
      return (
        <TableData key={index} className="table-header">
          <Data>{key.toUpperCase()}</Data>
        </TableData>
      );
    });
  };
  // Column keys
  const renderColumnKeys = () => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return (
        <option key={index} value={key}>
          {key}
        </option>
      );
    });
  };
  return (
    <Container>
      <h1>List of all {title}</h1>
      {showFilter && (
        <Wrapper>
          <Filter>
            <span>Filter By Column</span>
            <Select onChange={(e) => handlerChange(e)}>
              {renderColumnKeys()}
            </Select>
          </Filter>
          <SearchWrapper>
            <Input
              type="search"
              onChange={(e) =>
                RequestSearch(
                  e.target.value,
                  filterKey,
                  currentRecords,
                  setSearchvalue
                )
              }
              placeholder={`Search record by ${filterKey}`}
            />
          </SearchWrapper>
          <EntriesWrapper>
            <span>Show</span>
            <Select onChange={(e) => handlerChangeRows(e)}>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </Select>
            <span>Entries</span>
          </EntriesWrapper>
        </Wrapper>
      )}
      <Table>
        <Row>{renderTableHeader()}</Row>
        {searchvalue.slice(0, recordsPerPage as number).map((item) => {
          let keys = Object.keys(item).filter(
            (procedure) => procedure !== "procedures"
          );

          return (
            <>
              <Row key={item.id}>
                {keys.map((key) => {
                  return <TableData>{item[key]}</TableData>;
                })}
                <TableData>
                  <ActionWrapper onClick={() => actionHandler(item.id)}>
                    <Actions>
                      <div>Actions</div>
                      <ArrowDown fill={colors.gray2} />
                    </Actions>
                    {open && showActions === item.id && (
                      <ActionList>
                        <ActionListItems>
                          <InnerWrapper>
                            <EditSvg
                              fill={colors.darkBlue}
                              width="15px"
                              height="15px"
                            />
                          </InnerWrapper>
                          <span>Edit</span>
                        </ActionListItems>
                        <ActionListItems>
                          <InnerWrapper className="delete">
                            <DeleteSvg
                              fill={colors.red}
                              width="15px"
                              height="15px"
                            />
                          </InnerWrapper>
                          <span>Delete</span>
                        </ActionListItems>
                        <ActionListItems
                          onClick={() => HandleViewDetails(item.id)}
                        >
                          <InnerWrapper>
                            <ViewMoreSvg
                              fill={colors.lightBlue}
                              width="15px"
                              height="15px"
                            />
                          </InnerWrapper>
                          <span>View</span>
                        </ActionListItems>
                      </ActionList>
                    )}
                  </ActionWrapper>
                </TableData>
              </Row>
              {active === item.id && (
                <Table className={active === item.id ? "details" : ""}>
                  <h3>{title} detail</h3>
                  <Row className="details-row">{renderTableNestedHeader()}</Row>
                  {item.procedures.map((detail) => {
                    return (
                      <Row key={item.id} className="details-row">
                        {Object.keys(detail).map((detail_key) => {
                          return <TableData>{detail[detail_key]}</TableData>;
                        })}
                      </Row>
                    );
                  })}
                </Table>
              )}
            </>
          );
        })}
      </Table>
      <PaginationWrapper>
        <PaginationOuterDiv>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </PaginationOuterDiv>
        <div>
          Showing {currentRecords[0].id} to{" "}
          {currentRecords[currentRecords.length - 1].id} of {data.length}{" "}
          entries
        </div>
      </PaginationWrapper>
    </Container>
  );
};
export default DataTable;
// import * as React from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
