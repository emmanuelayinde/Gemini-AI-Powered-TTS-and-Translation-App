from fastapi import APIRouter, HTTPException
from app.models.image_to_text_model import ImageTextDetectionRequest, ImageTextDetectionResponse
from app.services.image_to_text_service import ImageToTextService

router = APIRouter()
image_to_text_service = ImageToTextService()

@router.post("/convert", response_model=ImageTextDetectionResponse)
async def convert_image_to_text(request: ImageTextDetectionRequest):
    try:
        return image_to_text_service.convert_image_to_text(request.image_url)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
