import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuthentication = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);
  const location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <Navigate
          to={"/login"}
          replace={true}
          state={{ destination: location.pathname }}
        />
      )}
    </>
  );
};

export default RequireAuthentication;
