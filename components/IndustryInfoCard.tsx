import React, { ReactElement } from "react";
import IndustrySvg from "../app/assets/industry.svg";
import { FaAddressCard, FaSitemap, FaUser } from "react-icons/fa6";
import { IoDuplicate, IoIdCardSharp } from "react-icons/io5";
import { BsFillCalendarEventFill } from "react-icons/bs";

const IndustryInfoCard: React.FC = () => {
  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="p-5 rounded-3xl border border-gray-300 flex">
        <FaSitemap className="w-6 h-6 text-slate-700 mr-4" />
        <p className="text-slate-700 font-[600] text-[1.2rem]">
          100 MLD SEWAGE TREATMENT PLANT
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-[30%] rounded-3xl border border-gray-300">
          <img src={IndustrySvg.src} className="w-[20rem] h-[20rem] object-cover" />
        </div>
        <div className="w-[70%] rounded-3xl border border-gray-300 flex flex-col gap-1 p-5">
          <div className="flex flex-row gap-10">
            <div className="p-2 w-1/2 rounded-3xl ">
              <div className="flex">
                <FaUser className="w-4 h-4 text-slate-500" />
                <p className="text-slate-500 text-[.8rem] ml-2">User ID</p>
              </div>
              <p className="text-slate-700 font-[600] text-[1.2rem]">U-68</p>
            </div>
            <div className="p-2 w-1/2 rounded-3xl">
              <div className="flex">
                <IoIdCardSharp className="w-4 h-4 text-slate-500" />
                <p className="text-slate-500 text-[.8rem] ml-2">
                  CPCB Industry Id
                </p>
              </div>
              <p className="text-slate-700 font-[600] text-[1.2rem]">U-909</p>
            </div>
          </div>
          <div className="p-2 rounded-3xl">
            <div className="flex">
              <FaAddressCard className="w-4 h-4 text-slate-500" />
              <p className="text-slate-500 text-[.8rem] ml-2">Address</p>
            </div>
            <p className="text-slate-700 font-[600] text-[1.2rem]">
              Village Dhanwapur Gurugram Haryana India -122003
            </p>
          </div>
          <div className="p-2 rounded-3xl">
            <div className="flex">
              <IoDuplicate className="w-4 h-4 text-slate-500" />
              <p className="text-slate-500 text-[.8rem] ml-2">Category</p>
            </div>
            <p className="text-slate-700 font-[600] text-[1.2rem]">STP</p>
          </div>
          <div className="p-2 rounded-3xl">
            <div className="flex">
              <BsFillCalendarEventFill className="w-4 h-4 text-slate-500" />
              <p className="text-slate-500 text-[.8rem] ml-2">Vendor</p>
            </div>
            <p className="text-slate-700 font-[600] text-[1.2rem]">
              EIE Complete Solutions
            </p>
          </div>
          <div className="flex gap-3 flex-row-reverse mt-1">
            <div className="rounded-2xl cursor-pointer p-3 bg-cyan-400 hover:bg-cyan-600 text-[.8rem] font-[400] text-slate-50">
              Reset Password
            </div>
            <div className="rounded-2xl cursor-pointer p-3 bg-violet-400 hover:bg-violet-600 text-[.8rem] font-[400] text-slate-50">
              Edit Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryInfoCard;
