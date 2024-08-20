"use client";
import React from "react";
// import styles from "../../app/main.module.css";
import divider from "../../app/assets/divider.png";
import moment from "moment";
import axiosInstance from "../../axios";

const Details: React.FC<any> = () => {
  const sessionDetails = {
    transaction_id: "12345",
    start_time: "ETP",
    stop_time: "EIE",
    duration_hours: "2.5",
    amount: 250.0,
    vehicle_name: "Tesla Model S",
    connectors: "Type 2",
    charger_type: "Fast Charger",
    vehicle_number: "XYZ 1234",
  };
  const convertGMTToIST = (gmtTime: moment.MomentInput) => {
    if (!gmtTime) return "";

    const date = moment(gmtTime).utc();
    const istTime = date.add(5, "hours").add(30, "minutes");

    return istTime.format("HH:mm:ss");
  };

  return (
    <div
      className=" text-white font-montserrat flex flex-col space-y-6 border border-gray-300 rounded-xl w-full h-[420px]"
    >
      <h1 className="text-xl text-black mt-2 ml-6"> Details</h1>
      <div className="flex flex-row w-full space-x-20">
        <div className="flex flex-col items-start space-y-2 w-1/3 text-black  ml-6">
          <h3>Industry ID</h3>
          <h4 style={{ color: "#A0AEC0" }}>{sessionDetails.transaction_id}</h4>
        </div>

        <div className="flex flex-col items-start space-y-2 w-1/3 text-black">
          <h3>Category</h3>
          <h4 style={{ color: "#A0AEC0" }}>
            {(sessionDetails.start_time)}
          </h4>
        </div>
        <div className="flex flex-col items-start space-y-2 w-1/3 text-black">
          <h3>Vendor</h3>
          <h4 style={{ color: "#A0AEC0" }}>
            {(sessionDetails.stop_time)}
          </h4>
        </div>
      </div>
      <div className="flex flex-row w-full space-x-20">
        <div className="flex flex-col items-start space-y-2 w-1/3 text-black  ml-6">
          <h3>Last Update</h3>
          <h4 style={{ color: "#A0AEC0" }}>
            {(() => {
              const durationHours = parseFloat(sessionDetails.duration_hours);
              if (isNaN(durationHours)) {
                return "-- -- --";
              }

              const totalMinutes = durationHours * 60;
              const hours = Math.floor(totalMinutes / 60);
              const minutes = Math.round(totalMinutes % 60);
              return `${hours}hr ${minutes}min`;
            })()}
          </h4>
        </div>
        <div className="flex flex-col items-start space-y-2 w-1/3 text-black">
          <h3>Total Cost</h3>
          <h4 style={{ color: "#A0AEC0" }}>
            ₹ {Math.abs(sessionDetails.amount).toFixed(2)}
          </h4>
        </div>
        <div className="flex flex-col items-start space-y-2 w-1/3 text-black">
          <h3>Vehicle Name</h3>
          <h4 style={{ color: "#A0AEC0" }}>{sessionDetails.vehicle_name}</h4>
        </div>
        
      </div>

      <div className="flex flex-col items-start space-y-2 w-1/3 text-black ml-6">
          <h3>Address</h3>
          <h4 style={{ color: "#A0AEC0" }}>{sessionDetails.vehicle_name}</h4>
        </div>
      
        
     
     <div className="flex flex-row gap-4 ml-6">
      <button
       
        className="w-44 h-9 rounded-lg text-base"
        style={{ color: "#D9D9D9", backgroundColor: "#02A372" }}
      >
        Edit Profile
      </button>

      <button
       
        className="w-44 h-9 rounded-lg text-base"
        style={{ color: "#D9D9D9", backgroundColor: "red" }}
      >
        Reset Password
      </button>

      <button
       
        className="w-44 h-9 rounded-lg text-base"
        style={{ color: "#D9D9D9", backgroundColor: "blue" }}
      >
        Maps
      </button>
      </div>
    </div>
  );
};

export default Details;
