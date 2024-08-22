from pydantic import BaseModel

class SpeechToTextRequest(BaseModel):
    audio_url: str
    language_code: str = "en-US"

class SpeechToTextResponse(BaseModel):
    transcribed_text: str