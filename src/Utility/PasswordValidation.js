import { useState } from "react";

function PasswordValidation({ password }) {
  const [message, setMessage] = useState(" ");

  const regEx =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9]).+$/;

  const isPasswordValid = regEx.test(password);

  if (isPasswordValid) {
    setMessage("Strong Password");
  } else if (!isPasswordValid) {
    setMessage(
      " Password must contain at least one uppercase letter, one special character, and one number.",
    );
  } else {
    setMessage(" ");
  }
  return message;
}

export default PasswordValidation;
