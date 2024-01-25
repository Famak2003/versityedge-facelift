import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  otpCode: "",
  userInfo: {
    userKey: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userID: "",
  },
  currentSignupPage: 1,
  currentResetPasswordPage: "resetPassword",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // Add reducers for the synchronous actions on the UI
  reducers: {
    loginUser: (state) => {
      state.user = true;
    },

    logoutUser: (state) => {
      state.user = false;
    },
    setPhone(state, action) {
      state.phoneNumber = action.payload;
    },
    getOTPcode(state, action) {
      state.otpCode = action.payload;
    },
    setUserInfo(state, action) {
      // Immer is implicitly used here to update the userInfo
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    getNextSignupPage(state, action) {
      state.currentSignupPage = action.payload;
    },
    getNextResetPasswordPage(state, action) {
      state.currentResetPasswordPage = action.payload;
    },
  },
});

export const {
  setPhone,
  getOTPcode,
  setUserInfo,
  getNextSignupPage,
  getNextResetPasswordPage,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
