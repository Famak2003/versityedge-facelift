import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getNextSignupPage } from "../redux/slice/authSlice";
import axios from "axios";

async function CreateProfile(id, authorization) {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_ENDPOINT}/user/${id}/profile`,
      {
        firstname: userInfo.firstName,
        lastname: userInfo.lastName,
        email: userInfo.email,
      },
      { headers: { Authorization: authorization } },
    );
    toast(response.data.message);
    dispatch(getNextSignupPage("congratulations"));
  } catch (error) {
    toast(error.response.data.message);
    console.error("error from create profile:", error.response.data.message);
  }
}

export default CreateProfile;
