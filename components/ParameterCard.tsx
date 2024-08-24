import React, { ReactElement } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ParameterProps {
  logo?: ReactElement;
  title: string | "" | undefined;
  parameterId: number | 0 | undefined;
  limit?: string;
  value?: boolean;
}

const ParameterCard: React.FC<ParameterProps> = ({
  title,
  parameterId,
  limit,
  value,
}) => {
  const data = {
    labels: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5", "Point 6"],
    datasets: [
      {
        label: "Value",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-5 bg-white border border-gray-300 rounded-xl shadow-md max-w-xs mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[1.5rem] font-[600] text-slate-700">{title}</div>
      </div>
      <div className="bg-red-500 text-white rounded-lg p-3 mb-3">
        <div className="text-lg font-bold">{parameterId}</div>
        <div className="text-sm">{limit}</div>
      </div>
      <div className="mb-3">
        <Line data={data} options={options} />
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="text-gray-500 text-sm">Exceedance</div>
        <div className="text-2xl font-bold text-slate-700">{value}</div>
      </div>
    </div>
  );
};

export default ParameterCard;
