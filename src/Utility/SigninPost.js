import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/slice/authSlice";
import axios from "axios";
import { toast } from "react-toastify";
import CreateProfile from "./CreateProfile";

async function SigninPost(
  data,
  shouldCreatProfile = false,
  location,
  navigate,
) {
  const dispatch = useDispatch();
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_ENDPOINT}/auth/signin`,
      data,
    );

    const authorization = await response.headers.authorization;
    const userID = await response.data.data.id;

    dispatch(setUserInfo({ userID }));
    dispatch(setUserInfo({ userKey: authorization }));

    if (shouldCreatProfile) {
      await CreateProfile(userID, authorization);
    } else {
      toast("Welcome Back");

      //continue to where the user was navigating before login was required
      if (location.state) {
        navigate(`${location.state.destination}`, { replace: true });
      } else navigate("/", { replace: true });
    }
  } catch (error) {
    toast(error.response.data.message);
    console.error("error from signup:", error.response.data.message);
  }
}

export default SigninPost;
