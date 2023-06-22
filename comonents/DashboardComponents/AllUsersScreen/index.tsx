import * as React from "react";
import DataTable from "../DataTable";
import { useTheme } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import SimpleSnackbar from "comonents/ReuseAbleComponents/Snackbar";
import ModalComponent from "comonents/ReuseAbleComponents/Modal";
import EditUser from "./editUser";
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
  isLoading?: boolean;
}
const AllUsersScreen = ({ userData, isLoading }: IProps) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openToast, setOpenToast] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [editData, setEditData] = React.useState({});
  const { isLTR } = useTheme();

  const handleCloseModal = () => setOpenModal(false);
  const editHandler = (item) => {
    setEditData(item);
    setOpenModal(true);
  };

  const handleClick = () => {
    setOpenToast(true);
  };

  const handleClosetoast = () => {
    setOpenToast(false);
  };
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${APP_URL}/delete/${id.trim()}`);
      handleClick();
      setMessage(
        isLTR ? "User Deleted successfully!" : "User Deleted successfully!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        router.reload();
      }, 1000);
      setColor("#0d880d");
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 3000);
        setColor("#ec0e0e");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
              ? error.response?.data?.message_en
              : error.message
            : error.response?.data?.message_ar
            ? error.response?.data?.message_ar
            : error.message
        );
      }
    }
  };
  return (
    <>
      <SimpleSnackbar
        open={openToast}
        handleClose={handleClosetoast}
        message={message}
        color={color}
      />
      <ModalComponent
        open={openModal}
        handleClose={handleCloseModal}
        bgColor={"#fff"}
        classname="edit-user-form"
      >
        <EditUser handleCloseModal={handleCloseModal} editData={editData} />
      </ModalComponent>
      <DataTable
        data={userData}
        title={"user"}
        showFilter={false}
        nestedTable={true}
        isEditable={true}
        view={false}
        isDelete={true}
        edithandler={editHandler}
        deleteHandler={deleteUser}
      />
    </>
  );
};
export default AllUsersScreen;
