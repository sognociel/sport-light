import React from "react";

import { CiCircleRemove } from "react-icons/ci";

import "../style/ListItem.scss";

const ListItem = ({ filterData, removeHealthData }) => {
  return (
    <div className="ListItem">
      <div className="ListItem-date">
        {filterData.date.slice(-2, -1) === "0"
          ? filterData.date.slice(-1)
          : filterData.date.slice(-2)}
        일
      </div>
      <div className="ListItem-category">{filterData.category}</div>
      <div className="ListItem-time">{filterData.time}분</div>
      <div className="ListItem-feeling">{filterData.feeling}</div>
      <CiCircleRemove
        className="ListItem-remove"
        onClick={() => removeHealthData(filterData.id)}
      />
    </div>
  );
};

export default ListItem;
