import React, { useState } from "react";
import ParameterCard from "./ParameterCard";
const ExpandableCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`overflow-hidden border border-gray-300 rounded-xl shadow-md mb-4 p-5 transform transition-all duration-500 ease-in-out ${
        isExpanded ? "max-h-120" : "max-h-32"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-700">Flow Control</h2>
      </div>
      <p
        className={`text-slate-500 transition-all duration-500 ease-in-out ${
          isExpanded ? "opacity-100 mt-4" : "opacity-0 h-0"
        }`}
      >
        <ParameterCard title="flow" limit="5" parameterId={12}/>
      </p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
          onClick={toggleExpansion}
        >
          {isExpanded ? "Hide Device" : "Show Device"}
        </button>
      </div>
    </div>
  );
};

export default ExpandableCard;
