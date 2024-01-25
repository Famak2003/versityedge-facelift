import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slice/authSlice";
function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleInactiveTimeout = () => {
      dispatch(logoutUser());
    };

    // Set a timeout for automatic logout after a certain period of inactivity
    const inactivityTimeout = setTimeout(handleInactiveTimeout, 1800000); // 30 minutes

    // Clear the timeout on activity
    const handleActivity = () => {
      clearTimeout(inactivityTimeout);
    };
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, [dispatch]);

  return null;
}

export default Logout;
