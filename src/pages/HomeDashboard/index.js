import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import TrendUp from "../../assets/svg/trend-up.svg";
import TrendDown from "../../assets/svg/trend-down.svg";
import DollarIcon from "../../assets/svg/card-dollar-icon.svg";
import StatIcon from "../../assets/svg/card-stat-icon.svg";
import HomeIcon from "../../assets/svg/home-icon.svg";
import ArrowSelect from "../../assets/svg/arrow-table.svg";
import OptionsIcon from "../../assets/svg/options-icon.svg";

import cardImg from "../../assets/images/weezie-card-img.jpg";
import tableLeadingPic from "../../assets/images/table-leading-pic.jpg";

const HomeDashboard = () => (
  <div>
    <HeaderSection />
    <ChartSection />
    <NewsSection />
    <TableSection />
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

const salesStat = [
  {
    country: "russia",
    amount: "$203,000",
    barColor: "#7764E4",
    percentage: "80%",
  },
  {
    country: "Australia",
    amount: "$203,000",
    barColor: "#2DCE98",
    percentage: "40%",
  },
  {
    country: "China",
    amount: "$203,000",
    barColor: "#FEB969",
    percentage: "60%",
  },
  {
    country: "Algeria",
    amount: "$203,000",
    barColor: "#F53C56",
    percentage: "10%",
  },
  {
    country: "United States",
    amount: "$203,000",
    barColor: "#FB6340",
    percentage: "50%",
  },
];

const ChartSection = () => {
  return (
    <div className="w-full px-12 grid grid-cols-2 gap-4 -mt-10">
      <BarchartComp heading="partners" subHeading="affliate traffic" />
      <PieChartComp heading="overview" subHeading="budget" />
    </div>
  );
};

const BarchartComp = ({ heading, subHeading }) => {
  const [state, setState] = useState({
    data: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#11CDEF",
          borderColor: "#11CDEF",
          barThickness: "flex",
          maxBarThickness: 8,
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My second dataset",
          backgroundColor: "#7764E4",
          borderColor: "#7764E4",
          borderWidth: 1,
          barThickness: "flex",
          barPercentage: 0.5,
          categoryPercentage: 0.3,
          maxBarThickness: 8,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20],
        },
        {
          label: "My third dataset",
          backgroundColor: "#2DCE98",
          borderColor: "#2DCE98",
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: "flex",
          categoryPercentage: 0.3,
          maxBarThickness: 8,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20],
        },
      ],
    },
  });
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [8, 4],
            display: true,
            drawBorder: false, //<- set this
          },
        },
      ],
    },
  };
  const chartKeys = [
    { name: "ph", color: "#11CDEF" },
    { name: "abuja", color: "#7764E4" },
    { name: "lagos", color: "#2DCE98" },
  ];
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-col mb-12">
        <span className="text-main-gray-300 uppercase text-xs">{heading}</span>
        <span className="text-card-text-gray-300 text-xl font-light capitalize">
          {subHeading}
        </span>
      </div>
      <Bar data={state.data} width={null} height={null} options={options} />
      <div className="flex justify-center mt-6">
        <div className="w-1/2 justify-between flex">
          {chartKeys.map((item) => (
            <ChartKey color={item.color} label={item.name} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ChartKey = ({ color, label }) => (
  <div className="flex items-center">
    <div
      className="h-4 w-4 rounded-full border-4 mr-2"
      style={{ borderColor: color }}
    ></div>
    <span className="text-xs uppercase font-semibold">{label}</span>
  </div>
);

const PieChartComp = ({ heading, subHeading }) => {
  const [state, setState] = useState({
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
          <div className="h-full">
            <ul className="w-full flex justify-between flex-col items-stretch h-full">
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

const HeaderSection = () => (
  <div className="w-full bg-main-blue-300 py-16 px-12 pb-20">
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

const StatCard = ({ statistic, title, icon, delta }) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex justify-between mb-2">
      <div className="flex flex-col">
        <span className="text-main-gray-300 uppercase text-sm mb-2">
          {title}
        </span>
        <span className="text-card-text-gray-300 text-xl font-light">
          {statistic}
        </span>
      </div>
      <img src={icon} className="h-16" />
    </div>

    <div>
      <span className="mr-3 text-sm text-custom-green-100">{delta}</span>
      <span className="text-card-text-gray-300 text-sm">Since last month</span>
    </div>
  </div>
);

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

const SectionHeader = ({ heading, btnHandler, btnText }) => (
  <div className="border-b p-6 flex justify-between items-center">
    <h3 className="capitalize">{heading}</h3>
    <CustomButton handler={btnHandler} text={btnText} />
  </div>
);

const GeoData = ({ btnTitle, heading, headingHandler }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037],
    },
    { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
  ];
  return (
    <div className="bg-white rounded-lg col-span-2">
      <SectionHeader
        heading={heading}
        btnHandler={headingHandler}
        btnText={btnTitle}
      />
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-3">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              rotate: [58, 20, 0],
              scale: 200,
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  .filter(
                    (d) =>
                      d.properties.REGION_UN === "Americas" ||
                      d.properties.REGION_UN === "Africa" ||
                      d.properties.REGION_UN === "Asia"
                  )
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={5} fill="#FFC162" stroke="#F53C56" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <div class="col-span-2 p-6">
          <div className="flex flex-col justify-between h-full">
            {salesStat.map((item) => {
              return (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold capitalize">
                      {item.country}
                    </span>
                    <span className="text-sm font-thin">{item.amount}</span>
                  </div>
                  <ProgressBar
                    percentage={item.percentage}
                    color={item.barColor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-6">
        <button className="bg-main-purple-300 h-8 w-8 mr-3 rounded-lg text-white font-semibold">
          +
        </button>
        <button className="bg-main-purple-300 h-8 w-8 rounded-lg text-white font-semibold">
          -
        </button>
      </div>
    </div>
  );
};

const CustomButton = ({ text, handler }) => (
  <button
    className="border border-main-purple-300 px-5 py-2 text-main-purple-300 shadow-lg rounded-md capitalize"
    onClick={handler}
  >
    {text}
  </button>
);

const NewsCard = ({ img, heading, info, description }) => (
  <div className="col-span-1 w-5/6 h-full">
    <div className="h-full">
      <img
        src={img}
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

const tableData = {
  headers: [
    { title: "project", options: ["man"] },
    { title: "created at", options: [] },
    { title: "status", options: ["some"] },
    { title: "budget", options: ["budget"] },
    { title: "team", options: [] },
    { title: "completion", options: ["year"] },
  ],
  data: [
    {
      project: "project x",
      leadingPic: tableLeadingPic,
      createdAt: "20/03/2020",
      status: "pending",
      budget: "$2500",
      teamPics: [tableLeadingPic, tableLeadingPic, tableLeadingPic],
      completion: "20%",
    },
    {
      project: "Dashboard Enterprise",
      createdAt: "20/03/2020",
      leadingPic: tableLeadingPic,
      status: "pending",
      budget: "$2500",
      teamPics: [tableLeadingPic, tableLeadingPic, tableLeadingPic],
      completion: "20%",
    },
  ],
};

const TableSection = () => {
  return (
    <div className="w-full px-12 my-8">
      <div className="bg-white">
        <SectionHeader
          heading="jobs table"
          btnHandler={() => {}}
          btnText="export data"
        />
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full overflow-hidden border-b border-gray-200 shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-main-gray-200">
                    {tableData.headers.map((item) => (
                      <th className="px-6 py-3 text-left text-xs font-medium text-main-gray-300 uppercase tracking-wider">
                        <div className="flex items-center">
                          <span className="mr-3">{item.title}</span>{" "}
                          {item.options.length ? (
                            <div>
                              <img src={ArrowSelect} />
                            </div>
                          ) : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableData.data.map((item) => {
                    let color;
                    switch (item.status) {
                      case "pending":
                        color = "#F53C56";
                        break;
                      case "on-schedule":
                        color = "#11CDEF";
                        break;
                      case "delayed":
                        color = "#FB6340";
                        break;
                      default:
                        color = "#2DCE98";
                        break;
                    }
                    return (
                      <tr key={item.project}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 rounded-full mr-3 object-cover"
                              src={item.leadingPic}
                              alt="leading-pic"
                            />
                            <span className="text-sm font-semibold">
                              {item.project}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="text-sm">{item.createdAt}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div
                              className="h-2 w-2 rounded-full mr-3"
                              style={{ backgroundColor: color }}
                            ></div>
                            <span className="text-sm">{item.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="text-sm">{item.budget}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          <div className="flex">
                            {item.teamPics.map((pic, i) => {
                              return (
                                <img
                                  src={pic}
                                  style={{
                                    zIndex: item.teamPics.length - i,
                                  }}
                                  className="-ml-3 h-8 w-8 object-cover rounded-full"
                                />
                              );
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium w-4/12">
                          <div className="flex items-center">
                            <span className="mr-12">{item.completion}</span>
                            <ProgressBar
                              color="#2DCE98"
                              percentage={item.completion}
                            />
                            <div className="h-12 w-24 ml-16 rounded-full shadow-lg bg-white flex justify-center">
                              <img src={OptionsIcon} />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
