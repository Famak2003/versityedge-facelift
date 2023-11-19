import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  phoneNumber: "",
  otpCode: "",
  userInfo: {},
  currentSignupPage: 1,
  currentResetPasswordPage: "resetPassword",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // Add reducers for the synchronous actions on the UI
  reducers: {
    loginUserIn: (state, action) => {
      state.user = true;
    },

    loginUserOut: (state, action) => {
      state.user = false;
    },
    getPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    getOTPcode(state, action) {
      state.otpCode = action.payload;
    },
    getUserInfo(state, action) {
      state.userInfo = action.payload;
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
  getPhoneNumber,
  getOTPcode,
  getUserInfo,
  getNextSignupPage,
  getNextResetPasswordPage,
  loginUserIn,
  loginUserOut,
} = authSlice.actions;

export default authSlice.reducer;
