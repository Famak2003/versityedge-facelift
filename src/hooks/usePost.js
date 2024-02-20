import { setUserInfo } from "../redux/slice/authSlice";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const postData = async (postData, headers = {}, shouldGetAuth = false) => {
    setLoading(true);

    try {
      const response = await axios.post(url, postData, { ...headers });
      if (!response.statusText === "OK") {
        throw new Error("There is an error fetching data");
      } else {
        if (shouldGetAuth) {
          const authorization = await response.headers.authorization;
          const userID = await response.data.data.id;
          dispatch(setUserInfo({ userID }));
          dispatch(setUserInfo({ userKey: authorization }));
        }
        setData(response.data);
      }
    } catch (error) {
      // console.log(error);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePost;

// import axios from "axios";

// function signIn(
//   data,
//   shouldGetAuth = false,
//   headers = {},
//   setData,
//   setIsLoading,
//   setError,
//   dispatch,
// ) {
//   async function postData() {
//     try {
//       setIsLoading(true);
//       setError("");
//       const response = await axios.post(
//         `${process.env.REACT_APP_ENDPOINT}/auth/signin`,
//         data,
//         { ...headers },
//       );

//       if (!response.statusText === "OK") {
//         throw new Error("There is an error fetching data");
//       }
//       setData(response);
//       console.log(response);

//       const authorization = await response.headers.authorization;
//       const userID = await response.data.data.id;

//       if (shouldGetAuth) {
//         dispatch(setUserInfo({ userID }));
//         dispatch(setUserInfo({ userKey: authorization }));
//       }

//       setError("");
//     } catch (error) {
//       setError(error.response.data.message);
//       console.error("error from signup:", error.response.data.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   postData();
// }

// export default signIn;

// // if (shouldCreatProfile) {
// //   await CreateProfile(userID, authorization);
// // } else {
// //   toast("Welcome Back");

// //   //continue to where the user was navigating before login was required
// //   if (location.state) {
// //     navigate(`${location.state.destination}`, { replace: true });
// //   } else navigate("/", { replace: true });
// // }
