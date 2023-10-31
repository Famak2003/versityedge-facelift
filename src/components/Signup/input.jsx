// import React, { useState } from 'react';


//  const Input = () => {

//       const [otp, setOtp] = useState(new Array(6).fill(""));

//       const handleChange =(e, index)=> {
//         if(isNaN(e.target.value)) return false;

//         setOtp([...otp.map((data, indx) => (indx === index ? e.target.value:data))]);

//         if (e.target.value && e.target.nextSibling) {
//           e.target.nextSibling.focus()
//         }
//       }

//       const handlePaste =(e)=> {
//         const value = e.clipboardData.getData("text")
//         if(isNaN(value)) return false;

//         const updatedValue = value.toString().split("").slice(0, otp.length);

//         setOtp(updatedValue)

//         // const focusedInput = e.target.parentNode.querySelector("input:focus")
//       } 

//   return (
    
//    <div className='relative w-[476px] h-[134px] text-lg text-primary-black-5'>
//       {
//         otp.map((data, i) => {
//               return <input 
//               type='password' 
//               placeholder='-'
//               value={data} 
//               onChange={(e)=>handleChange(e, i)}
//               onPaste={(e)=>{
//                 handlePaste(e)
//               }}
//               maxLength={1}
//               className='w-24 h-24 mt-[-48px] ml-[14px] left-[246px] right-[246px] text-3xl border-[1px] border-solid border-primary-black-7 rounded-2xl  mx-2 text-center focus:outline-none'  />
//         })
//       }
     
//    </div>
//   )

  
// }

// export default Input;
