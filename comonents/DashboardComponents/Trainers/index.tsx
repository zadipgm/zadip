import * as React from "react";
import DataTable from "../DataTable";
import userInfo from "dataLayer/dataTable.json";
const Trainer = () => {
  return (
    <div>
      <DataTable data={userInfo.data} title={"trainer"} showFilter={true} />
    </div>
  );
};
export default Trainer;
