import React, { ReactElement } from "react";
import { FaIndustry } from "react-icons/fa6";

interface StatsCardProps {
  logo: ReactElement;
  title: string | "" | undefined;
  value: number | 0 | undefined;
  change?: string;
  isPositive?: boolean;
  unit?: string;
}

const SmallStatsCard: React.FC<StatsCardProps> = ({ logo, title, value, change, isPositive, unit }) => {
  return (
    <div className="p-5 border-b border-gray-300 rounded-3xl mt-1">
      <div className="flex gap-16 justify-between items-center">
        <div className="flex w-[70%]">
          {logo}
          <p className="text-[1rem] font-[400] text-slate-500 ml-2">
            {title}
          </p>
        </div>
        <div className="">
          <p className="text-[1.5rem] font-[800] text-slate-600">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallStatsCard;
