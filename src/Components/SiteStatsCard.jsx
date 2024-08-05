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
import { FaIndustry } from "react-icons/fa";
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
    <div className="w-full back_transparent p-1 rounded-3xl ">
      <div className=" border border-gray-300 p-5 rounded-3xl">
        <p className="text-xl font-[600] text-gray-600 ">Site Information</p>
        <div className="flex justify-around mt-3 gap-5">
          <div className="back_transparent p-1 rounded-2xl w-full">
            <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
              <div>
                <div className="flex justify-center items-center">
                  <FaIndustry className="w-6 h-6 text-blue-500" />
                  <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                    Total Sites
                  </p>
                </div>
                {/* <div className="flex items-center gap-3 "> */}
                  <h1 className="text-[2rem] font-[900] text-slate-700">200</h1>
                  <h4 className="text-[1rem] font-[600] text-red-500">
                    - 2%
                  </h4>
                {/* </div> */}
              </div>
              <div className="w-40">
                <Line ref={chartRef} data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="back_transparent p-1 rounded-2xl w-full">
            <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
              <div>
                <div className="flex justify-center items-center">
                  <FaIndustry className="w-6 h-6 text-green-500" />
                  <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                    Active Sites
                  </p>
                </div>
                {/* <div className="flex items-center gap-3 "> */}
                  <h1 className="text-[2rem] font-[900] text-slate-700">112</h1>
                  <h4 className="text-[1rem] font-[600] text-green-500">
                    + 5%
                  </h4>
                {/* </div> */}
              </div>
              <div className="w-40">
                <Line ref={chartRef} data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="back_transparent p-1 rounded-2xl w-full">
            <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
              <div>
                <div className="flex justify-center items-center">
                  <FaIndustry className="w-6 h-6 text-yellow-500" />
                  <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                    In-active Sites
                  </p>
                </div>
                {/* <div className="flex items-center gap-3 "> */}
                  <h1 className="text-[2rem] font-[900] text-slate-700">80</h1>
                  <h4 className="text-[1rem] font-[600] text-green-500">
                    + 8%
                  </h4>
                {/* </div> */}
              </div>
              <div className="w-40">
                <Line ref={chartRef} data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteStatsCard;
