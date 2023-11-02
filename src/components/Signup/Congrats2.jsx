import React from 'react';
import teenyicon from '../../assets/teenyicons_tick-circle-solid.svg';

import { Link } from 'react-router-dom';


const Congrats2 =()=> {
    return(
        <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[469px] h-[139px]">
            <div className="absolute text-6xl px-20 top-[0px] left-[53px] font-semibold">
              Congratulations!
            </div>
            <div className="absolute top-[73px] px-6 left-[60px] right-[60px] text-center text-3xl font-light lmobile:text:5xl lmobile:right-[0px] lmobile:left-[0px]">
              <p className="m-0">
                Congratulations, you have successfully reset your password.
              </p>
            </div>
          </div>
          <img
            className="relative w-[126px] h-[126px] overflow-hidden shrink-0"
            alt=""
            src={teenyicon}
          />
          <div className="relative w-[391px] h-[49px] text-xl text-primary-white-1">
            <Link to="/login1">
            <div className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] 
            overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Login</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
  
    )
}

export default Congrats2;