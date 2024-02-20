import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNextResetPasswordPage } from "../../../redux/slice/authSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Password3 = () => {
  const dispatch = useDispatch();

  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordMatch = password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordMatch) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}/auth/password/new`, {
          phone: phoneNumber,
          password: password,
        })
        .then(() => {
          toast("Password reset successful");
          dispatch(getNextResetPasswordPage("congratulations"));
        })
        .catch((err) => {
          toast(err.response.data.message);
          console.log("err", err.response.data.message);
        });
    } else {
      toast("Password mismatch");
      console.log("Error: password mismatch");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px]"
      >
        <div className="relative h-[106px] w-[418px] text-center">
          <div className="absolute left-[40px] right-[40px] top-[40px] text-6xl font-semibold">
            Password reset
          </div>
          <div className="absolute left-[40px] right-[40px] top-[90px] text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            Enter a new password for your account.
          </div>
        </div>
        <div className="relative h-[146px] w-[391px] text-lg text-primary-black-7">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter password"
            className="absolute left-[60px] top-[18px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          <input
            type="password"
            required
            placeholder="Re-enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="absolute left-[60px] top-[91px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />
        </div>
        <div className="relative h-[49px] w-[391px] text-xl text-primary-white-1">
          <button
            className="absolute left-[60px] top-[-10px] box-border flex w-[270px] flex-row items-center 
           justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] lmobile:left-[0px] lmobile:w-[391px]"
          >
            <div className="relative font-medium">Submit</div>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Password3;
