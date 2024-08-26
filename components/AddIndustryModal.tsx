import { setAddIndustryModalOpen } from "@/redux-store/slice/industry.slice";
import { RootState } from "@/redux-store/store";
import React from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../app/industry/addIndustryModal.module.css"; // Import the CSS module
import {
  FaCity,
  FaEnvelope,
  FaFlag,
  FaGlobe,
  FaIndustry,
  FaMapPin,
  FaPhone,
  FaUser,
} from "react-icons/fa6";

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
          <h2 className="text-2xl font-semibold mb-4">Add Industry</h2>
          <div className="w-full">
            <form className="space-y-4">
              <div className={styles.form}>
                <FaUser className={styles.icon} />
                <input
                  type="text"
                  id="name"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className={styles.form__label}>
                  Name
                </label>
              </div>

              <div className={styles.form}>
                <FaEnvelope className={styles.icon} />
                <input
                  type="email"
                  id="email"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className={styles.form__label}>
                  Email
                </label>
              </div>

              <div className={styles.form}>
                <FaPhone className={styles.icon} />
                <input
                  type="text"
                  id="phone"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <label htmlFor="phone" className={styles.form__label}>
                  Phone Number
                </label>
              </div>

              <div className={styles.form}>
                <FaIndustry className={styles.icon} />
                <input
                  type="text"
                  id="industry"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <label htmlFor="industry" className={styles.form__label}>
                  Industry
                </label>
              </div>

              {/* Address Section */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <div className="space-y-4">
                  <div className={styles.form}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <input
                      type="text"
                      id="line1"
                      className={styles.form__input}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="line1" className={styles.form__label}>
                      Line 1
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className={styles.form}>
                      <FaCity className={styles.icon} />
                      <input
                        type="text"
                        id="city"
                        className={styles.form__input}
                        placeholder=" "
                        required
                      />
                      <label htmlFor="city" className={styles.form__label}>
                        City
                      </label>
                    </div>
                    <div className={styles.form}>
                      <FaFlag className={styles.icon} />
                      <input
                        type="text"
                        id="state"
                        className={styles.form__input}
                        placeholder=" "
                        required
                      />
                      <label htmlFor="state" className={styles.form__label}>
                        State
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className={styles.form}>
                      <FaGlobe className={styles.icon} />
                      <input
                        type="text"
                        id="country"
                        className={styles.form__input}
                        value="India" // Pre-filled value
                        readOnly
                        placeholder=" "
                      />
                      <label htmlFor="country" className={styles.form__label}>
                        Country
                      </label>
                    </div>
                    <div className={styles.form}>
                      <FaMapPin className={styles.icon} />
                      <input
                        type="text"
                        id="pincode"
                        className={styles.form__input}
                        placeholder=" "
                        required
                      />
                      <label htmlFor="pincode" className={styles.form__label}>
                        Pincode
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Address Section */}
            </form>
            <div className="flex justify-end mt-10">
              <button
                type="button"
                onClick={handleClose}
                className="bg-red-400 text-white py-2 px-5 rounded-2xl hover:bg-orange-600 transition-all"
              >
                cancel
              </button>
              <button
                type="submit"
                className="bg-green-400 text-white py-2 px-5 rounded-2xl ml-2 hover:bg-green-600 transition-all"
              >
                submit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddIndustryModal;
