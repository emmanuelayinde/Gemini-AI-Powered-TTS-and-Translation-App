from pydantic import BaseModel
from typing import List

class TextToSpeechRequest(BaseModel):
    text: str
    language_code: str = "en-US"
    voice_name: str = "en-US-Standard-C"
    speaking_rate: float = 1.0

class TextToSpeechResponse(BaseModel):
    audio_content_base64: str

class Voice(BaseModel):
    name: str
    language_codes: List[str]
    ssml_gender: str

class VoicesResponse(BaseModel):
    voices: List[Voice]

class TranslateAndSpeakRequest(BaseModel):
    text: str
    source_language: str
    target_language: str
    speaking_rate: float = 1.0