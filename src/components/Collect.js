import React, { useState } from "react";

import "../style/Collect.scss";

const Collect = ({ addHealthData }) => {
  const [input, setInput] = useState({
    date: "",
    category: "오늘 한 운동을 고르세요!",
    time: "",
    feeling: "오늘 운동의 강도는?",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitList = (e) => {
    e.preventDefault();
    addHealthData(input.date, input.category, input.time, input.feeling);
    setInput({
      date: "",
      category: "오늘 한 운동을 고르세요!",
      time: "",
      feeling: "오늘 운동의 강도는?",
    });
  };

  return (
    <div className="Collect">
      <form className="Collect-form" onSubmit={submitList}>
        <input
          className="Collect-date"
          type="date"
          name="date"
          value={input.date}
          onChange={handleChange}
        />
        <select
          className="Collect-type"
          name="category"
          value={input.category}
          onChange={handleChange}
        >
          <option>오늘 한 운동을 고르세요!</option>
          <option value="PT">PT</option>
          <option value="개인운동">개인운동</option>
          <option value="필라테스">필라테스</option>
          <option value="요가">요가</option>
        </select>
        <input
          className="Collect-time"
          type="text"
          name="time"
          placeholder="운동한 시간을 작성해보세요!(분 단위)"
          value={input.time}
          onChange={handleChange}
        />
        <select
          className="Collect-feeling"
          name="feeling"
          value={input.feeling}
          onChange={handleChange}
        >
          <option>오늘 운동의 강도는?</option>
          <option value="쉬움">쉬움</option>
          <option value="보통">보통</option>
          <option value="어려움">어려움</option>
        </select>
        <input
          className="Collect-button"
          type="button"
          value="오늘의 운동 등록!"
          onClick={submitList}
        />
      </form>
    </div>
  );
};

export default Collect;
