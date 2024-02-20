import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slice/authSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LOADER from "./../../../assets/circleLoading.svg";

import * as Hooks from "./../../../hooks/index";
import { Input } from "antd";

const Login1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, loading, postData } = Hooks.usePost(
    `${process.env.REACT_APP_ENDPOINT}/auth/signin`,
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // adding +234 prefix because its required by the endpoint
    const verfiedPhoneNumber = "+234" + phoneNumber.slice(-10);
    const loginData = { phone: verfiedPhoneNumber, password };
    // null is to tell the function no header is needed for this post request
    postData(loginData, null, true);
  };

  useEffect(() => {
    if (error) {
      toast(error);
      return;
    }
    toast("Signin Successful");
    dispatch(loginUser());
    setTimeout(() => {
      navigate(
        location?.state?.destination
          ? location?.state?.destination
          : "/dashboard",
        { replace: true },
      );
    }, 1500);
  }, [data, dispatch, location, navigate, error]);

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px]"
      >
        <div className="relative h-[139px] w-[456px] text-center">
          <div className="font-semi-bold absolute left-[167px] top-[40px] text-6xl">
            Login
          </div>
          <div className="absolute left-[40px] right-[40px] top-[90px] px-9 text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            <p className="m-0">
              Kindly input your phone number with password to login.
            </p>
          </div>
        </div>
        <div className="relative h-[183px] w-[392px] text-sm">
          <div className="absolute left-[0px] top-[164px] h-[19px] w-[392px]">
            <div className="absolute left-[60px] top-[0px] h-[19px] w-[153px] lmobile:left-[0px]">
              <div className="absolute left-[35px] top-[0px]">
                Keep me logged in
              </div>
              <input
                type="checkbox"
                className="absolute left-[0px] top-[0px] box-border h-[19px] w-[19px] rounded border-[1px] border-solid border-primary-black-7 bg-primary-white-2 shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] outline-none"
              />
            </div>
            <Link to="/auth/forgotPassword">
              <div className="absolute left-[60px] top-[30px] text-primary-blue-1 lmobile:left-[279px] lmobile:top-[0px]">
                Forgot password?
              </div>
            </Link>
          </div>
          <div className="absolute left-[0px] top-[0px] h-[146px] w-[391px] text-lg text-primary-black-7">
            <Input
              type="tel"
              placeholder="Phone number"
              minLength={10}
              maxLength={11}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="absolute left-[60px] top-[0px] box-border h-[55px] w-[270px] 
              overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />

            <Input.Password
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="absolute left-[60px] top-[91px] box-border h-[55px] w-[270px] 
              overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />
          </div>
        </div>
        <div className="relative h-[87px] w-[391px] text-base">
          <Link to="/auth/signup">
            <div className="absolute left-[60px] top-[65px] font-light lmobile:left-[0px]">
              <span>{`Don’t have an account?   `}</span>
              <span className="text-primary-blue-1">Sign up</span>
            </div>
          </Link>

          <button className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] text-xl text-primary-white-1 lmobile:left-[0px] lmobile:w-[391px]">
            <div className=" font-medium">
              {loading ? (
                <div className=" w-full h-full">
                  <img
                    className="h-[3rem] bg-transparent object-cover"
                    src={LOADER}
                    alt="loading"
                  />
                </div>
              ) : (
                "Login"
              )}
            </div>
          </button>
        </div>
        {data ? <div>i am the data: </div> : <div>Sorry 😢 no data yet</div>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login1;
