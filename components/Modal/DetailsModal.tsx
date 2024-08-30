import {
  setAddDeviceModalOpen,
  setAddIndustryModalOpen,
} from "@/redux-store/slice/industry.slice";
import { RootState } from "@/redux-store/store";
import React from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

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

const AddDeviceModal: React.FC = () => {
  const dispatch = useDispatch();
  const isAddDeviceModal = useSelector(
    (state: RootState) => state.industryData.isAddDeviceModal
  );

  if (!isAddDeviceModal) return null;

  const handleClose = () => {
    dispatch(setAddDeviceModalOpen(false));
  };

  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
  ];

  const handleListItemClick = (item: string) => {
    console.log(`You clicked on ${item}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          className="relative bg-white rounded-3xl w-[40%] p-10"
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
          <h2 className="text-2xl font-semibold mb-4">Add Device</h2>
          <div className="w-full">
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-2">Select Products</h3>
              <div className="overflow-y-auto h-48 border rounded-lg">
                <ul className="space-y-2 p-4">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      className="p-2 border-b cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleListItemClick(product)}
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="bg-green-400 text-white py-2 px-5 rounded-2xl ml-2 hover:bg-green-600 transition-all"
              >
                Submit
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddDeviceModal;
