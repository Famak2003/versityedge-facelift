import React from 'react';
import { Link } from 'react-router-dom';

const Password1 =() => {
    return (
        <div className="flex flex-col items-center justify-start text-left">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[475px] h-[139px] text-center">
            <div className="absolute top-[0px] left-[52px] text-6xl right-[52px] font-semibold">
              Forgot password
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl font-light">
              <p className="m-0">Enter phone number/email to reset password</p>
              <p className="m-0">+23481 27*** 98/ abdulm***@gmail.com</p>
            </div>
          </div>
          <div className="relative rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden shrink-0 text-lg text-primary-black-7 border-[1px] border-solid border-primary-black-7">
            <div className="absolute top-[15px] left-[29px] font-light">
              Email/Phone number
            </div>
          </div>
          <div className="relative w-[391px] h-[87px] text-base">
            <Link to="/password2">
            <Link to='/login1'>
            <div className="absolute top-[65px] left-[0px] font-light">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            </Link>
            </Link>
            <Link to='/password2'>
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-center text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
              <div className="relative font-medium">Submit</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
} 

export default Password1;