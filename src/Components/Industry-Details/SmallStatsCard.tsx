

import React from "react";
import { dropdownData, earningData, Card } from "../../Data/dummy";

function SmallStatsCard() {
  return (
    <div className="mt-6 flex flex-row gap-12 ">
      {Card.map((item) => (
        <div
          key={item.title}
          className="back_transparent p-1 rounded-2xl flex flex-col w-[150px]"
        >
          <div className="p-3 rounded-2xl border border-gray-300">
            <p className="mt-2">
              <span className="text-xl font-bold text-slate-700">
                {item.title}
              </span>
            </p>
            <p className="text-sm text-slate-900 font-semibold mt-1">
              {item.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallStatsCard;
