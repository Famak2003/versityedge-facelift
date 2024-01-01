function PasswordValidation(password) {
  let msg;
  const regEx =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9]).+$/;

  const isPasswordValid = regEx.test(password);

  if (isPasswordValid) {
    msg = "Strong Password";
  } else {
    msg =
      " Password must contain at least one uppercase letter, one special character, and one number.";
  }
  return msg;
}

export default PasswordValidation;
