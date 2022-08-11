import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import historyReducer from "./slices/historySlice";
import teamReducer from "./slices/teamSlice";

const reducer = {
  team: teamReducer,
  history: historyReducer,
};

export const store = configureStore({
  reducer,
  // devTools: process.env.NODE_ENV === "development",
  devTools: true,
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
