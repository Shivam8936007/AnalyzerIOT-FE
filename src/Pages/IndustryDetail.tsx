import React from "react";
import { useNavigate } from "react-router-dom";
import SiteStatsCard from "../Components/SiteStatsCard";
import SmallStatsCard from "../Components/SmallStatsCard";

const IndustryDetail: React.FC = () => {
    //url -> industry id
  const navigate = useNavigate();

//   useEffect(() => {
//     //app_call(id)
//     //api_call(id)
//   });

  return (
    <div className="h-screen w-full">
      <SiteStatsCard />
      <SmallStatsCard />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        <div className="p-1 rounded-3xl back_transparent h-[44.2rem]">
          <div className="p-5 rounded-3xl border border-gray-300 ">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Industry Status Overview</p>
            </div>
            <div className="md:w-full overflow-auto ">
              <SiteStatsCard />
              <SmallStatsCard />
            </div>
          </div>
        </div>
        <div className="p-1 rounded-3xl back_transparent  h-[44.2rem]">
          <div className="rounded-3xl border border-gray-300 ">
            <SiteStatsCard />
            <SmallStatsCard />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="p-1 rounded-3xl back_transparent h-[44rem]">
          <SiteStatsCard />
          <SmallStatsCard />
        </div>
      </div>
      <div className="mt-20 w-1 h-1"></div>
    </div>
  );
};

export default IndustryDetail;




// import SmallStatsCard from "../Components/Industry-Details/SmallStatsCard";
// import SiteStatsCard from "../Components/Industry-Details/SiteStatsCard";
// import Details from "../Components/Industry-Details/Details";
// import  DownloadCard from "../Components/Industry-Details/Downloads"
// import ButtonCard  from "../Components/Industry-Details/Button"
// const IndustryDetails = () =>{
//     return (
//       <div>
//        <div className="flex flex-row gap-5">
//          <div>
//           <SiteStatsCard />
//         <SmallStatsCard/>
//         < DownloadCard/>
//         <ButtonCard />
//        </div>
//          <Details/>
//        </div>
   
//        </div>
//     )
//  };
//  export default IndustryDetails;
