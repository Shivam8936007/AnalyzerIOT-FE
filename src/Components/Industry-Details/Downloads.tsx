

import React from "react";
import { dropdownData, earningData, Download ,Button } from "../../Data/dummy";

function DownloadCard () {
  return (
    <div className="mt-6 flex flex-row gap-6 ">
      { Download .map((item) => (
        <div
          key={item.title}
          className="back_transparent p-1 rounded-2xl flex flex-col w-[250px]"
        >
          <div className="p-3 rounded-2xl border border-gray-300">
            <p className="mt-2">
              <span className="text-xl font-bold text-slate-700">
                {item.title}
              </span>
            </p>
           <div className="flex flex-row gap-5">
             <button
       className="w-20 h-9 rounded-lg text-base"
       style={{ color: "#D9D9D9", backgroundColor: "green" }}
     >
       View
     </button>

     <button
       className="w-44 h-9 rounded-lg text-base"
       style={{ color: "#D9D9D9", backgroundColor: "red" }}
     >
       Download
     </button>
</div>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default DownloadCard;
