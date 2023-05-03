import * as React from "react";
import { CalendarWrapper, Rowcell, Table } from "./style";
import Calendar from "react-calendar";
const Schedular = () => {
  const [date, setDate] = React.useState(new Date());
  let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  console.log(days);
  const handleChange = (date) => {
    let value = date;
  };
  return (
    <>
      <div>
        <CalendarWrapper>
          <Calendar value={date} onChange={(e) => handleChange(e)} />
        </CalendarWrapper>
      </div>
    </>
  );
};
export default Schedular;
