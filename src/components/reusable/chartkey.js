import React from "react";

const ChartKey = ({ color, label }) => (
  <div className="flex items-center">
    <div
      className="h-4 w-4 rounded-full border-4 mr-2"
      style={{ borderColor: color }}
    ></div>
    <span className="text-xs uppercase font-semibold">{label}</span>
  </div>
);

export default ChartKey;
