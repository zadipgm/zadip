import * as React from "react";
import DataTable from "../DataTable";
import Booking from "DataLayer/booking.json";
const Bookings = () => {
  return (
    <div>
      <DataTable
        data={Booking.booking}
        title="Booking"
        showFilter={false}
        nestedTable={true}
        isEditable={true}
        view={true}
      />
    </div>
  );
};
export default Bookings;
