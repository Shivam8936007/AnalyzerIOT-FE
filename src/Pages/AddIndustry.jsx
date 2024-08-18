import React, { useState,useEffect } from 'react';
import AddIndustryForm from '../Components/Add-Industry/AddIndustryForm';
import { addIndustry } from '../redux-store/slice/auth.slice';
import { useAppDispatch } from "../redux-store/hook";
const AddIndustry = () => {
  
  return(
   <div>
    < AddIndustryForm/>
   </div>
  )
};

export default AddIndustry;
