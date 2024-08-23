import React from "react";
import { useNavigate } from "react-router-dom";
import SiteStatsCard from "../Components/SiteStatsCard";
import SmallStatsCard from "../Components/SmallStatsCard";
import DownloadCard from "../Components/Industry-Details/Downloads";
import ButtonCard from "../Components/Industry-Details/Button";
import Details from "../Components/Industry-Details/Details";

const IndustryDetail: React.FC = () => {
  //url -> industry id
  const navigate = useNavigate();

  //   useEffect(() => {
  //     //app_call(id)
  //     //api_call(id)
  //   });

  return (
    <div>
      <div className="flex flex-row gap-5">
        <div>
          <SiteStatsCard />
          <SmallStatsCard />
          <DownloadCard />
          <ButtonCard />
        </div>
        <Details />
      </div>
    </div>
  );
};

export default IndustryDetail;
