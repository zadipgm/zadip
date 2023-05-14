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
  Data,
  PaginationWrapper,
  PaginationOuterDiv,
  ActionList,
  ActionListItems,
  Actions,
  CardViewContainer,
  CardList,
  CardListItems,
  CardListItemsWrapper,
  Button,
  DataView,
  DataViewWrapper,
  TableDataWrapper,
} from "./style";
import EditSvg from "public/icons/editSvg";
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
import EmailSvg from "public/icons/emailSvg";
import PhoneSvg from "public/icons/phoneSvg";
import IDsvg from "public/icons/idSvg";
import ActiveSvg from "public/icons/active";
import CardUserSvg from "public/icons/carduserSvg";
import InActiveSvg from "public/icons/inactive";
import TableView from "public/icons/tableView";
import GridView from "public/icons/gridView";
import StarSvg from "public/icons/starsSvg";
import AccurateSvg from "public/icons/acurateSvg";
import { filterByLocale } from "../hooks/filterByLocale";
import SortUp from "public/icons/sortUp";
import SortDown from "public/icons/sortDown";
import { Router, useRouter } from "next/router";
import CertificateSvg from "public/icons/certificateSvg";
import CalendarSvg from "public/icons/calendarSvg";

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
  certificate_number?: string;
  product_en?: string;
  product_ar?: string;
  training_date?: string;
  slot?: string;
  expire_date?: string;
  isEligibility?: boolean;
  procedures?: Iprocedure[];
}
interface IProps {
  data: TableData[];
  title: string;
  showFilter: boolean;
  setCertificate?: (param) => void;
  isEditable?: boolean;
  generateCertificate?: boolean;
  nestedTable?: boolean;
  renewCertificate?: boolean;
  view?: boolean;
  isDelete?: boolean;
}
const DataTable = ({
  data,
  title,
  showFilter,
  setCertificate,
  isEditable,
  generateCertificate,
  nestedTable,
  renewCertificate,
  view,
  isDelete,
}: IProps) => {
  const { colors, locale } = useTheme();
  const router = useRouter();
  const [searchvalue, setSearchvalue] = React.useState(data);
  const [filterKey, setFilterKey] = React.useState("id");
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [showActions, setShowActions] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage, setRecordPerPage] = React.useState(10);
  const [dataView, setDataView] = React.useState("table");
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
    return filterByLocale(locale, header).map((key, index) => {
      return (
        <TableData key={index} className="table-header">
          <TableDataWrapper>
            <Data>{key.toUpperCase()}</Data>
            {key.toUpperCase() === "PROCEDURES" ? (
              ""
            ) : (
              <div>
                <span
                  onClick={() => HandleAscending(key, setSearchvalue, data)}
                >
                  <SortUp fill={colors.gray1} width="15px" height="15px" />
                </span>
                <span
                  onClick={() => HandleDescending(key, setSearchvalue, data)}
                >
                  <SortDown fill={colors.gray1} width="15px" height="15px" />
                </span>
              </div>
            )}
          </TableDataWrapper>
        </TableData>
      );
    });
  };

  const actionHandler = (id) => {
    setOpen(!open);
    setShowActions(id);
  };
  const renderTableNestedHeader = () => {
    let header = Object.keys(data[0]?.procedures[0]);
    return (
      header &&
      header.map((key, index) => {
        return (
          <TableData className="table-header" key={index}>
            {key.toUpperCase()}
          </TableData>
        );
      })
    );
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

  const handleDataView = (view) => {
    setDataView(view);
  };
  const renewCertificateHandler = (item) => {
    // setCertificate(item);
    // router.push("/dashboard/certificate/generate");
  };
  const addOneYear = (date) => {
    date.setFullYear(date.getFullYear() + 1);
    return date;
  };

  // April 20, 2022
  const date = new Date();

  const newDate = addOneYear(date);

  // April 20, 2023
  let arFormat = "en-u-ca-islamic-umalqura-nu-latn"; // use islamic-umalqura calendar (most modern)
  let enFormat = "en-US";
  let myDate = new Date(newDate); // today's date

  let english = new Intl.DateTimeFormat(enFormat).format(myDate);
  let arabic = new Intl.DateTimeFormat(arFormat).format(myDate);
  const generateCertificateHandler = (item) => {
    setCertificate(item);
    router.push({
      pathname: `/${locale}/dashboard/certificate/generate`,
      query: {
        idnumber: item.ID_number,
        certificate_number: "004",
        expire_date: english,
        name: item.name_en,
        idnumberArabic: item.ID_number,
        certificate_numberArabic: "004",
        expire_dateArabic: arabic,
        nameArabic: item.name_ar,
      },
    });
  };
  return (
    <Container>
      <h1>List of all {title}</h1>
      <DataViewWrapper>
        <DataView
          onClick={() => handleDataView("table")}
          className={dataView === "table" ? "active" : ""}
        >
          <TableView />
          <span>Table View</span>
        </DataView>
        <DataView
          onClick={() => handleDataView("grid")}
          className={dataView === "grid" ? "active" : ""}
        >
          <GridView />
          <span>Grid View</span>
        </DataView>
      </DataViewWrapper>
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
      {dataView === "table" && (
        <Table>
          <Row>{renderTableHeader()}</Row>
          {searchvalue.slice(0, recordsPerPage as number).map((item) => {
            let keys = Object.keys(item).filter(
              (procedure) => procedure !== "procedures"
            );

            return (
              <>
                <Row key={item.id}>
                  {filterByLocale(locale, keys).map((key, i) => {
                    return <TableData key={i}>{`${item[key]}`}</TableData>;
                  })}
                  <TableData>
                    <ActionWrapper onClick={() => actionHandler(item.id)}>
                      <Actions>
                        <div>Actions</div>
                        <ArrowDown fill={colors.gray2} />
                      </Actions>
                      {open && showActions === item.id && (
                        <ActionList
                          className={showActions === item.id ? "show" : "hide"}
                        >
                          {isEditable && (
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
                          )}
                          {isDelete && (
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
                          )}
                          {renewCertificate && (
                            <ActionListItems
                              onClick={() => renewCertificateHandler(item)}
                            >
                              <InnerWrapper>
                                <ViewMoreSvg
                                  fill={colors.lightBlue}
                                  width="15px"
                                  height="15px"
                                />
                              </InnerWrapper>
                              <span>Renew Certificate</span>
                            </ActionListItems>
                          )}
                          {generateCertificate && (
                            <ActionListItems
                              onClick={() => generateCertificateHandler(item)}
                            >
                              <InnerWrapper>
                                <ViewMoreSvg
                                  fill={colors.lightBlue}
                                  width="15px"
                                  height="15px"
                                />
                              </InnerWrapper>
                              <span>Generate Certificate</span>
                            </ActionListItems>
                          )}
                          {view && (
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
                          )}
                        </ActionList>
                      )}
                    </ActionWrapper>
                  </TableData>
                </Row>
                <Row className={active === item.id ? "show" : "hide"}>
                  <br></br>
                  {nestedTable && <Row> {renderTableNestedHeader()}</Row>}
                  {item.procedures &&
                    item.procedures.map((detail) => {
                      return (
                        <Row key={item.id} className="details-row">
                          {Object.keys(detail).map((detail_key, i) => {
                            return (
                              <TableData key={i}>
                                {detail[detail_key]}
                              </TableData>
                            );
                          })}
                        </Row>
                      );
                    })}
                  <br></br>
                </Row>
              </>
            );
          })}
        </Table>
      )}

      {dataView === "grid" && (
        <CardViewContainer>
          <CardList>
            {searchvalue.slice(0, recordsPerPage as number).map((item) => {
              let keys = Object.keys(item).filter(
                (procedure) => procedure !== "procedures"
              );
              return (
                <>
                  <CardListItems
                    key={item.id}
                    className={item.status === "In-active" ? "in-active" : ""}
                  >
                    <CardListItemsWrapper className="card-name">
                      <div>
                        {" "}
                        <CardUserSvg />
                      </div>
                      <span>{item?.name_en || item?.company_en}</span>
                    </CardListItemsWrapper>

                    <CardListItemsWrapper>
                      <IDsvg />
                      <span>{item.id}</span>
                    </CardListItemsWrapper>
                    {item?.certificate_number && (
                      <CardListItemsWrapper>
                        <CertificateSvg fill={colors.darkBlue} />
                        <span>{item?.certificate_number}</span>
                      </CardListItemsWrapper>
                    )}
                    {item?.expire_date && (
                      <CardListItemsWrapper>
                        <CalendarSvg fill={colors.darkBlue} />
                        <span>{item?.expire_date}</span>
                      </CardListItemsWrapper>
                    )}
                    {item?.trainer && (
                      <CardListItemsWrapper>
                        <CardUserSvg />
                        <span>{item?.trainer}</span>
                      </CardListItemsWrapper>
                    )}
                    {item?.email && (
                      <CardListItemsWrapper>
                        <EmailSvg />
                        <span>{item?.email}</span>
                      </CardListItemsWrapper>
                    )}
                    {item?.product_en && (
                      <CardListItemsWrapper>
                        <AccurateSvg />
                        <span>{item?.product_en}</span>
                      </CardListItemsWrapper>
                    )}
                    {item.rating_en && (
                      <CardListItemsWrapper>
                        <StarSvg />
                        <span>{item.rating_en}</span>
                      </CardListItemsWrapper>
                    )}
                    {item.phone && (
                      <CardListItemsWrapper>
                        <PhoneSvg />
                        <span>{item.phone}</span>
                      </CardListItemsWrapper>
                    )}
                    {item.status && (
                      <CardListItemsWrapper>
                        {item.status === "active" ? (
                          <ActiveSvg />
                        ) : (
                          <InActiveSvg />
                        )}
                        <span>{item.status}</span>
                      </CardListItemsWrapper>
                    )}
                  </CardListItems>
                </>
              );
            })}
          </CardList>
          {recordsPerPage === searchvalue.length ? (
            <Button onClick={() => setRecordPerPage(recordsPerPage + 5)}>
              view more
            </Button>
          ) : (
            ""
          )}
        </CardViewContainer>
      )}
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
