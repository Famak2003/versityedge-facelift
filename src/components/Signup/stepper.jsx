import React from 'react'

const Stepper = ({bg1, bg2, bg3, txt1, txt2, txt3}) => {
  return (
   <div className="stepper">
     <div className={`absolute top-[0px] left-[0px] rounded-17xl ${!bg1 ? "bg-primary-white-1 " : bg1} ${!txt1 ? "text-primary-blue-1 " : txt1} overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1`}>
            <div className="relative">1</div>
      </div>
      <div className={`absolute top-[0px] left-[115px] rounded-17xl ${!bg2 ? "bg-primary-white-1 " : bg2} ${!txt2 ? "text-primary-blue-1 " : txt2} overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1`}>
            <div className="relative">2</div>
      </div>
      <div className={`absolute top-[0px] left-[230px] rounded-17xl ${!bg3 ? "bg-primary-white-1 " : bg3} ${!txt3 ? "text-primary-blue-1 " : txt3} overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] border-[1px] border-solid border-primary-blue-1`}>
            <div className="relative">3</div>
      </div>
   </div>
  )
}

export default Stepper;