export interface ITranslationProps {
  textToTranslate: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

export interface ITranslatedText {
  translationText: string;
  detectedLanguage: string | null;
}

export interface ITranslatedTextResponse {
  translated_text: string;
  detected_language: string | null;
}
