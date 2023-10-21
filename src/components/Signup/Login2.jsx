import React from 'react';

const Login2 = () => {
    return(
        <div className="flex flex-col items-center justify-start text-left">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[456px] h-[139px] text-6xl text-center">
            <div className="absolute top-[0px] left-[167px] font-semibold">
              Login
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl px-3 font-light">
              <p className="m-0">Kindly input your email/phone number with</p>
              <p className="m-0">password to login.</p>
            </div>
          </div>
          <div className="relative w-[392px] h-[183px] text-sm">
            <div className="absolute top-[164px] left-[0px] w-[392px] h-[19px]">
              <div className="absolute top-[0px] left-[0px] w-[153px] h-[19px]">
                <div className="absolute top-[0px] left-[35px]">
                  Keep me logged in
                </div>
                <div className="absolute top-[0px] left-[0px] rounded bg-primary-blue-1 shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] box-border w-[19px] h-[19px] border-[1px] border-solid border-primary-black-7" />
              </div>
              <div className="absolute top-[0px] left-[279px] text-primary-blue-1">
                Forgot password?
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[391px] h-[146px] text-lg text-primary-black-1">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
                <a
                  className="absolute top-[15px] left-[29px] font-light text-[inherit] [text-decoration:none]"
                  href="mailto:adedamola@gmail.com"
                  target="_blank"
                >
                  adedamola@gmail.com
                </a>
              </div>
              <div className="absolute top-[91px] left-[0px] rounded-2xl bg-primary-white-1 box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
                <div className="absolute top-[15px] left-[29px] font-light">
                  ********
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[391px] h-[87px] text-base">
            <div className="absolute top-[65px] left-[0px] font-light">
              <span>{`Don’t have an account?   `}</span>
              <span className="text-primary-blue-1">Sign up</span>
            </div>
            <div
              className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] cursor-pointer text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1"
            //   onClick={onPrimaryButtonContainer5Click}
            >
              <div className="relative font-medium">Login</div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Login2;