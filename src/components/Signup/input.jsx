import React, { useState } from 'react';

import OTPInput from 'react-otp-input';

 const Input = ({numInputs, handleChange, otp}) => {
 

  return (
    <OTPInput 
    value={otp}
    onChange={handleChange}
    numInputs={numInputs}
    renderSeparator={<span>-</span>}
    />
  )
}

export default Input;
