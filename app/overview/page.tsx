"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux-store/hook";
import { fetchIndustryList } from "@/redux-store/slice/industry.slice";
import IndustryTable from "@/components/IndustryTable";
import MapComponent from "@/components/MapComponent";
import SiteMiscelleneousCard from "@/components/SiteMiscelleneousCard";
import SmartSiteCard from "@/components/SmartSiteCard";

Chart.register(ArcElement, Tooltip, Legend);

const OverviewPage = () => {
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
      {/* <p className="text-bold text-[1rem] text-[500] text-slate-700">Site Information</p> */}
      <div className="flex flex-row gap-5">
        <div className="glass_background w-[40%] rounded-3xl border border-gray-300">
          <SmartSiteCard />
        </div>
        <div className="glass_background rounded-3xl border border-gray-300">
          <SiteMiscelleneousCard />
        </div>
        <div className="w-[30rem] glass_background rounded-3xl border border-gray-300 p-5">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="glass_background h-[20rem] rounded-3xl border border-gray-300 mt-5">
        <div className="rounded-3xl border border-gray-300 ">
          <MapComponent />
        </div>
      </div>
      <div className="mt-6 glass_background rounded-3xl border border-gray-300 h-[40rem]">
          <IndustryTable />
      </div>
      <div className="mt-10 w-1 h-1"></div>
    </div>
  );
};

export default OverviewPage;
