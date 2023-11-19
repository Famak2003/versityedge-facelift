import React from "react";
import { useDispatch } from "react-redux";

import { getNextResetPasswordPage } from "../../redux/slice/authSlice";

const Password3 = () => {
  const dispatch = useDispatch();
  dispatch(getNextResetPasswordPage("congratulations"));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px]"
      >
        <div className="relative h-[106px] w-[418px] text-center">
          <div className="absolute left-[40px] right-[40px] top-[0px] text-6xl font-semibold">
            Password reset
          </div>
          <div className="absolute left-[40px] right-[40px] top-[73px] text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            Enter a new password for your account.
          </div>
        </div>
        <div className="relative h-[146px] w-[391px] text-lg text-primary-black-7">
          <input
            type="password"
            required
            placeholder="Enter password"
            className="absolute left-[60px] top-[0px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          <input
            type="password"
            required
            placeholder="Re-enter password"
            className="absolute left-[60px] top-[91px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />
        </div>
        <div className="relative h-[49px] w-[391px] text-xl text-primary-white-1">
          <button
            className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center 
           justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] lmobile:left-[0px] lmobile:w-[391px]"
          >
            <div className="relative font-medium">Submit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password3;
