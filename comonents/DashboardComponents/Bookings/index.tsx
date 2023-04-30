import * as React from "react";
import DataTable from "../DataTable";
import Booking from "dataLayer/booking.json";
const Bookings = () => {
  return (
    <div>
      <DataTable data={Booking.booking} title="Booking" showFilter={false} />
    </div>
  );
};
export default Bookings;
