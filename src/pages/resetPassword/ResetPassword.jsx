import { useSelector } from "react-redux";
import Password1 from "./Password1";
import Password2 from "./Password2";
import Password3 from "./Password3";
import Congrats from "./Congrats";

function ResetPassword() {
  const whatToRender = useSelector(
    (state) => state.auth.currentResetPasswordPage,
  );

  switch (whatToRender) {
    case "resetPassword":
      return <Password1 />;
    case "OTP":
      return <Password2 />;
    case "passwordReset":
      return <Password3 />;
    case "congratulation":
      return <Congrats />;
    default:
      return "unknown Render";
  }
}

export default ResetPassword;
