import React from "react";
import teenyicon from "../../assets/teenyicons_tick-circle-solid.svg";

import { Link } from "react-router-dom";

const Congrats = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-start gap-[40px]">
        <div className="relative h-[139px] w-[469px]">
          <div className="absolute left-[53px] top-[0px] px-20 text-6xl font-semibold">
            Congratulations!
          </div>
          <div className="lmobile:text:5xl absolute left-[60px] right-[60px] top-[73px] px-6 text-center text-3xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            <p className="m-0">
              Congratulations, you have successfully reset your password.
            </p>
          </div>
        </div>
        <img
          className="relative h-[126px] w-[126px] shrink-0 overflow-hidden"
          alt=""
          src={teenyicon}
        />
        <div className="relative h-[49px] w-[391px] text-xl text-primary-white-1">
          <Link to="/auth/login">
            <div
              className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row 
            items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] lmobile:left-[0px] lmobile:w-[391px]"
            >
              <div className="relative font-medium">Login</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
