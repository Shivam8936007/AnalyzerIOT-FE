import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { dropdownData, earningData } from "../Data/dummy";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Industries = () => {
  const data = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "#fd6e62",
          "#afccf4",
          "#92d1af",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
    },
  };
  return (
    <div className="h-screen w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {earningData.map((item, index) => (
          <div
            key={item.title}
            className={`back_transparent p-5 rounded-2xl border-[1px] border-slate-500 `}
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-md"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-[1.5rem] font-[700] hover:text-[1.5rem] hover:font-[700] hover:text-slate-[800] text-slate-200">
                {item.amount}
              </span>
              <span
                className={`text-[1.2rem] font-[600] text-${item.pcColor} ml-3`}
              >
                {item.percentage}
              </span>
            </p>
            <p className="text-[1rem] text-slate-900 font-[600] mt-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8 ">
        <div className="p-5 rounded-2xl back_transparent">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className="md:w-full overflow-auto ">
            <Pie
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 w-1 h-1"></div>
    </div>
  );
};

export default Industries;
