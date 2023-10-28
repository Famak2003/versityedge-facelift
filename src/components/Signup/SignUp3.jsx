import React from 'react'
import Stepper from './stepper';

import {Link} from 'react-router-dom'

const SignUp3 = () => {
    const bg3 = "bg-primary-blue-1"
    const txt3 = "text-primary-white-1"
    return(
        <div className="flex flex-col items-center justify-start gap-[40px] text-5xl text-primary-blue-1">
        <div className="relative w-[289px] h-[59px]">
          <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
          <Stepper bg3={bg3} txt3={txt3}/>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative w-[494px] h-[139px]">
            <div className="absolute top-[0px] left-[164px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[60px] right-[60px] text-3xl font-light text-center lmobile:text-5xl lmobile:left-[8px] lmobile:right-[8px] ">
              <p className="m-0 mr-3 mt-6 lmobile:m:0">
                Kindly fill in the information below to complete the sign up process.
              </p>
            </div>
          </div>
          <div className="relative w-[391px] h-[419px] text-lg text-primary-black-7">
          <input type='tel' placeholder='First name' className="absolute mt-0 text-black top-[1px] px-[24px]  
              rounded-2xl bg-primary-white-1 box-border w-[270px] 
              h-[55px] outline-none overflow-hidden border-[1px] 
              border-solid border-primary-black-7 top-[15px] left-[60px] font-light lmobile:w-[391px] lmobile:left-[0px]"  />
          {/* <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-white-1 
          box-border w-[391px] h-[55px] overflow-hidden border-[1px] border-solid border-primary-black-7">
              <div className="absolute top-[15px] left-[29px] font-light">
                First name
              </div>
            </div> */}
            <input type='text' placeholder='Last name' className="absolute top-[91px] left-[60px] 
            rounded-2xl bg-primary-white-1 box-border font-light 
            w-[270px] h-[55px] outline-none overflow-hidden border-[1px] 
            border-solid px-[24px] text-black border-primary-black-7 lmobile:w-[391px] lmobile:left-[0px]" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Last name
              </div> */}
            {/* </div> */}
            <input type='email' placeholder='Email' className="absolute top-[182px] left-[60px] 
            rounded-2xl bg-primary-white-1 box-border w-[270px] h-[55px] outline-none px-[24px] 
            font-light text-black overflow-hidden border-[1px] border-solid border-primary-black-7 lmobile:w-[391px] lmobile:left-[0px]" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Email
              </div> */}
            {/* </div> */}
            <input type='password' placeholder='Enter password' className="absolute top-[273px] left-[60px] rounded-2xl bg-primary-white-1 box-border 
            w-[270px] h-[55px] outline-none px-[24px] text-black font-light overflow-hidden border-[1px] 
            border-solid border-primary-black-7 lmobile:w-[391px]  lmobile:left-[0px]" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Password
              </div> */}
            {/* </div> */}
            <input type='password' placeholder='Re-enter password' className="absolute top-[364px] left-[60px] rounded-2xl bg-primary-white-1 box-border 
            w-[270px] h-[55px] outline-none px-[24px] text-black font-light  overflow-hidden border-[1px] border-solid border-primary-black-7 lmobile:w-[391px]  lmobile:left-[0px]" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Re-enter password
              </div> */}
            {/* </div> */}
          </div>
         
          <div className="relative w-[391px] h-[87px] text-base">
           <Link to='/login1'>
           <div className="absolute top-[65px] left-[60px] font-light lmobile:left-[0.5px]">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
           </Link>
            <Link to="/congrats1">
            <div className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Sign up</div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    )
}

export default SignUp3;