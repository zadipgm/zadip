import Link from "next/link";
import React from "react";
import { PaginationList, PaginationListItem } from "./styles";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <PaginationList>
      <PaginationListItem>
        <Link onClick={prevPage} href="#">
          Previous
        </Link>
      </PaginationListItem>
      {pageNumbers.map((pgNumber) => (
        <PaginationListItem
          onClick={() => setCurrentPage(pgNumber)}
          key={pgNumber}
          className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
        >
          <Link href="#">{pgNumber}</Link>
        </PaginationListItem>
      ))}
      <PaginationListItem>
        <Link onClick={nextPage} href="#">
          Next
        </Link>
      </PaginationListItem>
    </PaginationList>
  );
};

export default Pagination;
