import React, {useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';


  const Password2 =() => {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/password3')
  }

      const [otp, setOtp] = useState(new Array(6).fill(""));

      const handleChange =(e, index)=> {
        if(isNaN(e.target.value)) return false;

        setOtp([...otp.map((data, indx) => (indx === index ? e.target.value:data))]);

        if (e.target.value && e.target.nextSibling) {
          e.target.nextSibling.focus()
        }
      }

      const handlePaste =(e)=> {
        const value = e.clipboardData.getData("text")
        if(isNaN(value)) return false;

        const updatedValue = value.toString().split("").slice(0, otp.length);

        setOtp(updatedValue)

      } 

    return (
        <div className="flex flex-col items-center justify-start text-left">
        <form onSubmit={handleSubmit}  className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="relative w-[470px] h-[139px] text-center">
              <div className="absolute top-[0px] text-6xl right-[66px] left-[66px] font-semibold">
                Password reset
              </div>
              <div className="absolute top-[73px] left-[44px] right-[44px] text-3xl font-light mb-2px lmobile:text-5xl lmobile:left-[0px] lmobile:right-[0px]">
                <p className="m-0">
                  Reset password by entering the 6-digit code sent to your phone number/email.
                </p>
              </div>
            </div>
            
            <div className="relative w-[476px] h-[134px] text-lg text-primary-black-5">
            <div className='flex justify-center w-[476px] h-[134px] text-lg 
            text-primary-black-5'>
                  {
                  otp.map((data, i) => {
                        return <input 
                        type='password' 
                        placeholder='-'
                        required
                        value={data} 
                        onChange={(e)=>handleChange(e, i)}
                        onPaste={(e)=>{
                          handlePaste(e)
                        }}
                        maxLength={1}
                        id={`otp-input-${i}`}
                        className='w-16 h-16 bg-primary-white-1 overflow-hidden  ml-[14px] mt-[36px] left-[246px] 
                        right-[246px] text-3xl border-[1px] border-solid 
                        border-primary-black-7 rounded-2xl  mx-2 text-center focus:outline-none 
                        lmobile:w-24 lmobile:h-24' />
                  })
                  }
              <div className="absolute top-[0px] left-[197px] font-light text-black">
                Enter code
              </div>
              <div className="absolute top-[112px] left-[308px] text-base text-primary-blue-1 lmobile:left-[386px]">
                Resend OTP
              </div>
            </div>
            </div>
            
            <div className="relative w-[391px] h-[87px] text-base">
            <Link to='/login1'>
            <div className="absolute top-[65px] left-[60px] font-light lmobile:left-[0px]">
                <span>{`Already have an account?   `}</span>
                <span className="text-primary-blue-1">Login</span>
              </div>
            </Link>
              <button className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] 
              border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
                <div className="relative font-medium">Submit</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Password2;