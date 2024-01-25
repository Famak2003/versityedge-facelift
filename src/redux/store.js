import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

import exploreInsightReducer from "./slice/exploreInsightSlice";
import authSliceReducer from "./slice/authSlice";
import thunk from "redux-thunk";

// Configure Redux persist options for auth slice
const authPersistConfig = {
  key: "auth",
  storage,
};

// Create a persisted reducer for auth slice
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSliceReducer,
);

const store = configureStore({
  reducer: {
    exploreInsight: exploreInsightReducer,
    auth: persistedAuthReducer,
  },
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
