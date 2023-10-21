import React from 'react'

const SignUp3 = () => {

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
          <div className="relative w-[494px] h-[139px]">
            <div className="absolute top-[0px] left-[164px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl font-light text-center">
              <p className="m-0">
                Kindly fill in the information below to complete
              </p>
              <p className="m-0">the sign up process.</p>
            </div>
          </div>
          <div className="relative w-[391px] h-[419px] text-lg text-primary-black-7">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                First name
              </div>
            </div>
            <div className="absolute top-[91px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Last name
              </div>
            </div>
            <div className="absolute top-[182px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Email
              </div>
            </div>
            <div className="absolute top-[273px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Password
              </div>
            </div>
            <div className="absolute top-[364px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                Re-enter password
              </div>
            </div>
          </div>
          <div className="relative w-[391px] h-[87px] text-base">
            <div className="absolute top-[65px] left-[0.5px] font-light">
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

export default SignUp3;