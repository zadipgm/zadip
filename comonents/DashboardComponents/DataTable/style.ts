import styled from "styled-components";
import { css } from "styled-components";
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
  flex-wrap: wrap;
`;
export const DataView = styled.div`
  flex-grow:1 ;
  flex-basis: 200px;
  border-radius: 6px;
  
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
export const TableContainerDashboard = styled.div`
overflow-x:scroll;
`
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
  width: 50%;
`;

export const TableDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Data = styled.div``;

export const Filter = styled.div`
  flex-grow: 1;
    flex-basis: 200px;
  gap: 8px;
  color: #5a5c69;
  
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  flex-grow: 1;
    flex-basis: 200px;
  outline: none;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 14px;
`;

export const IconWrapper = styled.div`
  flex-grow: 1;
    flex-basis: 200px;
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
  width: max-content;
  padding:10px;
  position: absolute;
  top: 35px;
  background: white;
  right: 0;
  z-index: 999;
  &.show {
    border: none;
    display: block;
    animation: fadeIn 0.7s;
   
  }
  &.certificate {
       ${({ theme }) =>
    theme.isLTR
      ? css`
                right: -17%;
    `
      : css`
               right: -35%;
    `
  } 
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
  transition: all.5s;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    transition: all.5s;
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
  outline: none;width:100%;
  border-radius: 5px;
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
  flex-grow: 1;
    flex-basis: 400px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    &.in-active{
      background-color: #ff00008f;
    }
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
