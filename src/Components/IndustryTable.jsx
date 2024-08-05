"use client";
import React from "react";
import moment from "moment";

const IndustryTable = () => {
//   const router = useRouter();
  //   const transactionsList = useSelector(
  //     (state: RootState) => state.transactionsData.transactionsList
  //   );

  const header = [
    { key: 1, title: "Session Id" },
    { key: 2, title: "Vehicle" },
    { key: 3, title: "Duration" },
    { key: 4, title: "Date-Time" },
    { key: 5, title: "Energy Consumed" },
    { key: 6, title: "Amount" },
    { key: 7, title: "Status" },
  ];
  return (
    <div className="bg-gradient-to-r from-gradientStart to-gradientEnd  shadow-lg p-4  h-[45rem] w-full rounded-custom">
      <h2 className=" ml-5 mb-4 text-gray-200 font-[700] text-[1.5rem] text-base leading-5 w-[100%] font-montserrat">
        Charging Sessions
      </h2>
      <div className="overflow-hidden rounded-lg">
        <div className="overflow-y-auto  h-[40rem] scrollbar-hide">
          {" "}
          {/* This div makes the table scrollable */}
          <table className="min-w-full bg-gradient-to-r from-gradientStart to-gradientEnd">
            <thead className="bg-gradient-to-r from-gray-900 to-gray-900 sticky top-0 h-18 round-full">
              <tr className="rounded-t-xl rounded-b-xl font-Montserrat">
                {header.map((item, key) => (
                  <th
                    key={item.key}
                    className="py-4 px-4 text-slate-300 font-Montserrat text-[.87rem] text-[700] text-left first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {[].map((item, index) => (
                <tr
                  key={item.transaction_id}
                  className="text-left border-gray-800 font-Montserrat cursor-pointer hover:bg-slate-800"
                //   onClick={() =>
                //     router.push(`/sessions/${item?.transaction_id}`)
                //   }
                >
                  <td className="py-4 px-4 text-slate-400 text-[.87rem] text-[600] font-Montserrat">
                    {item?.transaction_id || "N/A"}
                  </td>
                  <td className="px-4 text-slate-400 text-[.87rem] text-[600] font-Montserrat">
                    {item?.vehicle_name || "N/A"}
                  </td>
                  <td className="px-4 text-slate-400 text-[.87rem] text-[600] font-Montserrat">
                    {(() => {
                      const totalMinutes =
                        parseFloat(item?.duration_hours) * 60;
                      const hours = Math.floor(totalMinutes / 60);
                      const minutes = Math.round(totalMinutes % 60);
                      return `${hours}hr ${minutes}min`;
                    })()}
                  </td>

                  <td className="px-4 text-slate-400 text-[.87rem] text-[600] font-Montserrat">
                    {moment
                      .utc(item.start_time)
                      .utcOffset("+05:30")
                      .format("DD/MM/YYYY h:mm:ss")}
                  </td>

                  <td className="px-4 text-slate-400 text-[.87rem] text-600] font-Montserrat">
                    {isNaN(Math.abs(item?.energy_consumed)) ||
                    Math.abs(item?.energy_consumed) === 0
                      ? "0"
                      : Math.abs(item?.energy_consumed).toFixed(2)}{" "}
                    kWh
                  </td>
                  <td className="px-4 text-slate-400 text-[.87rem] text-[600] flex font-Montserrat">
                    <p className="mt-4">
                      ₹ {Math.abs(item?.amount).toFixed(2)}
                    </p>
                  </td>

                  <td className="px-4 text-slate-400 text-md font-Montserrat font-semibold text-[10px] ">
                    <span
                      className={`p-[8px] text-gray-200 rounded-full text-[100] ${
                        item?.stop_time ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {item?.stop_time ? "Completed" : "In Progress"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustryTable;
