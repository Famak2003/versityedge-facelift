import React from "react";
import teenyicon from "../../assets/teenyicons_tick-circle-solid.svg";

import { Link } from "react-router-dom";

const Congrats1 = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-start gap-[40px]">
        <div className="relative h-[139px] w-[502px]">
          <div className="absolute left-[70px] right-[70px] top-[40px] px-24 text-6xl font-semibold">
            Congratulations!
          </div>
          <div className="absolute left-[60px] right-[60px] top-[90px] text-center text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
            <p className="m-0">
              Congratulations, your account has been created on Versityedge.
            </p>
          </div>
        </div>
        <img
          className="relative mt-6 h-[126px] w-[126px] shrink-0 overflow-hidden lmobile:mt-0"
          alt=""
          src={teenyicon}
        />
        <div className="relative h-[49px] w-[391px] text-xl text-primary-white-1">
          <Link to="/login">
            <div className="absolute left-[60px] top-[0px] box-border flex w-[270px] flex-row items-center justify-center overflow-hidden rounded-2xl border-[1px] border-solid border-primary-blue-1 bg-primary-blue-1 px-[24px] py-[11px] lmobile:left-[0px] lmobile:w-[391px]">
              <div className="relative font-medium">Login</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Congrats1;
