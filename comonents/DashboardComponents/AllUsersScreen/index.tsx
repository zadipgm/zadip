import * as React from "react";
import DataTable from "../DataTable";
import users from "DataLayer/user.json";
const AllUsersScreen = () => {
  return (
    <>
      <DataTable
        data={users.user}
        title={"user"}
        showFilter={false}
        nestedTable={true}
        isEditable={true}
        view={true}
      />
    </>
  );
};
export default AllUsersScreen;
