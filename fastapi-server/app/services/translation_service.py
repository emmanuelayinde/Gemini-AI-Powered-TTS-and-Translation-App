from google.cloud import translate_v2 as translate
from typing import List, Optional
from app.models.translate_model import TranslationResponse, LanguageDetectionResponse, SupportedLanguageResponse
from app.utils.translation_util import format_translated_text

class TranslateService:
    def __init__(self):
        self.client = translate.Client()

    def translate_text(self, text: str, target_language: str, source_language: Optional[str] = None) -> TranslationResponse:
        if source_language:
            result = self.client.translate(text, target_language=target_language, source_language=source_language)
        else:
            result = self.client.translate(text, target_language=target_language)

        return TranslationResponse(
            translated_text=format_translated_text(result["translatedText"]),
            detected_language=result["detectedSourceLanguage"] if not source_language else None
        )

    def detect_language(self, text: str) -> LanguageDetectionResponse:
        result = self.client.detect_language(text)
        return LanguageDetectionResponse(
            detected_language=result["language"],
            confidence=result["confidence"]
        )

    def get_supported_languages(self) -> List[SupportedLanguageResponse]:
        results = self.client.get_languages()
        return [
            SupportedLanguageResponse(language=lang["language"], name=lang["name"])
            for lang in results
        ]
