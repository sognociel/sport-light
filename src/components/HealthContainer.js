import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "../style/HealthContainer.scss";
import { BiRun } from "react-icons/bi";
import { RiEmotionSadLine } from "react-icons/ri";

const HealthContainer = ({ healthData, removeHealthData }) => {
  const toDay = new Date();
  const year = toDay.getFullYear();
  const month = toDay.getMonth() + 1;

  const [toMonth, setToMonth] = useState(`${year}-${month}`);
  const [filterData, setFilterData] = useState([...healthData]);

  // 필터한 달을 입력받아 데이터 변환.
  useEffect(() => {
    setFilterData(healthData.filter((it) => it.date.slice(0, 7) === toMonth));
  }, [toMonth, healthData]);

  // 총 운동시간 구하기
  let totalTime = 0;
  for (let i = 0; i < filterData.length; i++) {
    const thisTime = parseInt(filterData[i].time);
    totalTime += thisTime;
  }

  return (
    <div className="HealthContainer">
      <div className="HealthContainer-filter">
        <div className="HealthContainer-runtime">
          <BiRun className="HealthContainer-icon" />
          <span className="HealthContainer-work">: {totalTime}분</span>
        </div>
        <input
          className="HealthContainer-month"
          type="month"
          value={toMonth}
          onChange={(e) => setToMonth(e.target.value)}
        />
      </div>
      <div className="HealthContainer-list">
        {filterData.length > 0 ? (
          <>
            {filterData.map((item) => (
              <ListItem
                filterData={item}
                key={item.id}
                removeHealthData={removeHealthData}
              />
            ))}
          </>
        ) : (
          <>
            <div className="HealthContainer-none">
              이번 달 운동 기록이 없네요!
              <RiEmotionSadLine style={{ fontSize: "30px" }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HealthContainer;
