import React, { useState } from "react";

import { Link } from "react-router-dom";

import ngaFlag from "./../../assets/twemoji_flag-nigeria.png";
import Stepper from "./stepper";
import { useDispatch } from "react-redux";
import { getNextSignupPage, setPhone } from "../../redux/slice/authSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const dispatch = useDispatch();
  let verfiedPhoneNumber;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNextSignupPage(2));
    verfiedPhoneNumber = "+234" + phoneNumber.slice(-10);

    if (!requestSent) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}/auth/request-otp`, 
        {
          phone: verfiedPhoneNumber,
        })
        .then(() => {
          setTimeout(() => {
            toast("OTP Sent");
          }, 1000);
          dispatch(setPhone(verfiedPhoneNumber));
          setRequestSent(true);
          dispatch(getNextSignupPage(2));
        })
        .catch((err) => {
          toast(err.message);
          console.log("err", err?.response?.data?.message);
        });
    }

    return;
  };

  const bg1 = "bg-primary-blue-1";
  const txt1 = "text-primary-white-1";

  return (
    <div className="relative w-full flex flex-col top-[40px] items-center justify-start gap-[40px] text-center text-5xl text-primary-blue-1 font-text-xl-medium">
      <div className="relative w-[289px] h-[59px]">
        <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
        <Stepper bg1={bg1} txt1={txt1} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black"
      >
        <div className="relative w-[510px] h-[139px]">
          <div className="absolute top-[0px] left-[172px] font-semibold">
            Sign up
          </div>
          <div className="absolute top-[90px] left-[80px] text-2xl font-light whitespace-pre-wrap text-center lmobile:left-[0px] lmobile:text-4xl lmobile:top-[73px]">
            <p className="m-4">
              <span className="text-black">{`Admission success is `}</span>
              <span className="text-primary-blue-1">guaranteed.</span>
              <span> Kindly sign up</span>
            </p>
            <p className="m-0">{`to get access to those amazing features. `}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[535px] h-[9.8rem] text-lg text-primary-black-7 lmobile:w-[672px]">
          <div className="w-[430px] px-24px justify-between items-center flex h-[55px] lmobile:w-[650px] lmobile:px-[72px]">
            <label
              className="flex items-center ring-1 ring-[var(--gray-texture)] py-1 px-2 ml-40 w-[250px] h-full rounded-3xl gap-2 lmobile:gap-3 lmobile:w-[100px] lmobile:ml-0"
              htmlFor="phone"
            >
              <img src={ngaFlag} alt="Nigeria" />
              <p>+234</p>
            </label>

            <input
              type="tel"
              minLength={10}
              maxLength={11}
              name="phone"
              required
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="text-black px-[24px]
              rounded-3xl bg-primary-white-1 box-border w-[590px] ml-4 
              h-[55px] outline-none overflow-hidden border-[1px] border-solid border-primary-black-7 top-[15px] left-[29px] font-light lmobile:w-[391px] lmobile:left-[14px]"
            />

            {/* <div className="absolute mt-6 top-[0px] left-[100px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-start py-[9.5px] px-2 gap-[16px] text-black border-[1px] border-solid border-primary-black-7 lmobile:left-[0px] lmobile:px-4">
              <img
                className="relative w-7 h-9 overflow-hidden shrink-0 lmobile:w-9"
                alt=""
                src={ngaFlag}
              />
              <div className="relative font-light">+234</div>
            </div> */}
          </div>
          <div className=" Policy flex gap-4 items-center">
            <label
              htmlFor="policy"
              className="ml-14 whitespace-nowrap order-2 text-[1.3rem] lmobile:left-[35px]"
            >
              By signing up, you agree to our terms of services and privacy
              policy.
            </label>
            <input
              name="policy"
              type="checkbox"
              required
              className="order-1 top-[0px] left-[100px] rounded bg-primary-white-2 
              shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] box-border w-[19px] h-[19px] border-[1px] 
              border-solid border-primary-black-7 lmobile:left-[0px]"
            />
          </div>
        </div>
        <button
          disabled={requestSent}
          className="relative top-[0px] font-medium left-[0px] mt-6 rounded-2xl bg-primary-blue-1 box-border 
            w-[270px] overflow-hidden flex flex-row items-center justify-center 
            py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px]"
        >
          Sign Up
        </button>

        <div className="relative w-[270px] h-[20px] text-sm text-center lmobile:w-[391px]">
          <Link to="/auth/login">
            <div className="absolute top-[-10px] left-[0px] font-light lmobile:top-[0px]">
              <span>{`Already have an account? `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Page1;
