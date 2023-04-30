import * as React from "react";
import DataTable from "../DataTable";
import userInfo from "DataLayer/dataTable.json";
const Trainer = () => {
  return (
    <div>
      <DataTable data={userInfo.data} title={"trainer"} showFilter={true} />
    </div>
  );
};
export default Trainer;
