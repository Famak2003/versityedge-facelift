import { configureStore } from "@reduxjs/toolkit";

import exploreInsightReducer from "./slice/exploreInsightSlice";
import authSliceReducer from "./slice/authSlice";

const store = configureStore({
  reducer: {
    exploreInsight: exploreInsightReducer,
    auth: authSliceReducer,
  },
});

export default store;
