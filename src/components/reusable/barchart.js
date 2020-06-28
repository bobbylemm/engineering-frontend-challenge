import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import ChartKey from "./chartkey";

const BarchartComp = ({ heading, subHeading }) => {
  const [state, setState] = useState({
    data: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#11CDEF",
          borderColor: "#11CDEF",
          barThickness: "flex",
          maxBarThickness: 8,
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My second dataset",
          backgroundColor: "#7764E4",
          borderColor: "#7764E4",
          borderWidth: 1,
          barThickness: "flex",
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          maxBarThickness: 8,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20],
        },
        {
          label: "My third dataset",
          backgroundColor: "#2DCE98",
          borderColor: "#2DCE98",
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: "flex",
          categoryPercentage: 0.3,
          maxBarThickness: 8,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20],
        },
      ],
    },
  });
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [8, 4],
            display: true,
            drawBorder: false, //<- set this
          },
        },
      ],
    },
  };
  const chartKeys = [
    { name: "ph", color: "#11CDEF" },
    { name: "abuja", color: "#7764E4" },
    { name: "lagos", color: "#2DCE98" },
  ];
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-col mb-12">
        <span className="text-main-gray-300 uppercase text-xs">{heading}</span>
        <span className="text-card-text-gray-300 text-xl font-light capitalize">
          {subHeading}
        </span>
      </div>
      <Bar data={state.data} width={null} height={null} options={options} />
      <div className="flex justify-center mt-6">
        <div className="w-1/2 justify-between flex">
          {chartKeys.map((item) => (
            <ChartKey color={item.color} label={item.name} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BarchartComp;
