from fastapi import APIRouter, HTTPException
import shutil
from app.models.image_to_text_model import ImageTextDetectionRequest, ImageTextDetectionResponse
from app.services.image_to_text_service import ImageToTextService

router = APIRouter()
image_to_text_service = ImageToTextService()

@router.post("/convert", response_model=ImageTextDetectionResponse)
async def convert_image_to_text(request: ImageTextDetectionRequest):
    # print(request.image_url)
    try:
        # Save the file to the server
        image_location = f"uploads/images/{request.image_url.filename}"
        with open(image_location, "wb") as buffer:
            shutil.copyfileobj(request.image_url.file, buffer)
        # print(image_location)
        return image_to_text_service.convert_image_to_text(image_location)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
