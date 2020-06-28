import React from "react";

const NewsCard = ({ img, heading, info, description }) => (
  <div className="col-span-1 w-5/6 h-full">
    <div className="h-full">
      <img
        src={img}
        alt="news-img"
        className="w-full rounded-t-lg"
        style={{ height: "40%" }}
      />
      <div
        className="bg-white p-8 flex flex-col rounded-b-lg"
        style={{ height: "60%" }}
      >
        <span className="text-md font-semibold mb-3">{heading}</span>
        <span className="font-normal text-xs text-main-gray-300 mb-4">
          {info}
        </span>
        <p className="text-sm mb-12">{description}</p>
        <span className="text-main-purple-300 text-sm font-semibold">
          View article
        </span>
      </div>
    </div>
  </div>
);

export default NewsCard;
