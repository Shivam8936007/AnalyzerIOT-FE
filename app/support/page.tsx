"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux-store/hook";
import { fetchIndustryList } from "@/redux-store/slice/industry.slice";
import UnderMaintaince from "../assets/maintaince.svg"

Chart.register(ArcElement, Tooltip, Legend);

const SupportPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIndustryList());
  }, [dispatch]);

  return (
    <div className="flex h-screen w-full justify-center">
      <img src={UnderMaintaince.src} className="w-[45rem] h-[45rem]"></img>
    </div>
  );
};

export default SupportPage;
