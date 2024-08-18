import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { useAppDispatch } from "../../redux-store/hook";
import { addIndustry } from "../../redux-store/slice/auth.slice";

const AddIndustryForm = () => {
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

  const dispatch = useAppDispatch();

  const Addindustry = useSelector(
    (state: RootState) => state.userData.addIndustry
  );
  console.log("addindustry", Addindustry);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    let combined_add = `${formData.address.line1}, ${formData.address.city}, ${formData.address.state}, ${formData.address.country} - ${formData.address.pincode},`;
    let payload = { ...formData, address: combined_add };
    dispatch(addIndustry(payload));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white "
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Industry
        </label>
        <input
          type="text"
          name="industry_type"
          value={formData.industry_type}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Line 1
          </label>
          <input
            type="text"
            name="address.line1"
            value={formData.address.line1}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="text"
              name="address.pincode"
              value={formData.address.pincode}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Industry
      </button>
    </form>
  );
};

export default AddIndustryForm;
