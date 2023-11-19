import React from "react";
import Stepper from "./stepper";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getNextSignupPage } from "../../redux/slice/authSlice";

const Page3 = () => {
  const bg3 = "bg-primary-blue-1";
  const txt3 = "text-primary-white-1";
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNextSignupPage("congratulations"));
    console.log("signUp page 3");
  };

  return (
    <div className="flex flex-col items-center justify-start gap-[40px] text-5xl text-primary-blue-1">
      <div className="relative h-[59px] w-[289px]">
        <div className="absolute left-[58.5px] top-[29.5px] box-border h-px w-[172px] border-t-[1px] border-solid border-primary-blue-7" />
        <Stepper bg3={bg3} txt3={txt3} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black"
      >
        <div className="relative h-[139px] w-[494px]">
          <div className="absolute left-[164px] top-[0px] font-semibold">
            Sign up
          </div>
          <div className="absolute left-[70px] right-[70px] top-[73px] text-center text-3xl font-light lmobile:left-[8px] lmobile:right-[8px] lmobile:text-5xl ">
            <p className="lmobile:m:0 m-0 mr-3 mt-6">
              Kindly fill in the information below to complete the sign up
              process.
            </p>
          </div>
        </div>
        <div className="relative h-[419px] w-[391px] text-lg text-primary-black-7">
          <input
            type="text"
            placeholder="First name"
            minLength={3}
            required
            className="absolute left-[60px]
              top-[1px] mt-0  
              box-border h-[55px] w-[270px] overflow-hidden 
              rounded-2xl border-[1px] border-solid border-primary-black-7 
              bg-primary-white-1 px-[24px] font-light 
              text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          <input
            type="text"
            placeholder="Last name"
            minLength={3}
            required
            className="absolute left-[60px] top-[91px] 
            box-border h-[55px] w-[270px] overflow-hidden 
            rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 
            px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="absolute left-[60px] top-[182px] 
            box-border h-[55px] w-[270px] overflow-hidden rounded-2xl border-[1px] border-solid 
            border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />
          <input
            type="password"
            placeholder="Enter password"
            required
            className="absolute left-[60px] top-[273px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light 
            text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
          />

          <input
            type="password"
            placeholder="Re-enter password"
            required
            className="absolute left-[60px] top-[364px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1  px-[24px] font-light text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
          />
        </div>

        <div className="relative h-[87px] w-[391px] text-base">
          <Link to="/login1">
            <div className="absolute left-[60px] top-[65px] font-light lmobile:left-[0.5px]">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
          </Link>

          <button className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] text-xl text-primary-white-1 lmobile:left-[0px] lmobile:w-[391px]">
            <div className="relative font-medium">Sign up</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page3;
