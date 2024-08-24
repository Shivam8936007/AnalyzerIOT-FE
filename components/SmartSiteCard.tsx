import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { MdOutlineTransitEnterexit, MdTrendingUp } from "react-icons/md";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaPauseCircle,
} from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const SmartSiteCard: React.FC = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "active",
        data: [80, 100, 105, 104, 90, 110, 95],
        borderColor: "#22c55e",
        backgroundColor: "#bef264",
        fill: true,
      },
      {
        label: "inactive",
        data: [20, 25, 30, 50, 60, 38, 45],
        borderColor: "#ef4444",
        backgroundColor: "#f87171",
        fill: true,
      },
      {
        label: "delayed",
        data: [1, 5, 3, 10, 15, 5, 7],
        borderColor: "#facc15",
        backgroundColor: "#fde68a",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Removes the x-axis grid lines
        },
        ticks: {
          display: true, // Optionally, you can hide the x-axis labels as well
        },
      },
      y: {
        grid: {
          display: false, // Removes the y-axis grid lines
        },
        ticks: {
          display: true, // Optionally, you can hide the y-axis labels as well
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Optional: Adjust the line width
      },
    },
    plugins: {
      legend: {
        display: true, // Show or hide the legend
      },
    },
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex text-[1.5rem] p-1 font-[600] text-slate-700 items-center">
          <FaSitemap className="w-6 h-6 text-slate-700 mr-4" />
          Sites Information
        </div>
        <SlOptions className="w-5 h-5 text-slate-500" />
      </div>
      <div className="flex items-center mb-3">
        <div className="text-slate-700 text-[1.5rem] font-bold mr-2">39</div>
        <div className="text-slate-500 text-[1rem] font-[400]">Total Sites</div>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-4">
        <div className="flex rounded-2xl border border-gray-300 p-2 justify-between items-center gap-3 hover:border-gray-500 cursor-pointer">
          <div className="flex">
            <FaChevronCircleUp className="w-5 h-5 text-green-400" />
            <div className="text-slate-500 text-[.8rem] font-[400] ml-2 ">
              Online
            </div>
          </div>
          <div className="text-[1.2rem] font-bold text-green-500">35</div>
        </div>
        <div className="flex rounded-2xl border border-gray-300 p-2 justify-between items-center gap-3 hover:border-gray-500 cursor-pointer">
          <div className="flex">
            <FaChevronCircleDown className="w-5 h-5 text-red-400" />
            <div className="text-slate-500 text-[.8rem] font-[400] ml-2">
              Offline
            </div>
          </div>
          <div className="text-[1.2rem] font-bold text-red-500">5</div>
        </div>
        <div className="flex rounded-2xl border border-gray-300 p-2 justify-between items-center gap-3 hover:border-gray-500 cursor-pointer">
          <div className="flex">
            <FaPauseCircle className="w-5 h-5 text-yellow-400" />
            <div className="text-slate-500 text-[.8rem] font-[400] ml-2">
              Delayed
            </div>
          </div>
          <div className="text-[1.2rem] font-bold text-yellow-500">3</div>
        </div>
      </div>
      <div className="mb-3">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="mt-1">
        <div className="flex items-center mb-2">
          <div className="bg-green-300 flex items-center text-slate-700 text-[.6rem] p-2 rounded-2xl mr-2 hover:bg-green-400 cursor-pointer">
            active
            <MdTrendingUp className="w-3 h-3 text-slate-700" />
          </div>
          <div className="bg-red-300 flex items-center text-slate-700 text-[.6rem] p-2 rounded-2xl mr-2 hover:bg-red-400 cursor-pointer">
            inactive
            <MdTrendingUp className="w-3 h-3 text-slate-700" />
          </div>
          <div className="bg-yellow-300 flex items-center text-slate-700 text-[.6rem] p-2 rounded-2xl mr-2 hover:bg-yellow-400 cursor-pointer">
            delayed
            <MdTrendingUp className="w-3 h-3 text-slate-700" />
          </div>
        </div>

        {/* <div className="text-gray-400">Normal</div> */}
      </div>
    </div>
  );
};

export default SmartSiteCard;
