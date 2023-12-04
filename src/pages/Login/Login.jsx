import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserIn } from "../../redux/slice/authSlice";

const Login1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("AUTH PAGE =========>", location.state.destination);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserIn());
    if (location.state) {
      navigate(`${location.state.destination}`, { replace: true });
    } else navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-start text-left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-[40px]"
      >
        <div className="relative h-[139px] w-[456px] text-center">
          <div className="font-semi-bold absolute left-[167px] top-[0px] text-6xl">
            Login
          </div>
          <div className="absolute left-[40px] right-[40px] top-[73px] px-9 text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
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
            <input
              type="tel"
              placeholder="Phone number"
              minLength={10}
              maxLength={11}
              required
              className="absolute left-[60px] top-[0px] box-border h-[55px] w-[270px] 
              overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
            />

            <input
              type="password"
              placeholder="Password"
              required
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
            <div className="relative font-medium">Login</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login1;
