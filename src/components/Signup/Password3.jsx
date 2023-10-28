import React from 'react'

import { Link } from 'react-router-dom';

const Password3  =() => {
    return(
        <div className="flex flex-col items-center justify-start text-left">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[418px] h-[106px] text-center">
            <div className="absolute top-[0px] text-6xl right-[40px] left-[40px] font-semibold">
              Password reset
            </div>
            <div className="absolute top-[73px] left-[0px] text-5xl font-light">
              Enter a new password for your account.
            </div>
          </div>
          <div className="relative w-[391px] h-[146px] text-lg text-primary-black-7">
            <input type='password' placeholder='Enter password' className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-white-1 box-border 
            w-[391px] h-[55px] px-[24px] text-black font-light outline-none overflow-hidden border-[1px] border-solid border-primary-black-7" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Enter password
              </div>
            </div> */}
            <input type='password' placeholder='Re-enter password' className="absolute top-[91px] left-[0px] rounded-2xl bg-primary-white-1 box-border 
            w-[391px] h-[55px] px-[24px] text-black font-light outline-none overflow-hidden border-[1px] border-solid border-primary-black-7" />
              {/* <div className="absolute top-[15px] left-[29px] font-light">
                Re-enter password
              </div>
            </div> */}
          </div>
          <div className="relative w-[391px] h-[49px] text-xl text-primary-white-1">
           <Link to='/congrats2'>
           <div className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Submit</div>
            </div>
           </Link>
          </div>
        </div>
      </div>
    )
}

export default Password3;