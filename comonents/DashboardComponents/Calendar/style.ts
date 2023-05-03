import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px; //temporary for performance
  > tr {
    > th {
      border: 1px solid #e0e0e0;
    }
    > td {
      border: 1px solid #e0e0e0;
      height: 120px;
      min-width: 65px;
      background: #fff;
      position: relative;
    }
  }
`;
export const Rowcell = styled.div`
  width: 27px;
  height: 27px;
  position: absolute;
  top: 0;
`;

export const CalendarWrapper = styled.div`
  & .react-calendar__navigation {
    text-align: center;
  }
  & .react-calendar__navigation__prev2-button {
    border: none;
    background: none;
    font-size: 22px;
    cursor: pointer;
  }
  & .react-calendar__navigation__prev-button {
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
  & .react-calendar__navigation__next2-button {
    border: none;
    background: none;
    font-size: 22px;
    cursor: pointer;
  }
  & .react-calendar__navigation__next-button {
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
  & .react-calendar__navigation__label {
    border: none;
    background: none;
    width: 11%;
    font-size: 22px;
    margin: 50px 0px; // temporarily for performance
  }
  & .react-calendar__viewContainer {
    border: 1px solid #e0e0e0;
    .react-calendar__month-view__weekdays__weekday {
      text-align: center;
      border-left: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      > abbr {
        text-decoration: none;
      }
    }
    .react-calendar__month-view__days {
      .react-calendar__month-view__days__day {
        border: none;
        background: none;
        height: 130px;
        border-left: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
        transition: all.5s;

        cursor: pointer;
        :hover {
          background-color: #c5d8ef52;
          transition: all.5s;
        }
        > abbr {
          position: absolute;
          top: 0;
          left: 0;
          padding: 6px;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
        }
      }
    }
  }
`;
