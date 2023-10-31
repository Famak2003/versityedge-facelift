import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Password1 =() => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/password2")
  }

    return (
        <div className="flex flex-col items-center justify-start text-left">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[475px] h-[139px] text-center">
            <div className="absolute top-[0px] left-[52px] text-6xl right-[52px] font-semibold">
              Forgot password
            </div>
            <div className="absolute top-[73px] left-[80px] right-[80px] text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
              <p className="m-0">Enter phone number to reset password +23481 27*** 98/ abdulm***@gmail.com</p>
            </div>
          </div>
          <input type='tel' placeholder='Phone number' required minLength={10} maxLength={11} className="relative rounded-2xl bg-primary-white-1 box-border 
          w-[270px] h-[55px] px-[24px] mt-12 text-black font-light outline-none overflow-hidden shrink-0 text-lg border-[1px] 
          border-solid border-primary-black-7 lmobile:w-[391px]" />
            {/* <div className="absolute top-[15px] left-[29px] font-light">
              Email/Phone number
            </div>
          </div> */}
          <div className="relative w-[391px] h-[87px] text-base">
            <Link to="/password2">
            <Link to='/login1'>
            <div className="absolute top-[65px] left-[60px] font-light lmobile:left-[0px]">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            </Link>
            </Link>
            <button className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-center text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Submit</div>
            </button>
          </div>
        </form>
      </div>
    )
} 

export default Password1;