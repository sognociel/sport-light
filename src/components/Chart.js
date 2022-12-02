import React from "react";
import CanvasJSReact from "../canvasjs-3.7.2/canvasjs.react";
import "../style/Chart.scss";

const Chart = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    // title: {
    //   text: "Customer Satisfaction",
    // },
    subtitles: [
      {
        text: "71% Positive",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 5 },
          { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
          { name: "Satisfied", y: 17 },
          { name: "Neutral", y: 7 },
        ],
      },
    ],
  };
  return (
    <div className="Chart">
      <div className="Chart-filter">
        <div>총 운동시간 : {}</div>
        <input type="month" />
      </div>
      <div className="Chart-log">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default Chart;
