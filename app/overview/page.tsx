
"use client";
import React, { useEffect } from "react";
import { Pie,Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppDispatch, useAppSelector } from "@/redux-store/hook";
import { fetchIndustryList, fetchMap, fetchSiteInformation } from "@/redux-store/slice/industry.slice";
import IndustryTable from "@/components/IndustryTable";
import AllLocationOnMapCard from "@/components/MapComponent";
import SiteMiscelleneousCard from "@/components/SiteMiscelleneousCard";
import SmartSiteCard from "@/components/SmartSiteCard";
import { RootState } from "@/redux-store/store";
import { useSelector } from "react-redux";

Chart.register(ArcElement, Tooltip, Legend);

const OverviewPage = () => {
  const dispatch = useAppDispatch();

  
  const siteInformation = useSelector((state: RootState) => state.industryData.siteInformation);
  
  useEffect(() => {
    dispatch(fetchIndustryList());
    dispatch(fetchSiteInformation());
    dispatch(fetchMap());
  }, [dispatch]);

 
  const activeCount = siteInformation?.active_sites || 0;
  const offlineCount = siteInformation?.offline_sites || 0;
  const delayedCount = siteInformation?.delayed_sites || 0;


  const pieData = {
    labels: ["Active", "Offline", "Delayed"], 
    datasets: [
      {
        data: [activeCount, offlineCount, delayedCount], 
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"], 
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="h-screen w-full">
      <div className="flex flex-row gap-5">
        <div className="glass_background w-[40%] rounded-3xl border border-gray-300">
          <SmartSiteCard />
        </div>
        <div className="glass_background rounded-3xl border border-gray-300">
          <SiteMiscelleneousCard />
        </div>
        <div className="w-[30rem] glass_background rounded-3xl border border-gray-300 p-5">
          {/* <Pie data={pieData}  /> */}
          <Doughnut data={pieData}  />
        </div>
      </div>
      <div className="glass_background h-[20rem] rounded-3xl border border-gray-300 mt-5">
        <div className="rounded-3xl border border-gray-300">
          <AllLocationOnMapCard />
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

