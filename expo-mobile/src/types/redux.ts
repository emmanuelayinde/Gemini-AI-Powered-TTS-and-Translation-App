import store from "@/redux";
import { ITranslatedText } from "./translation";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

export interface ITranslationApp {
  languageToTranslateFrom: string;
  languageToTranslateTo: string;
  translationResponse: ITranslatedText;
  canTranslate: boolean;
}