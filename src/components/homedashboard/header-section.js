import React from "react";
import StatCard from "../reusable/stat-card";

import HomeIcon from "../../assets/svg/home-icon.svg";
import TrendUp from "../../assets/svg/trend-up.svg";
import TrendDown from "../../assets/svg/trend-down.svg";
import DollarIcon from "../../assets/svg/card-dollar-icon.svg";
import StatIcon from "../../assets/svg/card-stat-icon.svg";

const HeaderSection = () => {
  const stat = [
    {
      icon: TrendUp,
      title: "Total Traffic",
      statistic: "123,456",
      delta: "+2.34%",
    },
    {
      icon: TrendDown,
      title: "new users",
      statistic: "2,345",
      delta: "+2.34%",
    },
    {
      icon: DollarIcon,
      title: "sales",
      statistic: "934",
      delta: "+2.34%",
    },
    {
      icon: StatIcon,
      title: "performance",
      statistic: "48.65%",
      delta: "+2.34%",
    },
  ];
  return (
    <div className="w-full bg-main-blue-300 py-16 px-12 pb-20">
      <div className="text-white flex justify-between mb-8">
        <div className="flex items-center">
          <span className="text-2xl mr-8">Home</span>
          <img src={HomeIcon} className="mr-3" alt="home-icon" />
          <span className="text-xs font-thin">Home</span>
          <span className="mx-3">-</span>
          <span className="text-xs font-thin">Dashboard</span>
        </div>
        <div>
          <span className="text-2xl text-light-blue-300 font-extrabold">
            WEEZIE
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {stat.map((item) => {
          return (
            <StatCard
              icon={item.icon}
              title={item.title}
              statistic={item.statistic}
              delta={item.delta}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HeaderSection;
