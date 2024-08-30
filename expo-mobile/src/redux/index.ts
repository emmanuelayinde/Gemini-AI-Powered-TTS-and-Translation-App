import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { DispatchFunc, RootState } from "@/types/redux";
import translationSlice from "./slices/translation-slice";

const store = configureStore({
  reducer: {
    translation: translationSlice,
  },
});

export default store;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
