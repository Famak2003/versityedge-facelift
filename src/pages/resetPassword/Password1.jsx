import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNextResetPasswordPage } from "../../redux/slice/authSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Password1 = () => {
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNextResetPasswordPage("OTP"));
    axios.post('http://versityedge1.eastus.cloudapp.azure.com/v1/auth/request-otp',{
      phone : "+234" + phoneNumber,
    })
    .then(() => {
      toast('OTP Sent');
      setTimeout(() => {
        dispatch(getNextResetPasswordPage("OTP"));
      }, 2000);
      
    })
    .catch((err) => {
      toast(err.response.data.message);
      console.log("err", err.response.data.message);
    })
  };

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px]"
      >
        <div className="relative h-[139px] w-[475px] text-center">
          <div className="absolute left-[52px] right-[52px] top-[40px] text-6xl font-semibold">
            Forgot password
          </div>
          <div className="absolute left-[90px] right-[90px] top-[100px] text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            <p className="m-0">
              Enter phone number to reset password +23481 27*** 98/
            </p>
          </div>
        </div>
        <input
          type="tel"
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          minLength={10}
          maxLength={11}
          className="relative mt-12 box-border h-[55px] 
          w-[270px] shrink-0 overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] text-lg font-light 
          text-black outline-none lmobile:w-[391px]"
        />

        <div className="relative h-[87px] w-[391px] text-base">
          <Link to="/auth/login">
            <div className="absolute left-[60px] top-[65px] font-light lmobile:left-[0px]">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
          </Link>

          <button className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] text-center text-xl text-primary-white-1 lmobile:left-[0px] lmobile:w-[391px]">
            <div className="relative font-medium">Submit</div>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Password1;
