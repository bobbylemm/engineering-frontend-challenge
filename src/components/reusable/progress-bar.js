import React from "react";

const ProgressBar = ({ color, percentage }) => (
  <div className="w-full relative">
    <div
      className="bg-main-gray-300 rounded-sm absolute top-0 left-0 w-full"
      style={{ height: "0.3rem" }}
    ></div>
    <div
      className=" bg-red-400 rounded-sm absolute top-0 z-10 left-0 w-full"
      style={{ height: "0.3rem", width: percentage, backgroundColor: color }}
    ></div>
  </div>
);
export default ProgressBar;
