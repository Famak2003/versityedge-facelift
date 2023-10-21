import React from 'react'

const SignUp4 =() => {
    return(
        <div className="flex flex-col items-center justify-start gap-[40px] text-5xl text-primary-blue-1">
        <div className="relative w-[289px] h-[59px]">
          <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
          <div className="absolute top-[0px] left-[0px] rounded-17xl bg-primary-white-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1">
            <div className="relative">1</div>
          </div>
          <div className="absolute top-[0px] left-[115px] rounded-17xl bg-primary-white-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1">
            <div className="relative">2</div>
          </div>
          <div className="absolute top-[0px] left-[230px] rounded-17xl bg-primary-blue-1 overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
            <div className="relative">3</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative w-[510px] h-[139px]">
            <div className="absolute top-[0px] left-[172px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl font-light whitespace-pre-wrap text-center">
              <p className="m-0">
                <span className="text-black">{`Admission success is `}</span>
                <span className="text-primary-blue-1">guaranteed</span>
                <span>. Kindly sign up</span>
              </p>
              <p className="m-0">{`to get access to those amazing  features. `}</p>
            </div>
          </div>
          <div className="relative w-[391px] h-[419px] text-lg text-primary-black-1">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Adedamola
              </div>
            </div>
            <div className="absolute top-[91px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Akin
              </div>
            </div>
            <div className="absolute top-[182px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                adedamola@gmail.com
              </div>
            </div>
            <div className="absolute top-[273px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                **********
              </div>
            </div>
            <div className="absolute top-[364px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                **********
              </div>
            </div>
          </div>
          <div className="relative w-[391px] h-[87px] text-base">
            <div className="absolute top-[65px] left-[0px] font-light">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1">
              <div className="relative font-medium">Sign up</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignUp4;