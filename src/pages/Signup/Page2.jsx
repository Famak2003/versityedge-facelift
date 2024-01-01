import React, { useState } from "react";
import { Link } from "react-router-dom";

import Stepper from "./stepper";

import { useDispatch, useSelector } from "react-redux";
import { getNextSignupPage } from "../../redux/slice/authSlice";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page2 = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNextSignupPage(3));
    // join the otpInput to make a single string
    const otp = otpInput.join("");

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}/auth/verify-otp`, {
        phone: phoneNumber,
        otp: otp,
      })
      .then(() => {
        toast("OTP Success");
        dispatch(getNextSignupPage(3));
        console.log("signUp page 2");
      })
      .catch((err) => {
        toast(err.response.data.message);
        console.log("err", err.response.data.message);
      });
  };

  const [otpInput, setOtpInput] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtpInput([
      ...otpInput.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handlePaste = (e) => {
    const value = e.clipboardData.getData("text");
    if (isNaN(value)) return false;

    const updatedValue = value.toString().split("").slice(0, otpInput.length);
    console.log(updatedValue);
    setOtpInput(updatedValue);
  };

  const bg2 = "bg-primary-blue-1";
  const txt2 = "text-primary-white-1";
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="font-text-xl-medium relative flex w-full flex-col items-center justify-start gap-[40px] top-[40px] text-center text-5xl text-primary-blue-1"
      >
        <div className="relative h-[59px] w-[289px]">
          <div className="absolute left-[58.5px] top-[29.5px] box-border h-px w-[172px] border-t-[1px] border-solid border-primary-blue-7" />
          <Stepper bg2={bg2} txt2={txt2} />
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative h-[139px] w-[486px]">
            <div className="absolute left-[160px] top-[0px] font-semibold">
              Sign up
            </div>
            <div className="absolute left-[60px] right-[60px] top-[73px] text-center text-3xl font-light lmobile:left-[40px] lmobile:right-[40px] lmobile:text-5xl">
              <p className="m-0">
                Complete sign up by entering the 6-digit code sent to your phone
                number.
              </p>
            </div>
          </div>

          <div className="text-primary-black-5 relative h-[134px] w-[476px] text-lg">
            <div className="text-primary-black-5 flex h-[134px] w-[476px] justify-center text-lg">
              {otpInput.map((data, i) => {
                return (
                  <input
                    type="password"
                    placeholder="-"
                    key={i}
                    required
                    value={data}
                    onChange={(e) => {
                      handleChange(e, i);
                    }}
                    onPaste={(e) => {
                      handlePaste(e);
                    }}
                    maxLength={1}
                    className="left-[246px] right-[240px] mx-2 ml-[14px] mt-[36px] h-16 w-16  
                        overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 text-center text-3xl focus:outline-none lmobile:left-[240px] lmobile:h-24 lmobile:w-24"
                  />
                );
              })}
            </div>
            <div className="absolute left-[197px] top-[0px] mb-[4px] font-light text-black">
              Enter code
            </div>
            <button className="absolute left-[308px] top-[112px] text-base text-primary-blue-1 lmobile:left-[386px]">
              Resend OTP
            </button>
          </div>
          <div className="relative h-[87px] w-[391px] text-base">
            <Link to="/auth/login">
              <div className="absolute left-[60px] top-[65px] font-light lmobile:left-[0px]">
                <span>{`Already have an account?   `}</span>
                <span className="text-primary-blue-1">Login</span>
              </div>
            </Link>

            <button
              className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] 
            border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] text-xl text-primary-white-1 lmobile:left-[0px] lmobile:w-[391px]"
            >
              <div className="relative font-medium">Submit</div>
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Page2;
