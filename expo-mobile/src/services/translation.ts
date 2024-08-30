import { ITranslatedTextResponse, ITranslationProps } from "@/types";
import { axiosInstance } from ".";

export const getSupportedLanguagesApi = async () => {
  try {
    const response = await axiosInstance.get(
      "/translation/supported-languages"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const translateTextApi = async ({
  targetLanguage,
  textToTranslate,
  sourceLanguage,
}: ITranslationProps): Promise<ITranslatedTextResponse> => {
  try {
    console.log({
      targetLanguage,
      textToTranslate,
      sourceLanguage,
    })
    const response = await axiosInstance.post("/translation/translate", {
      text: textToTranslate,
      target_language: 'fr',
      source_language: 'en',
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
