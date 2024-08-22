from fastapi import APIRouter, HTTPException
from app.models.speech_to_text_model import SpeechToTextRequest, SpeechToTextResponse
from app.services.speech_to_text_service import SpeechToTextService

router = APIRouter()
speech_service = SpeechToTextService()

@router.post("/convert", response_model=SpeechToTextResponse)
async def speech_to_text(request: SpeechToTextRequest):
    try:
        return speech_service.convert_speech_to_text(request.audio_url, request.language_code)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

