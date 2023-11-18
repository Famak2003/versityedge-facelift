import { configureStore } from "@reduxjs/toolkit";

import exploreInsightReducer from "./slice/exploreInsight";

const store = configureStore({
  reducer: {
    exploreInsight: exploreInsightReducer,
  },
});

export default store;
