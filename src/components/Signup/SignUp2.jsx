import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Stepper from './stepper';
import useFetch from '../useFetch/useFetch';


const SignUp2 = () => {

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup3')
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


  // const {data: code, error, isPending} = useFetch(baseURL + "posts");

  // const codeSuccess = () => {
  //   if(code === codeInput) {
  //     <Link to={'/signup3'} ><div className="relative font-medium">Submit</div></Link>
  //   }else
  //   {
  //     <Link to={'/signup3'} ><div className="relative font-medium" disabled>Submit</div></Link>
  //   }
  // }


  const bg2 = "bg-primary-blue-1"
  const txt2 = "text-primary-white-1"
    return (
      <form onSubmit={handleSubmit} className="relative w-full flex flex-col items-center justify-start gap-[40px] text-center text-5xl text-primary-blue-1 font-text-xl-medium">
        <div className="relative w-[289px] h-[59px]">
          <div className="absolute top-[29.5px] left-[58.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-primary-blue-7" />
          <Stepper bg2={bg2} txt2={txt2}/>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-29xl text-black">
          <div className="relative w-[486px] h-[139px]">
            <div className="absolute top-[0px] left-[160px] font-semibold">
              Sign up
            </div>
            <div className="absolute top-[73px] left-[60px] right-[60px] text-3xl font-light text-center lmobile:left-[40px] lmobile:right-[40px] lmobile:text-5xl">
              <p className="m-0">Complete sign up by entering the 6-digit code sent to your phone number.</p>
            </div>
          </div>

          <div className="relative w-[476px] h-[134px] text-lg text-primary-black-5">
              <div className='relative w-[476px] h-[134px] text-lg text-primary-black-5'>
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
                        className='m-auto w-16 h-16 bg-primary-white-1 overflow-hidden  ml-[14px] mt-[36px]  text-3xl border-[1px] border-solid border-primary-black-7 rounded-2xl mx-2 text-center focus:outline-none lmobile:w-24 lmobile:h-24 lmobile:left-[240px] right-[240px]'  />
                  })
                }
     
            </div>
              <div className="absolute top-[0px] mb-[4px] left-[197px] font-light text-black">
                Enter code
              </div>
              <div className="absolute top-[112px] left-[308px] text-base text-primary-blue-1 lmobile:left-[386px]">
                Resend OTP
              </div>
            </div>          
          <div className="relative w-[391px] h-[87px] text-base">
            <Link to='/login1'>
            <div className="absolute top-[65px] left-[60px] font-light lmobile:left-[0px]">
              <span>{`Already have an account?   `}</span>
              <span className="text-primary-blue-1">Login</span>
            </div>
            </Link>
            
            <button className="absolute top-[0px] left-[60px] rounded-2xl bg-primary-blue-1 box-border w-[270px] overflow-hidden flex flex-row items-center justify-center 
            py-[11px] px-[24px] text-xl text-primary-white-1 border-[1px] border-solid border-primary-blue-1 lmobile:w-[391px] lmobile:left-[0px]">
              <div className="relative font-medium">Submit</div>
            </button>          
          </div>
        </div>
      </form>
    );
  };
  
  export default SignUp2;

  