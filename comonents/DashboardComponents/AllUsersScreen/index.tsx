import axios from "axios";
import DeleteSvg from "public/icons/deleteSvg";
import EditSvg from "public/icons/editSvg";
import * as React from "react";
import { useTheme } from "styled-components";
import EditModal from "../EditModal";
import {
  Container,
  IconsWrapper,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  Title,
} from "../FormsDetails/styled.components";
const AllUsersScreen = () => {
  const { isLTR } = useTheme();
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [editUser, setEditUser] = React.useState();
  const [userID, setUserID] = React.useState(0);
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = React.useCallback(async () => {
    try {
      await axios
        .get(`${APP_URL}/users`)
        .then((response) => setUsers(response.data));
    } catch (err) {
      console.log(err);
    }
  }, [users]);

  const hanldeDelet = async (id: any) => {
    console.log("here is delet", id);
    try {
      await axios.delete(`${APP_URL}/delete/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handelEdit = React.useCallback(
    async (id: number) => {
      try {
        await axios
          .get(`${APP_URL}/edit/${id}`)
          .then((res) => setEditUser(res.data));
        setOpen(true);
        setUserID(id);
      } catch (err) {
        console.log(err);
      }
    },
    [editUser]
  );

  const renderTableData = () => {
    return (
      users &&
      users?.map((item, index) => {
        const { id, First_Name, Last_Name, Email } = item; //destructuring
        return (
          <>
            <TableRow key={id}>
              <TableData>{id}</TableData>
              <TableData>{First_Name}</TableData>
              <TableData>{Last_Name}</TableData>
              <TableData>{Email}</TableData>
              <TableData>
                <IconsWrapper onClick={() => handelEdit(id)}>
                  <EditSvg />
                </IconsWrapper>
                <IconsWrapper onClick={() => hanldeDelet(id)}>
                  <DeleteSvg fill="red" />
                </IconsWrapper>
              </TableData>
            </TableRow>
          </>
        );
      })
    );
  };
  const renderTableHeader = () => {
    return (
      <>
        <TableHead>ID</TableHead>
        <TableHead>FIRST NAME</TableHead>
        <TableHead>LAST NAME</TableHead>
        <TableHead>EMAIL</TableHead>
        <TableHead>Actions</TableHead>
      </>
    );
  };
  return (
    <Container>
      <Title>{isLTR ? "All User" : "جميع المستخدمين"}</Title>
      <Table id="Services" className="Services">
        <TableBody>
          <TableRow>{renderTableHeader()}</TableRow>
          {renderTableData()}
          <EditModal
            open={open}
            close={handleClose}
            user={editUser && editUser}
            id={userID}
          />
        </TableBody>
      </Table>
    </Container>
  );
};
export default AllUsersScreen;
