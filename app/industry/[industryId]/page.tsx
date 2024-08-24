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
import IndustryCards from "@/components/IndustryCard";

Chart.register(ArcElement, Tooltip, Legend);

const IndustryDetailsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIndustryList());
  }, [dispatch]);

  return (
    <div className="h-screen w-full">
      <div className="flex flex-row gap-5 glass_background rounded-3xl border border-gray-300">
        <IndustryCards />
      </div>
      <div className="mt-6 glass_background rounded-3xl h-[40rem] border border-gray-300">
          <IndustryTable />
      </div>
      <div className="mt-10 w-1 h-1"></div>
    </div>
  );
};

export default IndustryDetailsPage;
