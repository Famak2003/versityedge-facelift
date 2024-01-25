import { toast } from "react-toastify";
import PasswordValidation from "./PasswordValidation";

function isPasswordValid(setMessage, message, password, confirmPassword) {
  let status = false;

  const isPasswordEqual = password === confirmPassword;

  const isConfirmPassWordValid = PasswordValidation(confirmPassword);
  const isPassWordValid = PasswordValidation(password);

  // checks is password is equal to each other
  if (isPasswordEqual) {
    // Set password, confirmPassword warning messages
    setMessage((prevMessage) => ({
      ...prevMessage,
      passwrordMessage: isPassWordValid,
      confirmPasswordMessage: isConfirmPassWordValid,
    }));
    if (
      isPassWordValid === "Strong Password" &&
      isConfirmPassWordValid === "Strong Password"
    ) {
      status = true;
    } else {
      toast("check password");
    }
  } else {
    setMessage((prevMessage) => ({
      ...prevMessage,
      passwrordMessage: "Password Mismatch",
      confirmPasswordMessage: "Password Mismatch",
    }));
  }

  return status;
}

export default isPasswordValid;
