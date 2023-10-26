import React from 'react';

import { Link } from 'react-router-dom';

import flag from './../../assets/twemoji_flag-nigeria.png'
import Stepper from './stepper';


const Signup = ({onSignUpSuccess}) => {

    const handleSignup = (e) =>{
      e.preventDefault();
    }
    const txt1 = "text-primary-white-1"
    return (
      <div className="relative w-full flex flex-col items-center justify-start gap-[40px] text-center text-5xl text-primary-blue-1 font-text-xl-medium">
        <div className="relative w-[289px] h-[59px]">
          <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
          <Stepper bg1={"bg-primary-blue-1"} txt1={txt1}/>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative w-[510px] h-[139px]">
            <div className="absolute top-[0px] left-[172px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[0px] text-4xl font-light whitespace-pre-wrap text-center">
              <p className="m-4">
                <span className="text-black">{`Admission success is `}</span>
                <span className="text-primary-blue-1">guaranteed.</span>
                <span> Kindly sign up</span>
              </p>
              <p className="m-0">{`to get access to those amazing features. `}</p>
            </div>
          </div>
          <div className="relative w-[535px] h-[98px] text-lg text-primary-black-7">
            <div className="absolute top-[0px] left-[0px] w-[535px] h-[55px]">
              <div className="absolute mt-6 top-[0px] left-[144px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
                <div className="absolute top-[15px] left-[29px] font-light">
                  Phone number
                </div>
              </div>
              <div className="absolute mt-6 top-[0px] left-[0px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-start py-[9.5px] px-4 gap-[16px] text-black border-[1px] border-solid border-primary-black-7">
                <img
                  className="relative w-9 h-9 overflow-hidden shrink-0"
                  alt=""
                  src={flag}
                />
                <div className="relative font-light">+234</div>
              </div>
            </div>
            <div className="absolute top-[79px] left-[0px] w-[458px] h-[19px] text-sm text-black">
              <div className="absolute top-[0px] left-[35px]">
                By signing up, you agree to our terms of services and privacy
                policy.
              </div>
              <div className="absolute top-[0px] left-[0px] rounded bg-primary-white-2 shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] box-border w-[19px] h-[19px] border-[1px] border-solid border-primary-black-7" />
            </div>
          </div>
          <Link to='/signUp2'>
          <div className="relative top-[0px] left-[0px] mt-6 rounded-2xl bg-primary-blue-1 box-border 
            w-[391px] overflow-hidden flex flex-row items-center justify-center 
            py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
              <div className="relative font-medium">Sign Up</div>
            </div>
          </Link>
          
          <div className="relative w-[391px] h-[20px] text-sm text-center">
            <Link to='/login1'>
            <div className="absolute top-[0px] left-[0px] font-light">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Signup;


