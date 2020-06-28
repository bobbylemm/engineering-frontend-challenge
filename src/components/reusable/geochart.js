import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import SectionHeader from "./section-header";
import ProgressBar from "./progress-bar";

const GeoData = ({ btnTitle, heading, headingHandler }) => {
  const [state, setState] = useState({
    salesStat: [
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
    ],
  });
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
            {state.salesStat.map((item) => {
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
export default GeoData;
