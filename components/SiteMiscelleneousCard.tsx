import React from "react";
import { FaExclamationTriangle, FaIndustry } from "react-icons/fa";
import SmallStatsCard from "./SmallStatsCard";
import { RiBaseStationFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa6";
import { BsDiscFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-store/store";
const SiteMiscelleneousCard: React.FC = () =>{
  const MiscellaneousCard = useSelector(
    (state: RootState) => state.industryData.siteInformation
  );
  return (
    <div className="p-5">
      {/* <div className=" border border-gray-300 p-5 rounded-3xl"> */}
      <div className="flex text-[1.5rem] p-1 font-[600] text-slate-700 items-center">
        <BsFillInfoCircleFill className="w-6 h-6 text-slate-700 mr-4" /> Miscellaneous data
      </div>
      <div className="grid grid-row-4 justify-around mt-3 gap-5">
        <SmallStatsCard
          logo={<MdPanoramaPhotosphereSelect className="w-5 h-5 text-yellow-500" />}
          title={"Delayed Parameters"}
          value={MiscellaneousCard.delayed_parameters ||0}
          border={"border-b"}
        />
        <SmallStatsCard
          logo={<FaCompactDisc className="w-5 h-5 text-orange-500" />}
          title={"Distinct Parameters"}
          value={MiscellaneousCard.distinct_parameters}
          border={"border-b"}
        />
        <SmallStatsCard
          logo={<RiBaseStationFill className="w-5 h-5 text-purple-500" />}
          title={"RTM Stations"}
          value={MiscellaneousCard.rtm_stations}
          border={"border-b"}
        />
        <SmallStatsCard
          logo={<FaExclamationTriangle className="w-5 h-5 text-blue-500" />}
          title={"Under maintaince"}
          value={MiscellaneousCard.under_maintenance}
          border={"border-b"}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default SiteMiscelleneousCard;