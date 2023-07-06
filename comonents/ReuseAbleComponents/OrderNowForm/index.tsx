import axios from "axios";
import * as React from "react";
import { useTheme } from "styled-components";
import CloseSvg from "../../../public/icons/closeSvg";
import IconComponent from "../IconComponent";
import ModalComponent from "../Modal";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  OrderNowFormContainer,
  Wrapper,
  Input,
  InputWarapper,
  Label,
  FormHeading,
  ContactButton,
  FormHeadingWrapper,
  IconWrapper,
  SpinnerWrapper,
  Em,
} from "./styled.components";
import ChildModal from "../childModal";
import { trackEvent } from "GTMs/libs";
interface IProps {
  title: string;
  buttonTitle: string;
  isShow?: boolean;
  classname?: string;
  icon?: string;
  page: string;
  screenName?: string;
  eventType?: string;
  eventAction?: string;
  eventLabel?: string;
  language?: string;
  device?: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const OrderNowForm: React.FC<IProps> = ({
  title,
  isShow = true,
  classname,
  icon,
  page,
  screenName,
  eventType,
  eventAction,
  eventLabel,
  language,
  device,
}) => {
  const { isLTR, translations, colors } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [serviceName, setServiceName] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const serviceHandler = (event: SelectChangeEvent<typeof serviceName>) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setName(value);
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.post(`${APP_URL}/zadip_form`, {
        Name: name,
        Email: email,
        MobileNumber: number,
        ServiceName: serviceName.toString(),
        Page: page,
      });
      setMessage(
        isLTR
          ? "Thanks for your time, We'll get back to shortly."
          : "شكرًا لك على وقتك ، وسنعاود الاتصال به قريبًا."
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        setOpenSnack(true);
      }, 3000);
      setTimeout(function () {
        setOpen(false);
        setOpenSnack(false);
        setName("");
      }, 7000);
      setColor("#2e7d32");

      setEmail("");
      setNumber("");
      setServiceName([]);
      trackEvent(
        screenName,
        eventType,
        eventAction,
        eventLabel,
        language,
        device
      );
    } catch (error) {
      if (error) {
        setOpenSnack(false);
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 5000);
        setColor("#d32f2f");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
            : error.response?.data?.message_ar
        );
        setOpen(true);
      }
    }
  };
  const services = [
    `${isLTR ? "Ektefa" : "خدمة اكتفاء"}`,
    `${isLTR ? "Nafeth" : "خدمة نافذ"}`,
    `${isLTR ? "Muaref" : "خدمة معرف"}`,
    `${isLTR ? "Professional Services" : "خدمات احترافية"}`,
    `${isLTR ? "Tamm" : "خدمة تم"}`,
    `${isLTR ? "Muqeem" : "خدمة مقيم"}`,
    `${isLTR ? "Masarat" : "خدمة مسارات"}`,
    `${isLTR ? "Smart Gate" : "خدمة البوابة الذكية"}`,
  ];
  return (
    <>
      <ContactButton onClick={handleOpen} className={classname}>
        {title}{" "}
        <IconComponent
          fill={"#fff"}
          width={"30px"}
          height={"30px"}
          icon={icon}
        />
      </ContactButton>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        classname={classname}
        bgColor={"#fff"}
      >
        <OrderNowFormContainer>
          <Wrapper className={classname}>
            <FormHeadingWrapper>
              <FormHeading>
                {isLTR
                  ? "Contact the Service Officer Now"
                  : "تواصل مع مسؤول الخدمة الان"}
              </FormHeading>
              <IconWrapper onClick={handleClose}>
                <CloseSvg width="30px" height="30px" fill={colors.lightBlue} />
              </IconWrapper>
            </FormHeadingWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Name" : "الاسم"}
                </Label>
                <Input
                  type="text"
                  placeholder={translations?.fullName}
                  required
                  title="Please Enter Your Full Name"
                  value={name}
                  minLength={2}
                  maxLength={50}
                  onChange={(e) => nameHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Email" : "البريد الإلكتروني"}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="abc@gmail.com"
                  onChange={(e) => emailHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Mobile Number" : "رقم الجوال"}
                </Label>
                <Input
                  placeholder="05XXXXXXXX"
                  type="text"
                  maxLength={10}
                  pattern="\d{10}"
                  title="Please enter exactly 10 digits"
                  value={number}
                  required
                  onChange={(e) => phoneHandler(e)}
                />
              </InputWarapper>
              <InputWarapper>
                <Label>
                  <span>*</span>
                  {isLTR ? "Request service" : "الخدمة المطلوبة"}
                </Label>
                <Select
                  multiple
                  required
                  value={serviceName}
                  displayEmpty
                  onChange={(e) => serviceHandler(e)}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <Em>{isLTR ? "Request service" : "أدخل طلب الخدمة"}</Em>
                      );
                    } else {
                      return selected.join(", ");
                    }
                  }}
                  MenuProps={MenuProps}
                >
                  <MenuItem disabled value="">
                    <em>{isLTR ? "Request service" : "الخدمة المطلوبة"}</em>
                  </MenuItem>
                  {services.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={serviceName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </InputWarapper>

              <SpinnerWrapper>
                <Input
                  type="submit"
                  className={`login login-${isComplete}`}
                  value={translations?.submit}
                />
                {isComplete && (
                  <Box>
                    <CircularProgress />
                  </Box>
                )}
              </SpinnerWrapper>
            </form>
          </Wrapper>
          <ChildModal
            name={name}
            open={openSnack}
            handleClose={handleCloseSnack}
            message={message}
            color={color}
          />
        </OrderNowFormContainer>
      </ModalComponent>
    </>
  );
};
export default OrderNowForm;
