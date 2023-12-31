function passwordValidation(password) {
  let message;
  const regEx =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9]).+$/;

  const isPasswordValid = regEx.test(password);

  if (isPasswordValid) {
    message = "Strong Password";
  } else {
    message =
      " Password must contain at least one uppercase letter, one special character, and one number.";
  }
  return message;
}

export default passwordValidation;
