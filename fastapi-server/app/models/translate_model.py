from pydantic import BaseModel
from typing import Optional

class TranslationRequest(BaseModel):
    text: str
    target_language: str
    source_language: Optional[str] = None

class TranslationResponse(BaseModel):
    translated_text: str
    detected_language: Optional[str] = None

class LanguageDetectionRequest(BaseModel):
    text: str

class LanguageDetectionResponse(BaseModel):
    detected_language: str
    confidence: float

class SupportedLanguageResponse(BaseModel):
    language: str
    name: str