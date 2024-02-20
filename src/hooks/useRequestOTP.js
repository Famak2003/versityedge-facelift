import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function useRequestOTP(verfiedPhoneNumber) {
  const [success, setSuccess] = useState();

  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/auth/request-otp`, {
      phone: verfiedPhoneNumber,
    })
    .then((response) => {
      setSuccess(true);
      console.log(response.data.message);
      setTimeout(() => {
        toast("OTP Sent");
      }, 2000);
    })
    .catch((err) => {
      setSuccess(false);
      toast(err.message);
      console.log("err", err?.response?.data?.message);
    });

  return success;
}

export default useRequestOTP;
