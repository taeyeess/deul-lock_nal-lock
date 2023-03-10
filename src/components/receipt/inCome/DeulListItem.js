import React from "react";
import cn from "classnames";
import CheckInput from "../CheckInput";
import CheckOutInput from "../CheckOutInput";
import styled from "styled-components";

const DeulListItem = ({ list, remove, onChecked, onChangeChecked }) => {
  const { id, text, checked, price, flag } = list;
  const commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <DeulListItems
      className="DeulListItem"
      style={{
        listStyle: "none",
        // display: "flex",
        // justifyContent: "space-between",
      }}
    >
      {/* {console.log(flag)} */}
      {flag && (
        <div>
          {/* <span onClick={() => remove(id)}>X</span> */}
          <div
            onClick={() => {
              onChecked(id);
              // onChangeChecked(checked);
            }}
            className={cn("checkbox", { checked })}
            style={{ position: "relative" }}
          >
            {checked ? <CheckInput /> : <CheckOutInput />}
            <div className="listItems" style={{ display: "inline" }}>
              {text}
            </div>
            <div
              className="listPrice"
              style={{ display: "inline", position: "absolute", right: "0" }}
            >
              + {commaPrice}
            </div>
          </div>
        </div>
      )}
    </DeulListItems>
  );
};

const DeulListItems = styled.div`
  .checked {
    color: #b9b69a;
    text-decoration-line: line-through;
    text-decoration-color: red;
  }
`;
export default DeulListItem;
