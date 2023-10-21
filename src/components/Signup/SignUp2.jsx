import React from 'react';


const SignUp2 = () => {
    return (
      <div className="relative w-full flex flex-col items-center justify-start gap-[40px] text-center text-5xl text-primary-blue-1 font-text-xl-medium">
        <div className="relative w-[289px] h-[59px]">
          <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
          <div className="absolute top-[0px] left-[0px] rounded-17xl bg-primary-white-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1">
            <div className="relative">1</div>
          </div>
          <div className="absolute top-[0px] left-[115px] rounded-17xl bg-primary-blue-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
            <div className="relative">2</div>
          </div>
          <div className="absolute top-[0px] left-[230px] rounded-17xl bg-primary-white-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1">
            <div className="relative">3</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative w-[486px] h-[139px]">
            <div className="absolute top-[0px] left-[160px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl font-light text-center">
              <p className="m-0">Complete sign up by entering the 6-digit code</p>
              <p className="m-0">sent to your phone number.</p>
            </div>
          </div>
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
            <div className="absolute top-[65px] left-[0px] font-light">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
              <div className="relative font-medium">Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp2;

  