import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "./stepper";

// import { useDispatch } from "react-redux";
// import { getNextSignupPage } from "../../redux/slice/authSlice";
// import HandlePassword from "../../Utility/HandlePassword";

const Page3 = () => {
  const [passwrordMessage, setPasswordMessage] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [reEnterPasswordMessage, setReEnterPasswordMessage] = useState(" ");
  const [reEnterPassword, setReEnterPassword] = useState(" ");
  const [equalPassword, setEqualPassword] = useState(false);
  const bg3 = "bg-primary-blue-1";
  const txt3 = "text-primary-white-1";
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!equalPassword) {
      setPasswordMessage("Password and Re-Entered Password must match");
      setReEnterPasswordMessage(
        " Password and Re-Entered Password must match ",
      );
      return;
    }
    // This is the regular expression filter that check if the password meets the requirement
    const regEx =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9]).+$/;
    // We check by testing the password
    const isPasswordValid = regEx.test(password);
    const isreEnterPasswordValid = regEx.test(reEnterPassword);

    if (isPasswordValid) {
      setPasswordMessage("Strong Password");
    } else if (!isPasswordValid) {
      setPasswordMessage(
        " Password must contain at least one uppercase letter, one special character, and one number.",
      );
    }

    if (isreEnterPasswordValid) {
      setReEnterPasswordMessage("Strong Password");
    } else if (!isreEnterPasswordValid) {
      setReEnterPasswordMessage(
        " Password must contain at least one uppercase letter, one special character, and one number.",
      );
    }
    // dispatch(getNextSignupPage("congratulations"));
  };

  function handlePassword(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "reEnterPassword") {
      setReEnterPassword(e.target.value);
    }
    console.log(e);
  }

  function onBlurr(e) {
    if (password === reEnterPassword) {
      setEqualPassword(true);
      setPasswordMessage("Password Match");
      setReEnterPasswordMessage(" Password Match ");
    } else {
      setPasswordMessage("Password and Re-Entered Password must match");
      setReEnterPasswordMessage(
        " Password and Re-Entered Password must match ",
      );
    }
  }
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
        <div className="flex flex-col gap-5 h-[419px] w-[391px] text-lg text-primary-black-7">
          <input
            type="text"
            placeholder="First name"
            minLength={3}
            required
            className=" left-[60px]
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
            className=" left-[60px] top-[91px] 
            box-border h-[55px] w-[270px] overflow-hidden 
            rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 
            px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          <input
            type="tel"
            placeholder="Enter your parent/guidiance phone number"
            required
            maxLength={11}
            minLength={10}
            className=" left-[60px] top-[182px] 
            box-border h-[55px] w-[270px] overflow-hidden rounded-2xl border-[1px] border-solid 
            border-primary-black-7 bg-primary-white-1 px-[24px] font-light text-black outline-none lmobile:left-[0px] lmobile:w-[391px]"
          />

          {/* <select required className=" top-[182px] left-[60px] 
            rounded-2xl bg-primary-white-1 box-border w-[270px] h-[55px] outline-none px-[24px] 
            font-light text-black overflow-hidden border-[1px] border-solid border-primary-black-7 lmobile:w-[391px] lmobile:left-[0px]" >
            <option value="" hidden>What best describes you?</option>
            <option value="option 1">I am a parent</option>
            <option value="option 2">I am a student</option>
            </select> */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => handlePassword(e)}
              required
              className=" left-[60px] top-[273px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1 px-[24px] font-light 
            text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
            />
            {passwrordMessage && <small> {passwrordMessage} </small>}
          </div>

          <input
            type="password"
            name="reEnterPassword"
            onBlur={(e) => onBlurr(e)}
            placeholder="Re-enter password"
            onChange={(e) => handlePassword(e)}
            required
            className=" left-[60px] top-[364px] box-border h-[55px] w-[270px] 
            overflow-hidden rounded-2xl border-[1px] border-solid border-primary-black-7 bg-primary-white-1  px-[24px] font-light text-black outline-none lmobile:left-[0px]  lmobile:w-[391px]"
          />
          {reEnterPasswordMessage && <small> {reEnterPasswordMessage} </small>}
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
  );
};

export default Page3;
