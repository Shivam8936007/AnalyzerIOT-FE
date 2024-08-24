import React from "react";
import ExpandableCard from "./ExpandableCard";
const DeviceListCard: React.FC = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold text-slate-700 mb-5">Devices</h1>
      <ExpandableCard />
      <ExpandableCard />
      <ExpandableCard />
    </div>
  );
};

export default DeviceListCard;
