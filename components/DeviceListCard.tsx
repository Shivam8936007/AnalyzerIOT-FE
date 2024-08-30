import React from "react";
import ExpandableCard from "./ExpandableCard";
import { RiAddLine } from "react-icons/ri";
import { setAddDeviceModalOpen, setAddIndustryModalOpen } from "@/redux-store/slice/industry.slice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/redux-store/hook";

const DeviceListCard: React.FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-slate-700">Devices</h1>
        <div
          onClick={() => dispatch(setAddDeviceModalOpen(true))}
          className="flex items-center p-3 bg-violet-600 cursor-pointer text-[.9rem] font-[500] text-slate-100 rounded-2xl hover:bg-violet-700 transition-all"
        >
          Add Devices
          <RiAddLine className="w-4 h-4 text-slate-100 ml-2 font-bold" />
        </div>
      </div>
      <div>
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
      </div>
    </div>
  );
};

export default DeviceListCard;
