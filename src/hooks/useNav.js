import { useDispatch } from "react-redux";
import { getNextUnboardingPage } from "../redux/slice/authSlice";

function Nav() {
  const dispatch = useDispatch();

  function naviagte(goTo) {
    dispatch(getNextUnboardingPage(goTo));
  }
  return naviagte;
}

export default Nav;
