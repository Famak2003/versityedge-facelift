// import axios from "axios";
// import { toast } from "react-toastify";
// import useSignin from "./useSignin";

// async function SignupPost(data) {
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_ENDPOINT}/auth/signup`,
//       data,
//     );
//     toast(response.data.message);
//     // true is to let the SigninPost know if it would call CreateProfile
//     useSignin(data, true);
//   } catch (error) {
//     toast(error.response.data.message);
//     console.error(error.response.data.message);
//   }
// }
// export default SignupPost;
