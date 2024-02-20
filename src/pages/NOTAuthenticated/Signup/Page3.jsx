import React, { useEffect, useState } from "react";
import Stepper from "./stepper";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getNextSignupPage, setUserInfo } from "../../../redux/slice/authSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Utility from "./../../../Utility/index";

const Page3 = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.userInfo.phoneNumber);

  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [passwordValid, setPasswordValid] = useState("");

  const [message, setMessage] = useState({
    passwrordMessage: "",
    confirmPasswordMessage: "",
  });
  const [userDetail, setUSerDetail] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber,
  });

  async function SignupPost(data) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/auth/signup`,
        data,
      );
      toast(response.data.message);
      SignInPost(data, true);
    } catch (error) {
      toast(error.response.data.message);
      // console.error(error.response.data.message);
    }
  }

  async function SignInPost(data, shouldCreatProfile = false) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/auth/signin`,
        data,
      );

      const authorization = await response.headers.authorization;
      const userID = await response.data.data.id;

      dispatch(setUserInfo({ userID }));
      dispatch(setUserInfo({ userKey: authorization }));

      if (shouldCreatProfile) {
        await CreateProfile(userID, authorization);
      }
    } catch (error) {
      toast(error.response.data.message);
      // console.error("error from signup:", error.response.data.message);
    }
  }

  async function CreateProfile(id, authorization) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/user/${id}/profile`,
        {
          firstname: userDetail.firstName,
          lastname: userDetail.lastName,
          email: userDetail.email,
        },
        { headers: { Authorization: authorization } },
      );
      toast(response.data.message);
      dispatch(getNextSignupPage("unboarding"));
      // console.log(userInfoFromRedux);
    } catch (error) {
      toast(error.response.data.message);
      // console.error("error from create profile:", error.response.data.message);
    }
  }

  const handleSubmit = async (e) => {
    console.log(userInfoFromRedux);
    e.preventDefault();

    console.log(passwordValid);

    if (passwordValid) {
      SignupPost({
        phone: userDetail.phoneNumber,
        password,
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(setUserInfo(userDetail));
  }, [userDetail, dispatch]);

  const userInfoFromRedux = useSelector((state) => state.auth.userInfo);

  function onBlurr() {
    const isPasswordValid = Utility.isPasswordValid(
      setMessage,
      message,
      password,
      confirmPassword,
    );
    setPasswordValid(isPasswordValid);
  }

  const bg3 = "bg-primary-blue-1";
  const txt3 = "text-primary-white-1";

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
                setUSerDetail((prevMessage) => ({
                  ...prevMessage,
                  firstName: e.target.value,
                }))
              }
              className=" left-[60px]
              top-[1px] mt-0  
              box-border h-[55px] w-[270px] ml-[60px] overflow-hidden 
              rounded-2xl border-[1px] border-solid border-primary-black-7 
              bg-primary-white-1 px-[24px] font-light 
              text-black outline-none lmobile:ml-[0px] lmobile:left-[0px] lmobile:w-[391px]"
            />

            <input
              type="text"
              placeholder="Last name"
              minLength={3}
              required
              onChange={(e) =>
                setUSerDetail((prevMessage) => ({
                  ...prevMessage,
                  lastName: e.target.value,
                }))
              }
              className=" left-[60px] top-[91px] mt-[25px] ml-[60px]
            box-border h-[55px] w-[270px] overflow-hidden 
            rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 
            px-[24px] font-light text-black outline-none lmobile:ml-[0px] lmobile:left-[0px] lmobile:w-[391px]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) =>
                setUSerDetail((prevMessage) => ({
                  ...prevMessage,
                  email: e.target.value,
                }))
              }
              className=" left-[60px] top-[182px]  mt-[25px] ml-[60px] box-border h-[55px] w-[270px] overflow-hidden rounded-2xl border-[1px] border-solid 
            border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:ml-[0px] lmobile:left-[0px] lmobile:w-[391px]"
            />
            <div>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                onBlur={(e) => onBlurr()}
                required
                onChange={(e) => setPassword(e.target.value)}
                className=" left-[60px] top-[273px] mt-[25px] ml-[60px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light 
            text-black outline-none lmobile:ml-[0px] lmobile:left-[0px] lmobile:w-[391px]"
              />
              {message.passwrordMessage && (
                <small> {message.passwrordMessage} </small>
              )}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                onBlur={(e) => onBlurr()}
                placeholder="Re-enter password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" left-[60px] top-[364px] mt-[25px] ml-[60px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:ml-[0px]  lmobile:left-[0px]  lmobile:w-[391px]"
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
