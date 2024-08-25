"use client";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux-store/hook";
import { fetchIndustryList } from "@/redux-store/slice/industry.slice";
import IndustryTable from "@/components/IndustryTable";
import IndustryStatsCards from "@/components/IndustryCard";
import AddIndustryModal from "@/components/AddIndustryModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-store/store";

const IndustryPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIndustryList());
  }, [dispatch]);

  const isAddIndustryModal = useSelector(
    (state: RootState) => state.industryData.isAddIndustryModal
  );
  return (
    <div className="h-screen w-full">
      {/* <p className="text-bold text-[1rem] text-[500] text-slate-700">Site Information</p> */}
      <div className="flex flex-row gap-5 glass_background rounded-3xl border border-gray-300">
        <IndustryStatsCards />
      </div>
      <div className="mt-6 glass_background rounded-3xl h-[40rem] border border-gray-300">
        <IndustryTable />
      </div>
      <div className="mt-10 w-1 h-1"></div>
      {isAddIndustryModal && <AddIndustryModal />}
    </div>
  );
};

export default IndustryPage;
