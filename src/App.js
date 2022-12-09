import React, { useState, useRef } from "react";
import "./App.scss";
import Collect from "./components/Collect";
import HealthContainer from "./components/HealthContainer";
import { MdSportsHandball } from "react-icons/md";

function App() {
  const [healthData, setHealthData] = useState([]);

  const dataId = useRef(0);
  const addHealthData = (date, category, time, feeling) => {
    if (
      !date ||
      !category ||
      !time ||
      time < 0 ||
      !feeling ||
      category === "오늘 한 운동을 고르세요!" ||
      feeling === "오늘 운동의 강도는?"
    ) {
      alert(`다시 입력해 주세요!`);
      return;
    }

    const newHealthData = {
      id: dataId.current,
      date: date,
      category: category,
      time: time,
      feeling: feeling,
    };
    setHealthData([...healthData, newHealthData]);
    dataId.current += 1;
  };

  const removeHealthData = (targetId) => {
    setHealthData(healthData.filter((item) => item.id !== targetId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <MdSportsHandball style={{ fontSize: "5rem" }} />
        Sport Light
      </header>
      <Collect addHealthData={addHealthData} />
      <HealthContainer
        healthData={healthData}
        removeHealthData={removeHealthData}
      />
    </div>
  );
}

export default App;
