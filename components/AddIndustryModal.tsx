import { setAddIndustryModalOpen } from "@/redux-store/slice/industry.slice";
import { RootState } from "@/redux-store/store";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

const AddIndustryModal: React.FC = () => {
  const dispatch = useDispatch();
  const isAddIndustryModal = useSelector(
    (state: RootState) => state.industryData.isAddIndustryModal
  );

  if (!isAddIndustryModal) return null;

  const handleClose = () => {
    dispatch(setAddIndustryModalOpen(false));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="relative bg-white rounded-3xl w-[40%] p-20"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add Industry</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full border border-gray-400 rounded-xl p-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 peer transition-all"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full border border-gray-400 rounded-xl p-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 peer transition-all"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-400 rounded-xl p-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 peer transition-all"
              placeholder="Phone Number"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="industry"
              className="w-full border border-gray-400 rounded-xl p-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 peer transition-all"
              placeholder="Industry"
            />
            <label
              htmlFor="industry"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Industry
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="address"
              className="w-full border border-gray-400 rounded-xl p-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 peer transition-all"
              placeholder="Address"
            />
            <label
              htmlFor="address"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Address
            </label>
          </div>
        </form>
        <div className="flex justify-end mt-10">
          <button
            type="button"
            onClick={handleClose}
            className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-400 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-600 transition-all"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AddIndustryModal;
