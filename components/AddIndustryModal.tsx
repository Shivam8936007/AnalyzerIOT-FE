
import React, { useState } from "react";
import { addIndustry, setAddIndustryModalOpen } from "@/redux-store/slice/industry.slice";
import { RootState } from "@/redux-store/store";

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
import axiosInstance from "@/axios/Axios";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux-store/hook";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/industry/add`;

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
  const appDispatch = useAppDispatch();
  const isAddIndustryModal = useSelector(
    (state: RootState) => state.industryData.isAddIndustryModal
  );

  if (!isAddIndustryModal) return null;

  const handleClose = () => {
    dispatch(setAddIndustryModalOpen(false));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry_type: "",
    address: {
      line1: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
    },
  });


  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.industry_type &&
      formData.address.line1 &&
      formData.address.city &&
      formData.address.state &&
      formData.address.pincode &&
      validateEmail(formData.email) &&
      validatePhoneNumber(formData.phone)
    );
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const filteredValue =
      name === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: filteredValue,
    }));

    if (name === "email") {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    } else if (name === "phoneNumber") {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      formData.email === "" ||
      formData.phone === "" ||
      formData.name === "" ||
      formData.industry_type === ""
    ) {
      toast.error("Please enter the complete data", {
        // icon: "👏",
        style: {
          borderRadius: "20px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      let combined_add = `${formData.address.line1}, ${formData.address.city}, ${formData.address.state} ${formData.address.country} - ${formData.address.pincode}`;
      let payload = { ...formData, address: combined_add };
      appDispatch(addIndustry(payload));
      toast.success("Successfully Added Industry!", {
        // icon: "👏",
        style: {
          borderRadius: "20px",
          background: "#333",
          color: "#fff",
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        industry_type: "",
        address: {
          line1: "",
          city: "",
          state: "",
          country: "India",
          pincode: "",
        },
      });
    }
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className={styles.form}>
                <FaUser className={styles.icon} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.form__input}
                  placeholder=" "
                  value={formData.name}
                  onChange={handleFormChange}
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
                  name="email"
                  className={styles.form__input}
                  placeholder=" "
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <label htmlFor="email" className={styles.form__label}>
                  Email
                </label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className={styles.form}>
                <FaPhone className={styles.icon} />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={styles.form__input}
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
                <label htmlFor="phone" className={styles.form__label}>
                  Phone Number
                </label>
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>

              <div className={styles.form}>
                <FaIndustry className={styles.icon} />
                <input
                  type="text"
                  id="industry"
                  name="industry_type"
                  className={styles.form__input}
                  placeholder=" "
                  value={formData.industry_type}
                  onChange={handleFormChange}
                  required
                />
                <label htmlFor="industry_type" className={styles.form__label}>
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
                      name="address.line1"
                      className={styles.form__input}
                      placeholder=" "
                      value={formData.address.line1}
                      onChange={handleFormChange}
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
                        name="address.city"
                        className={styles.form__input}
                        placeholder=" "
                        value={formData.address.city}
                        onChange={handleFormChange}
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
                        name="address.state"
                        className={styles.form__input}
                        placeholder=" "
                        value={formData.address.state}
                        onChange={handleFormChange}
                        required
                      />
                      <label htmlFor="state" className={styles.form__label}>
                        State
                      </label>
                    </div>
                  </div>

                  <div className={styles.form}>
                    <FaGlobe className={styles.icon} />
                    <input
                      type="text"
                      id="country"
                      name="address.country"
                      className={styles.form__input}
                      placeholder=" "
                      value={formData.address.country}
                      onChange={handleFormChange}
                      readOnly
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
                      name="pincode"
                      className={styles.form__input}
                      placeholder=" "
                      value={formData.address.pincode}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="pincode" className={styles.form__label}>
                      Pincode
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center">
              <button
                  type="submit"
                  className={`${
                    isFormValid() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                  } text-white rounded-md px-4 py-2 transition-all`}
                  disabled={!isFormValid()}
                >
                  Add Industry
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddIndustryModal;
