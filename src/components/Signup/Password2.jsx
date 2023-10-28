import React from 'react'

import { Link } from 'react-router-dom';
import Input from './input';



const Password2 =() => {

    return (
        <div className="flex flex-col items-center justify-start text-left">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="relative w-[470px] h-[139px] text-center">
              <div className="absolute top-[0px] text-6xl right-[66px] left-[66px] font-semibold">
                Password reset
              </div>
              <div className="absolute top-[73px] left-[0px] text-5xl font-light">
                <p className="m-0">
                  Reset password by entering the 6-digit code
                </p>
                <p className="m-0">sent to your phone number/email.</p>
              </div>
            </div>
            <Input />
            <div className="relative w-[476px] h-[134px] text-lg text-primary-black-5">
              <div className="absolute top-[41px] left-[0px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[41px] left-[82px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[41px] left-[164px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[41px] left-[246px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[41px] left-[328px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[41px] left-[410px] rounded-2xl bg-primary-white-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[29px] border-[1px] border-solid border-primary-black-7">
                <div className="relative font-light">-</div>
              </div>
              <div className="absolute top-[0px] left-[197px] font-light text-black">
                Enter code
              </div>
              <div className="absolute top-[112px] left-[386px] text-base text-primary-blue-1">
                Resend OTP
              </div>
            </div>
            <div className="relative w-[391px] h-[87px] text-base">
            <Link to='/login1'>
            <div className="absolute top-[65px] left-[0px] font-light">
                <span>{`Already have an account?   `}</span>
                <span className="text-primary-blue-1">Login</span>
              </div>
            </Link>
              <Link to='/password3'>
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
                <div className="relative font-medium">Submit</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Password2;