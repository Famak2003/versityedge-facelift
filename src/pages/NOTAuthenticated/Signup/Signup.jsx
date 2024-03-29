import { useSelector } from "react-redux";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Unboarding from "./Unboading/Unboarding";

function Signup() {
  const currentPage = useSelector((state) => state.auth.currentSignupPage);
  console.log(currentPage);

  switch (currentPage) {
    case 1:
      return <Page1 />;
    case 2:
      return <Page2 />;
    case 3:
      return <Page3 />;
    case "unboarding":
      return <Unboarding />;
    default:
      return <Page1 />;
  }
}

export default Signup;
