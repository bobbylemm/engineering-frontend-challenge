import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import ChartKey from "./chartkey";
import CustomButton from "./custom-button";

const PieChartComp = ({ heading, subHeading }) => {
  const [state, _] = useState({
    data: {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ["#F53C56", "#FEB969", "#2DCE98", "#11CDEF"],
        },
      ],
    },
  });
  const chartKeys = [
    { name: "lagos", color: "#11CDEF", amount: "$222,130" },
    { name: "kaduna", color: "#7764E4", amount: "$122,130" },
    { name: "ph", color: "#2DCE98", amount: "$35,130" },
    { name: "ibadan", color: "#FEB969", amount: "$22,130" },
  ];
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between mb-12">
        <div className="flex flex-col">
          <span className="text-main-gray-300 uppercase text-xs">
            {heading}
          </span>
          <span className="text-card-text-gray-300 text-xl font-light capitalize">
            {subHeading}
          </span>
        </div>
        <CustomButton text="event report" handler={() => {}} />
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative">
            <Doughnut
              data={state.data}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              width={"200"}
            />
            <div
              className="absolute flex flex-col"
              style={{ top: "45%", left: "42%" }}
            >
              <span>$230,125</span>
              <span className="text-xs text-center">AMOUNT</span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-full flex flex-col justify-center">
            <ul
              className="w-full flex justify-between flex-col items-stretch pl-3 h"
              style={{ height: "70%" }}
            >
              {chartKeys.map((item) => {
                return (
                  <li className="flex justify-between">
                    <ChartKey
                      color={item.color}
                      label={item.name}
                      key={item.name}
                    />
                    <span className="text-sm">{item.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PieChartComp;
