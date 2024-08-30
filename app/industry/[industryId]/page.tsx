"use client";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux-store/hook";
import SiteMiscelleneousCard from "@/components/SiteMiscelleneousCard";
import IndustryInfoCard from "@/components/IndustryInfoCard";
import IndustryLocationOnMapCard from "@/components/IndustryLocationCard";
import DeviceListCard from "@/components/DeviceListCard";
import { RiGitPullRequestFill } from "react-icons/ri";
import { ImEqualizer2 } from "react-icons/im";
import {
  fetchIndustryDetails,
  fetchIndustryLocation,
} from "@/redux-store/slice/industry.slice";
import AddIndustryModal from "@/components/AddIndustryModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-store/store";
import AddDeviceModal from "@/components/Modal/DetailsModal";

interface IndustryContentProps {
  params: {
    industryId: number;
  };
}
const IndustryDetailsPage: React.FC<IndustryContentProps> = ({ params }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIndustryDetails({ industryId: params.industryId }));
    dispatch(fetchIndustryLocation({ industryId: params.industryId }));
  }, [dispatch, params.industryId]);

  const isAddDeviceModal = useSelector(
    (state: RootState) => state.industryData.isAddDeviceModal
  );
  return (
    <div className="h-screen w-full">
      <div className="flex flex-row gap-5">
        <div className="glass_background w-[65%] rounded-3xl border border-gray-300">
          <IndustryInfoCard />
        </div>
        <div className="flex flex-col w-[35%] h-[28rem]">
          <div className="glass_background rounded-3xl border border-gray-300">
            <IndustryLocationOnMapCard />
          </div>
          <div className="mt-3 flex flex-row gap-5">
            <div className="w-1/2 glass_background rounded-3xl border border-gray-300 p-4 flex justify-between">
              <div className="flex">
                <ImEqualizer2 className="w-5 h-5 text-slate-700 mr-2" />
                <p className="text-[1rem] font-[400] text-slate-700">CEMS</p>
              </div>
              <p className="text-[1.2rem] font-[800] text-slate-900">7</p>
            </div>
            <div className="w-1/2 glass_background rounded-3xl border border-gray-300 p-4 flex justify-between">
              <div className="flex">
                <RiGitPullRequestFill className="w-5 h-5 text-slate-700 mr-2" />
                <p className="text-[1rem] font-[400] text-slate-700">EQMS</p>
              </div>
              <p className="text-[1.2rem] font-[800] text-slate-900">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 glass_background rounded-3xl border border-gray-300 p-5">
        <DeviceListCard />
      </div>
      <div className="mt-10 w-1 h-1">
        {isAddDeviceModal && <AddDeviceModal />}
      </div>
    </div>
  );
};

export default IndustryDetailsPage;
