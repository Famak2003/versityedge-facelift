import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Login1 =() => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }

  
  

    return (
        <div className="flex flex-col items-center justify-start text-left">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-[40px]">
          <div className="relative w-[456px] h-[139px] text-center">
            <div className="absolute top-[0px] left-[167px] text-6xl font-semi-bold">
              Login
            </div>
            <div className="absolute px-9 top-[73px] left-[40px] right-[40px] text-5xl font-light lmobile:left-[0px] lmobile:right-[0px]">
              <p className="m-0">Kindly input your phone number with password to login.</p>
             
            </div>
          </div>
          <div className="relative w-[392px] h-[183px] text-sm">
            <div className="absolute top-[164px] left-[0px] w-[392px] h-[19px]">
              <div className="absolute top-[0px] left-[60px] w-[153px] h-[19px] lmobile:left-[0px]">
                <div className="absolute top-[0px] left-[35px]">
                  Keep me logged in
                </div>
                <input type='checkbox' className="absolute top-[0px] left-[0px] rounded bg-primary-white-2 shadow-[0px_4px_4px_rgba(176,_176,_176,_0.25)_inset] box-border w-[19px] h-[19px] outline-none border-[1px] border-solid border-primary-black-7" />
              </div>
             <Link to="/password1">
             <div className="absolute top-[30px] left-[60px] text-primary-blue-1 lmobile:top-[0px] lmobile:left-[279px]">
                Forgot password?
              </div>
             </Link>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[391px] h-[146px] text-lg text-primary-black-7">
              <input type='tel'placeholder='Phone number' minLength={10} maxLength={11} required className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-white-1 box-border 
              w-[270px] h-[55px] outline-none px-[24px] text-black font-light overflow-hidden border-[1px] border-solid border-primary-black-7 lmobile:w-[391px] lmobile:left-[0px]" />
                {/* <div className="absolute top-[15px] left-[29px] font-light">
                  Email/Phone number
                </div>
              </div> */}
              <input type='Password' placeholder='Password' required className="absolute top-[91px] left-[60px] rounded-2xl bg-primary-white-1 box-border 
              w-[270px] h-[55px] outline-none px-[24px] text-black font-light overflow-hidden border-[1px] border-solid border-primary-black-7 lmobile:w-[391px] lmobile:left-[0px]" />
                {/* <div className="absolute top-[15px] left-[29px] font-light">
                  Password
                </div> */}
              {/* </div> */}
            </div>
          </div>
          <div className="relative w-[391px] h-[87px] text-base">
           <Link to="/signup">
           <div className="absolute top-[65px] left-[60px] font-light lmobile:left-[0px]">
              <span>{`Don’t have an account?   `}</span>
              <span className="text-primary-blue-1">Sign up</span>
            </div>
           </Link>
            {/* <Link to="/"> */}
            <button className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Login</div>
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>

    )
}

export default Login1;