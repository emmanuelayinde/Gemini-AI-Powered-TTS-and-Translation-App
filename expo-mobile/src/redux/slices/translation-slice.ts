import {
  defaultUserFirstLanguage,
  defaultUserSecondLanguage,
} from "@/constants";
import { createSlice } from "@reduxjs/toolkit";
import { ITranslationApp } from "@/types";

const initialState: ITranslationApp = {
  languageToTranslateFrom: defaultUserFirstLanguage,
  languageToTranslateTo: defaultUserSecondLanguage,
  translationResponse: {
    detectedLanguage: "",
    translationText: "",
  },
  canTranslate: false,
};

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    updateLanguageToTranslateFrom(state, action) {
      state.languageToTranslateFrom = action.payload;
    },
    updateLanguageToTranslateTo(state, action) {
      state.languageToTranslateTo = action.payload;
    },
    switchSelectedLanguages(state) {
      [state.languageToTranslateFrom, state.languageToTranslateTo] = [
        state.languageToTranslateTo,
        state.languageToTranslateFrom,
      ];
    },
    updateTranslationResponse(state, action) {
      state.translationResponse = action.payload;
    },
    setCanTranslate(state, action) {
      state.canTranslate = action.payload;
    },
  },
});

export const {
  updateLanguageToTranslateFrom,
  updateLanguageToTranslateTo,
  switchSelectedLanguages,
  setCanTranslate,
  updateTranslationResponse,
} = translationSlice.actions;

export default translationSlice.reducer;
