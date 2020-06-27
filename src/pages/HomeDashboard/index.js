import React from "react";
import TrendUp from "../../assets/svg/trend-up.svg";
import TrendDown from "../../assets/svg/trend-down.svg";
import DollarIcon from "../../assets/svg/card-dollar-icon.svg";
import StatIcon from "../../assets/svg/card-stat-icon.svg";
import HomeIcon from "../../assets/svg/home-icon.svg";

const HomeDashboard = () => (
  <div>
    <HeaderSection />
  </div>
);

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

const HeaderSection = () => (
  <div className="w-full bg-main-blue-300 py-16 px-12">
    <div className="text-white flex justify-between mb-8">
      <div className="flex items-center">
        <span className="text-2xl mr-8">Home</span>
        <img src={HomeIcon} className="mr-3" />
        <span className="text-xs font-thin">Home</span>
        <span className="mx-3">-</span>
        <span className="text-xs font-thin">Dashboard</span>
      </div>
      <div>
        <span>WEEZIE</span>
      </div>
    </div>
    <div className="flex justify-between flex-wrap">
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

const StatCard = ({ statistic, title, icon, delta }) => (
  <div className="bg-white w-20p rounded-lg p-6">
    <div className="flex justify-between mb-2">
      <div className="flex flex-col">
        <span className="text-main-gray-300 uppercase text-sm">{title}</span>
        <span className="text-card-text-gray-300 text-xl font-light">
          {statistic}
        </span>
      </div>
      <img src={icon} />
    </div>

    <div>
      <span className="mr-3 text-sm text-custom-green-100">{delta}</span>
      <span className="text-card-text-gray-300 text-sm">Since last month</span>
    </div>
  </div>
);
export default HomeDashboard;
