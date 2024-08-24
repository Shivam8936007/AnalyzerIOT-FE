import React from "react";
import { FaExclamationTriangle, FaIndustry } from "react-icons/fa";
import SmallStatsCard from "./SmallStatsCard";
import { RiBaseStationFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa6";
import { BsDiscFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";
const IndustryCards: React.FC = () =>{
  return (
    <div className="p-5 w-full">
      {/* <div className=" border border-gray-300 p-5 rounded-3xl"> */}
      <div className="flex text-[1.5rem] p-1 font-[600] text-slate-700 items-center">
        <BsFillInfoCircleFill className="w-6 h-6 text-slate-700 mr-4" /> Miscellaneous data
      </div>
      <div className="grid grid-cols-4 justify-around mt-3 gap-5">
        <SmallStatsCard
          logo={<MdPanoramaPhotosphereSelect className="w-5 h-5 text-yellow-500" />}
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
      {/* </div> */}
    </div>
  );
}

export default IndustryCards;