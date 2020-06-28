import React from "react";
import BarchartComp from "../reusable/barchart";
import PieChartComp from "../reusable/piechart";

const ChartSection = () => {
  return (
    <div className="w-full px-12 grid grid-cols-2 gap-4 -mt-10">
      <BarchartComp heading="partners" subHeading="affliate traffic" />
      <PieChartComp heading="overview" subHeading="budget" />
    </div>
  );
};

export default ChartSection;
