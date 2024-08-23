import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SiteStatsCard from "../Components/SiteStatsCard";
import SmallStatsCard from "../Components/SmallStatsCard";
import Map from "../Components/Map";
import IndustryTable from "../Components/IndustryTable";
import { fetchIndustryList } from "../redux-store/slice/industry.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../redux-store/hook";

Chart.register(ArcElement, Tooltip, Legend);

const Industries = () => {
  const dispatch = useAppDispatch();

  const data = {
    labels: ["Active", "Offline", "Delayed"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [96, 23, 55],
        // you can set indiviual colors for each bar
        backgroundColor: ["#C3E2C2", "#FA7070", "#FFEAA7"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Current Status",
      },
    },
  };

  useEffect(() => {
    dispatch(fetchIndustryList());
  }, [dispatch]);

  return (
    <div className="h-screen w-full">
      <SiteStatsCard />
      <SmallStatsCard />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        <div className="p-1 rounded-3xl back_transparent h-[44.2rem]">
          <div className="p-5 rounded-3xl border border-gray-300 ">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Industry Status Overview</p>
            </div>
            <div className="md:w-full overflow-auto ">
              <Pie data={data} options={options} />
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
