import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { dropdownData, earningData } from "../Data/dummy";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SiteStatsCard from "../Components/SiteStatsCard";
import SmallStatsCard from "../Components/SmallStatsCard";
import Map from "../Components/Map";
import IndustryTable from "../Components/IndustryTable";

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
        backgroundColor: ["#fda4af", "#fdba74", "#c4b5fd"],
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
      <SiteStatsCard />
      <SmallStatsCard />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        <div className="p-1 rounded-3xl back_transparent h-[44.2rem]">
          <div className="p-5 rounded-3xl border border-gray-300 ">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Sales Overview</p>
              {/* <DropDown currentMode={currentMode} /> */}
            </div>
            <div className="md:w-full overflow-auto ">
              <Pie data={data} options={options}/>
            </div>
          </div>
        </div>
        <div className="p-1 rounded-3xl back_transparent  h-[44.2rem]">
          <div className="rounded-3xl border border-gray-300 ">
            <Map />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="p-1 rounded-3xl back_transparent h-[44rem]">
        <IndustryTable />
        </div>
      </div>
      <div className="mt-20 w-1 h-1"></div>
    </div>
  );
};

export default Industries;
