from fastapi import APIRouter, HTTPException
from app.models.text_to_speech_model import TextToSpeechRequest, TextToSpeechResponse,VoicesResponse
from app.services.text_to_speech_service import TextToSpeechService

router = APIRouter()
tts_service = TextToSpeechService()

@router.post("/convert", response_model=TextToSpeechResponse)
async def text_to_speech(request: TextToSpeechRequest):
    try:
        return tts_service.text_to_speech(
            request.text,
            request.language_code,
            request.voice_name,
            request.speaking_rate
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.get("/voices", response_model=VoicesResponse)
async def list_voices():
    try:
        return tts_service.get_available_voices()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))





# @router.post("/translate-and-speak", response_model=TextToSpeechResponse)
# async def translate_and_speak(request: TranslateAndSpeakRequest):
#     try:
#         # First, translate the text
#         translation_result = translate_service.translate_text(
#             request.text,
#             target_language=request.target_language,
#             source_language=request.source_language
#         )

#         # Then, convert the translated text to speech
#         voices = tts_service.list_voices()
#         target_voices = [v for v in voices.voices if request.target_language in v.language_codes]
        
#         if not target_voices:
#             raise HTTPException(status_code=400, detail=f"No voice available for language {request.target_language}")

#         voice_name = target_voices[0].name  # Choose the first available voice

#         return tts_service.text_to_speech(
#             translation_result.translated_text,
#             request.target_language,
#             voice_name,
#             request.speaking_rate
#         )
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
