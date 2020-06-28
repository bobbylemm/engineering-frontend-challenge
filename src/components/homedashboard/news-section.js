import React from "react";

import GeoData from "../reusable/geochart";
import NewsCard from "../reusable/news-card";

import cardImg from "../../assets/images/weezie-card-img.jpg";

const NewsSection = () => (
  <div className="w-full px-12 grid grid-cols-3 gap-8 mt-8">
    <GeoData
      headingHandler={() => {}}
      heading="sales by country"
      btnTitle="view full report"
    />
    <NewsCard
      img={cardImg}
      heading="Deep dive in the Lagos TechSpace"
      info="By John Snow on Apr 30th at 12:45 PM"
      description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium doloremque…."
    />
  </div>
);

export default NewsSection;
