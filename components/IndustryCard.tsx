import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import SmallStatsCard from "./SmallStatsCard";
import { RiAddLine, RiBaseStationFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/redux-store/hook";
import { setAddIndustryModalOpen } from "@/redux-store/slice/industry.slice";
const IndustryStatsCards: React.FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  return (
    <div className="p-5 w-full">
      <div className="flex justify-between">
        <div className="flex items-center">
          <BsFillInfoCircleFill className="w-6 h-6 text-slate-700 mr-4" />
          <p className="text-[1.5rem] font-[600] text-slate-700">
            Miscellaneous data
          </p>
        </div>
        <div
          onClick={() => dispatch(setAddIndustryModalOpen(true))}
          className="flex item-center p-3 max-w-[20rem] bg-violet-600 cursor-pointer text-[.9rem] font-[500] text-slate-100 rounded-2xl hover:bg-violet-700 transition-all"
        >
          add industry
          <RiAddLine className="w-4 h-4 text-slate-100 ml-2 text-[.9rem] font-bold" />
        </div>
      </div>
      <div className="grid grid-cols-4 justify-around mt-3 gap-5">
        <SmallStatsCard
          logo={
            <MdPanoramaPhotosphereSelect className="w-5 h-5 text-yellow-500" />
          }
          title={"Total Industry"}
          value={15}
          border={"border"}
        />
        <SmallStatsCard
          logo={<FaCompactDisc className="w-5 h-5 text-orange-500" />}
          title={"Active Industry"}
          value={5}
          border={"border"}
        />
        <SmallStatsCard
          logo={<RiBaseStationFill className="w-5 h-5 text-purple-500" />}
          title={"Inactive Industry"}
          value={7}
          border={"border"}
        />
        <SmallStatsCard
          logo={<FaExclamationTriangle className="w-5 h-5 text-blue-500" />}
          title={"Delayed"}
          value={3}
          border={"border"}
        />
      </div>
    </div>
  );
};

export default IndustryStatsCards;
