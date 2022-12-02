import React from "react";
import "../style/ListItem.scss";
import { CiCircleRemove } from "react-icons/ci";

const ListItem = ({ healthData, removeHealthData }) => {
  return (
    <div className="ListItem">
      <div className="ListItem-date">
        {healthData.date.slice(-2, -1) === "0"
          ? healthData.date.slice(-1)
          : healthData.date.slice(-2)}
        일
      </div>
      <div className="ListItem-category">{healthData.category}</div>
      <div className="ListItem-time">{healthData.time}분</div>
      <div className="ListItem-feeling">{healthData.feeling}</div>
      <CiCircleRemove
        className="ListItem-remove"
        onClick={() => removeHealthData(healthData.id)}
      />
    </div>
  );
};

export default ListItem;
