import React from "react";

import { Link } from "react-router-dom";

import ngaFlag from "./../../assets/twemoji_flag-nigeria.png";
import Stepper from "./stepper";
import { useDispatch } from "react-redux";
import { getNextSignupPage } from "../../redux/slice/authSlice";

// import useFetch from '../useFetch/useFetch';

const Page1 = () => {
  const dispatch = useDispatch();

  const txt1 = "text-primary-white-1";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNextSignupPage(2));
  };

  return (
    <div className="font-text-xl-medium relative flex w-full flex-col items-center justify-start gap-[40px] text-center text-5xl text-primary-blue-1">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black"
      >
        <div className="relative h-[59px] w-[289px]">
          <div className="absolute left-[58.5px] top-[29.5px] box-border h-px w-[172px] border-t-[1px] border-solid border-primary-blue-7" />
          <Stepper bg1={"bg-primary-blue-1"} txt1={txt1} />
        </div>
        <div className="relative h-[139px] w-[510px]">
          <div className="absolute left-[172px] top-[0px] font-semibold">
            Sign up
          </div>
          <div className="absolute left-[80px] top-[90px] whitespace-pre-wrap text-center text-2xl font-light lmobile:left-[0px] lmobile:top-[73px] lmobile:text-4xl">
            <p className="m-4">
              <span className="text-black">{`Admission success is `}</span>
              <span className="text-primary-blue-1">guaranteed.</span>
              <span> Kindly sign up</span>
            </p>
            <p className="m-0">{`to get access to those aming features. `}</p>
          </div>
        </div>
        <div className="relative h-[98px] w-[535px] text-lg text-primary-black-7">
          <div className="absolute left-[0px] top-[0px] h-[55px] w-[535px]">
            <input
              type="tel"
              minLength={10}
              maxLength={10}
              required
              placeholder="Phone number"
              className="relative left-[29px] top-[15px] ml-40 mt-0 
                  box-border h-[55px] w-[230px] overflow-hidden 
                  rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[14px] lmobile:w-[391px]"
            />

            <div className="absolute left-[100px] top-[0px] mt-6 flex flex-row items-center justify-start gap-[16px] overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-2 py-[9.5px] text-black lmobile:left-[0px] lmobile:px-4">
              <img
                className="relative h-9 w-7 shrink-0 overflow-hidden lmobile:w-9"
                alt=""
                src={ngaFlag}
              />
              <div className="relative font-light">+234</div>
            </div>
          </div>
          <div className="absolute left-[0px] top-[79px] h-[19px] w-[458px] text-sm text-black">
            <div className="absolute left-[130px] top-[0px] lmobile:left-[35px]">
              By signing up, you agree to our terms of services and privacy
              policy.
            </div>
            <input
              type="checkbox"
              required
              className="absolute left-[100px] top-[0px] box-border h-[19px] 
                  w-[19px] rounded border-[1px] border-solid border-primary-black-7 
                  bg-primary-white-2 shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] lmobile:left-[0px]"
            />
          </div>
        </div>
        <button
          className="relative left-[0px] top-[0px] mt-6 box-border flex w-[270px] 
                flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] 
                border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] text-xl text-primary-white-1 lmobile:w-[391px]"
        >
          <div className="relative font-medium">Sign Up</div>
        </button>

        <div className="relative h-[20px] w-[270px] text-center text-sm lmobile:w-[391px]">
          <Link to="/login">
            <div className="absolute left-[0px] top-[-10px] font-light lmobile:top-[0px]">
              <span>{`Already have an account? `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page1;
