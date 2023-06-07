import * as React from "react";
import DataTable from "../DataTable";
import { fetchUserData } from "../hooks/api/getUsers";
const AllUsersScreen = () => {
  const [userdata, setData] = React.useState([]);
  React.useEffect(() => {
    fetchUserData(setData);
  }, []);
  return (
    <>
      {userdata.length > 1 && (
        <DataTable
          data={userdata && userdata}
          title={"user"}
          showFilter={false}
          nestedTable={true}
          isEditable={true}
          view={true}
          isDelete={true}
        />
      )}
    </>
  );
};
export default AllUsersScreen;
