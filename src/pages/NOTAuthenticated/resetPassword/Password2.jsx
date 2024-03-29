import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getNextResetPasswordPage } from "../../../redux/slice/authSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Password2 = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);

  // console.log("phonenumber:", phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

    // join the otpInput to make a single string
    const otp = otpInput.join("");
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}/auth/verify-otp`, {
        phone: phoneNumber,
        otp: otp,
      })
      .then(() => {
        toast("OTP Success");
        dispatch(getNextResetPasswordPage("passwordReset"));
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

    setOtpInput(updatedValue);
  };

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start"
      >
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative h-[139px] w-[470px] text-center">
            <div className="absolute left-[66px] right-[66px] top-[40px] text-6xl font-semibold">
              Password reset
            </div>
            <div className="mb-2px absolute left-[44px] right-[44px] top-[90px] text-3xl font-light lmobile:left-[0px] lmobile:right-[0px] lmobile:text-5xl">
              <p className="m-0">
                Reset password by entering the 6-digit code sent to your phone
                number/email.
              </p>
            </div>
          </div>

          <div className="text-primary-black-5 relative h-[134px] w-[476px] text-lg">
            <div
              className="text-primary-black-5 flex h-[134px] w-[476px] justify-center 
            text-lg"
            >
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
                    className="left-[246px] right-[246px] mx-2 ml-[14px]  mt-[36px] h-16 w-16 
                        overflow-hidden rounded-2xl border-[1px] border-solid 
                        border-primary-black-7 bg-primary-white-1  text-center text-3xl focus:outline-none 
                        lmobile:h-24 lmobile:w-24"
                  />
                );
              })}
              <div className="absolute left-[197px] top-[0px] font-light text-black">
                Enter code
              </div>
              <button className="absolute left-[308px] top-[112px] text-base text-primary-blue-1 lmobile:left-[386px]">
                Resend OTP
              </button>
            </div>
          </div>

          <div className="relative h-[87px] w-[391px] text-base">
            <Link to="/auth/login">
              <div className="absolute left-[60px] top-[65px] font-light lmobile:left-[0px]">
                <span>{`Already have an account?   `}</span>
                <span className="text-primary-blue-1">Login</span>
              </div>
            </Link>
            <button
              className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] 
              text-xl text-primary-white-1 lmobile:left-[0px] lmobile:w-[391px]"
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

export default Password2;
