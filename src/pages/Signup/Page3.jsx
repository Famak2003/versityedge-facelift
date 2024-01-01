import React, { useState } from "react";
import Stepper from "./stepper";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getNextSignupPage } from "../../redux/slice/authSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Utility from "./../../Utility/index";

const Page3 = () => {
  const bg3 = "bg-primary-blue-1";
  const txt3 = "text-primary-white-1";
  const dispatch = useDispatch();

  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [message, setMessage] = useState({
    passwrordMessage: "",
    confirmPasswordMessage: "",
  });
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const [userInfo, setUSerInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber,
  });

  //handle password
  function handlePassword(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  }

  // checks if password is equal to confirm password, and if its a strong password
  const isPasswordValid = () => {
    let status = false;
    const isPasswordEqual = password === confirmPassword;

    // checks is password is equall to each other
    if (!isPasswordEqual) {
      toast("Passwords Mismatch");
    }

    // Set password, setPassword warning messages
    setMessage((prevMessage) => ({
      ...prevMessage,
      passwrordMessage: Utility.PasswordValidation(password),
      confirmPasswordMessage: Utility.PasswordValidation(confirmPassword),
    }));

    if (
      isPasswordEqual &&
      message.passwrordMessage === "Strong Password" &&
      message.confirmPasswordMessage === "Strong Password"
    ) {
      status = true;
    }
    return status;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);

    console.log(isPasswordValid());

    if (isPasswordValid()) {
      await axios
        .post(`${process.env.REACT_APP_ENDPOINT}/auth/signup`, {
          phone: userInfo.phoneNumber,
          password: password,
        })
        .then(() => {
          toast("signup initiated");
          console.log("signup initiated");
        });
      await axios
        .post(`${process.env.REACT_APP_ENDPOINT}/auth/signin`, {
          phone: userInfo.phoneNumber,
          password: password,
        })
        .then(() => {
          console.log("signUp page 3");
        });
      await axios
        .post(`${process.env.REACT_APP_ENDPOINT}/user/:id/profile`, {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
        })
        .then(() => {
          toast("user profile initiated");
          console.log("user profile initiated");
          dispatch(getNextSignupPage("congratulations"));
        })
        .catch((err) => {
          toast(err.res.data.message);
          console.log(err.res.data.message);
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-[40px] text-5xl text-primary-blue-1">
        <div className="relative top-[40px] h-[59px] w-[289px]">
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
          <div className="flex flex-col gap-[1rem] h-[419px] w-[391px] text-lg text-primary-black-7">
            <input
              type="text"
              placeholder="First name"
              minLength={3}
              required
              onChange={(e) =>
                setUSerInfo((prevMessage) => ({
                  ...prevMessage,
                  firstName: e.target.value,
                }))
              }
              className=" left-[60px]
              top-[1px] mt-0  
              box-border h-[55px] w-[270px] ml-[60px] overflow-hidden 
              rounded-2xl border-[1px] border-solid border-primary-black-7 
              bg-primary-white-1 px-[24px] font-light 
              text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />

            <input
              type="text"
              placeholder="Last name"
              minLength={3}
              required
              onChange={(e) =>
                setUSerInfo((prevMessage) => ({
                  ...prevMessage,
                  lastName: e.target.value,
                }))
              }
              className=" left-[60px] top-[91px] mt-[25px] ml-[60px]
            box-border h-[55px] w-[270px] overflow-hidden 
            rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 
            px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) =>
                setUSerInfo((prevMessage) => ({
                  ...prevMessage,
                  email: e.target.value,
                }))
              }
              className=" left-[60px] top-[182px]  mt-[25px] ml-[60px] box-border h-[55px] w-[270px] overflow-hidden rounded-2xl border-[1px] border-solid 
            border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />
            <div>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                required
                onChange={(e) => handlePassword(e)}
                className=" left-[60px] top-[273px] mt-[25px] ml-[60px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light 
            text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
              />
              {message.passwrordMessage && (
                <small> {message.passwrordMessage} </small>
              )}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                // onBlur={(e) => onBlurr(e)}
                placeholder="Re-enter password"
                required
                onChange={(e) => handlePassword(e)}
                className=" left-[60px] top-[364px] mt-[25px] ml-[60px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1  px-[24px] font-light text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
              />
              {message.confirmPasswordMessage && (
                <small> {message.confirmPasswordMessage} </small>
              )}
            </div>
          </div>

          <div className="relative h-[87px] w-[391px] text-base">
            <Link to="/auth/login">
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
      <ToastContainer />
    </div>
  );
};

export default Page3;
