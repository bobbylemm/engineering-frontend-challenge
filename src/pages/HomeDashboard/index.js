import React from "react";

import HeaderSection from "../../components/homedashboard/header-section";
import ChartSection from "../../components/homedashboard/chart-section";
import NewsSection from "../../components/homedashboard/news-section";
import TableSection from "../../components/homedashboard/table-section";

const HomeDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <ChartSection />
      <NewsSection />
      <TableSection />
    </div>
  );
};

export default HomeDashboard;
