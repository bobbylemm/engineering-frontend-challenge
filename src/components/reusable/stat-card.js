import React from "react";

const StatCard = ({ statistic, title, icon, delta }) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex justify-between mb-2">
      <div className="flex flex-col">
        <span className="text-main-gray-300 uppercase text-xs mb-2">
          {title}
        </span>
        <span className="text-card-text-gray-300 text-xl font-light">
          {statistic}
        </span>
      </div>
      <img src={icon} className="h-16" alt="icon-stat" />
    </div>

    <div>
      <span className="mr-3 text-sm text-custom-green-100">{delta}</span>
      <span className="text-card-text-gray-300 text-sm">Since last month</span>
    </div>
  </div>
);
export default StatCard;
