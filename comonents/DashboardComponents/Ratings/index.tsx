import * as React from "react";
import DataTable from "../DataTable";
import ratingData from "DataLayer/ratings.json";
const Ratings = () => {
  return (
    <DataTable data={ratingData.rating} title="rating" showFilter={false} />
  );
};
export default Ratings;
