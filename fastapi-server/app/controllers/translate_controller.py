from fastapi import APIRouter, HTTPException
from ..models.translate_model import TranslationRequest, TranslationResponse, LanguageDetectionRequest, LanguageDetectionResponse, SupportedLanguageResponse
from ..services.translate_service import TranslateService
from typing import List

router = APIRouter()
translate_service = TranslateService()

@router.post("/translate", response_model=TranslationResponse)
async def translate_text(request: TranslationRequest):
    try:
        return translate_service.translate_text(request.text, request.target_language, request.source_language)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/detect-language", response_model=LanguageDetectionResponse)
async def detect_language(request: LanguageDetectionRequest):
    try:
        return translate_service.detect_language(request.text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/supported-languages", response_model=List[SupportedLanguageResponse])
async def get_supported_languages():
    try:
        return translate_service.get_supported_languages()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))