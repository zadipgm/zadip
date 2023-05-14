import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Schedular = () => {
  const handleEventClick = (selectInfo) => {
    console.log("handleEventClick", selectInfo.event.title);
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={(selectInfo) => handleEventClick(selectInfo)}
        events={[
          {
            title: "شركة ارض القصيم",
            date: "2023-05-10",
            start: new Date("2023-05-09T16:00:00"),
            end: new Date("2023-05-09T16:30:00"),
          },
          {
            title: "شركة ارض القصيم",
            date: "2023-05-11",
            start: new Date("2023-05-10T17:30:00"),
            end: new Date("2023-05-10T17:00:00"),
          },
          {
            title: "شركة ارض القصيم",
            date: "2023-05-11",
            start: new Date("2023-05-11T16:00:00"),
            end: new Date("2023-05-11T17:30:00"),
          },
          {
            title: "شركة ارض القصيم",
            date: "2023-05-11",
            start: new Date("2023-05-12T14:30:00"),
            end: new Date("2023-05-12T16:00:00"),
          },
        ]}
      />
    </>
  );
};
export default Schedular;
