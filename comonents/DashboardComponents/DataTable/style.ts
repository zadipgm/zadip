import styled from "styled-components";
export const Container = styled.div`
  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const DataViewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
export const DataView = styled.div`
  width: 9%;
  border-radius: 6px;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  cursor: pointer;
  &.active {
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.black1};
  }
`;
export const Table = styled.table`
  display: table;
  border-collapse: collapse;
  margin: 12px;
  width: 100%;
  animation: fadeIn 1.5s;
  > h3 {
    text-align: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const TableData = styled.td`
  padding: 5px;
  border-bottom: 1px solid #dddddd;
  text-align: left;
  &.table-header {
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    border: 1px solid #dddddd;
  }
`;
export const Row = styled.tr`
  display: table-row;
  &.show {
    display: table-row-group;
    position: relative;
    left: 23%;
    bottom: 18px;
    right: 23%;
    animation: fadeIn 1.5s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &.hide {
    display: none;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
export const PaginationOuterDiv = styled.div`
  width: 25%;
`;

export const TableDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Data = styled.div``;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 20%;
  color: #5a5c69;
  > span {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
`;
export const SearchWrapper = styled.div`
  width: 60%;
`;
export const Label = styled.label``;
export const Input = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 14px;
`;
export const EntriesWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > span {
    color: #5a5c69;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;
export const ActionList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  width: 100%;
  position: absolute;
  top: 35px;
  background: white;
  z-index: 999;
  &.show {
    border: none;
    display: block;
    animation: fadeIn 0.7s;
  }
  &.hide {
    display: none;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export const ActionListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  width: 100%;
  gap: 8px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    div {
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
      border: 1px solid ${({ theme }) => theme.colors.white};
      &.delete {
        border: 1px solid ${({ theme }) => theme.colors.red};
        > svg {
          fill: red;
        }
      }
    }
  }
`;
export const InnerWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  &.delete {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`;
export const Select = styled.select`
  padding: 11px 10px;
  outline: none;
  border-radius: 5px;
  margin: 10px;
  direction: ltr;
  cursor: pointer;
  border: 1px solid lightgray;
  font-size: 14px;
  transition: 0.5s;
  color: #5a5c69;
  :focus {
    border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
  }
  > option {
    &.actions {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;
export const Paginations = styled.div`
  display: inline-block;
  > a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    font-size: 22px;
    &.active {
      background-color: #4caf50;
      color: white;
      border: 1px solid #4caf50;
    }
  }
`;
export const CardViewContainer = styled.div`
  animation: fadeIn 1.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export const CardList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
export const CardListItems = styled.li`
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  width: 30%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
export const CardListItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  gap: 12px;
  line-height: 22px;

  &.card-name {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    text-transform: capitalize;
    padding-bottom: 10px;
  }
`;
export const Button = styled.button`
  width: 10%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.themeColor};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 16px;
  text-transform: capitalize;
`;
