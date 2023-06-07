import * as React from "react";
import DataTable from "../DataTable";
interface IUser {
  name_ar?: string;
  name_en?: string;
  email?: string;
  nationalID?: string;
  gender?: string;
  role?: string;
  phoneNUmber?: string;
}
interface IProps {
  userData?: IUser[];
}
const AllUsersScreen = ({ userData }: IProps) => {
  return (
    <>
      <DataTable
        data={userData && userData}
        title={"user"}
        showFilter={false}
        nestedTable={true}
        isEditable={true}
        view={true}
        isDelete={true}
      />
    </>
  );
};
export default AllUsersScreen;
