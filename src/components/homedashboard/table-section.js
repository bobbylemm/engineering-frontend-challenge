import React, { useState } from "react";

import SectionHeader from "../../components/reusable/section-header";
import ProgressBar from "../../components/reusable/progress-bar";

import ArrowSelect from "../../assets/svg/arrow-table.svg";
import OptionsIcon from "../../assets/svg/options-icon.svg";

import tableLeadingPic from "../../assets/images/table-leading-pic.jpg";

const TableSection = () => {
  const [state, setState] = useState({
    tableData: {
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
          status: "on-schedule",
          budget: "$2500",
          teamPics: [tableLeadingPic, tableLeadingPic, tableLeadingPic],
          completion: "30%",
        },
        {
          project: "the black project",
          createdAt: "20/03/2020",
          leadingPic: tableLeadingPic,
          status: "delayed",
          budget: "$25000",
          teamPics: [tableLeadingPic, tableLeadingPic, tableLeadingPic],
          completion: "50%",
        },
        {
          project: "React project",
          createdAt: "25/11/2020",
          leadingPic: tableLeadingPic,
          status: "completed",
          budget: "$125000",
          teamPics: [tableLeadingPic, tableLeadingPic, tableLeadingPic],
          completion: "90%",
        },
      ],
    },
  });
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
                    {state.tableData.headers.map((item) => (
                      <th className="px-6 py-3 text-left text-xs font-medium text-main-gray-300 uppercase tracking-wider">
                        <div className="flex items-center">
                          <span className="mr-3">{item.title}</span>{" "}
                          {item.options.length ? (
                            <div>
                              <img src={ArrowSelect} alt="arrow-select" />
                            </div>
                          ) : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {state.tableData.data.map((item) => {
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
                                  alt="team-member"
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
                              <img src={OptionsIcon} alt="option-icon" />
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
export default TableSection;
