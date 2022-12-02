import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
// import Chart from "./Chart";
import "../style/HealthContainer.scss";
import { BiRun } from "react-icons/bi";

const HealthContainer = ({ healthData, removeHealthData }) => {
  const toDay = new Date();
  const year = toDay.getFullYear();
  const month = toDay.getMonth() + 1;
  const [toMonth, setToMonth] = useState(`${year}-${month}`);

  const filterMonth = (e) => {
    setToMonth(e.target.value);
  };

  return (
    <div className="HealthContainer">
      <div className="HealthContainer-filter">
        <div className="HealthContainer-runtime">
          <BiRun className="HealthContainer-icon" />
          <span className="HealthContainer-work">: 분</span>
        </div>
        <input
          className="HealthContainer-month"
          type="month"
          value={toMonth}
          onChange={filterMonth}
        />
      </div>
      {/* <Chart /> */}
      <div className="HealthContainer-list">
        {healthData.map((item) => (
          <ListItem
            healthData={item}
            key={item.id}
            removeHealthData={removeHealthData}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthContainer;
