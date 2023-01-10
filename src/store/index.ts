import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slice";

const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export const useDispatch = () => reduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;

export default store;
