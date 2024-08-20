

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
  Filler,
} from "chart.js";
import { FaIndustry, FaSync } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function SiteStatsCard() {
  const chartRef = React.useRef(null);

  // Create a gradient for the line
  const gradient = chartRef.current
    ? chartRef.current.ctx.createLinearGradient(0, 0, 0, 400)
    : null;

  if (gradient) {
    gradient.addColorStop(0, "rgba(10, 255, 80, 1)");
    gradient.addColorStop(1, "rgba(10, 155, 90, 1)");
  }

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 90],
        borderColor: gradient,
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        backgroundColor: gradient,
        borderColor: gradient,
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="flex">
      <div className="back_transparent p-1 rounded-2xl w-[550px]">
        <div className="border border-gray-300 p-2 rounded-xl flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <FaIndustry className="w-6 h-6 text-blue-500" />
              <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                AIIMS NEW RAK OPD
              </p>
            </div>
            <h1 className="text-[1rem] font-[600] text-slate-700 ml-9">NEW DELHI</h1>
          </div>
          
          <button className="w-20 h-18 flex items-center justify-center rounded-sm  text-black border border-violet-800 gap-1 ">
             Refresh
            
            <FaSync className="w-4 h-4" />
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default SiteStatsCard;
