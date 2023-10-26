import React from 'react'
import teenyicon from '../../assets/teenyicons_tick-circle-solid.svg';

import { Link } from 'react-router-dom';


const Congrats1 =() => {
    return (
        <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[502px] h-[139px]">
            <div className="absolute top-[0px] text-6xl px-24 right-[70px] left-[70px] font-semibold">
              Congratulations!
            </div>
            <div className="absolute top-[73px] text-center left-[0px] right-[0px] text-5xl font-light">
              <p className="m-0">
                Congratulations, your account has been created
              </p>
              <p className="m-0">on Versityedge.</p>
            </div>
          </div>
          <img
            className="relative w-[126px] h-[126px] overflow-hidden shrink-0"
            alt=""
            src={teenyicon}
          />
          <div className="relative w-[391px] h-[49px] text-xl text-primary-white-1">
            <Link to="/login1">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-blue-1 box-border w-[391px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] border-[1px] border-solid border-primary-blue-1">
              <div className="relative font-medium">Login</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Congrats1;