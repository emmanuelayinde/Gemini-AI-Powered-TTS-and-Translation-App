from pydantic import BaseModel
from typing import List

class ImageTextDetectionRequest(BaseModel):
    image_url: str

class ImageTextDetectionResponse(BaseModel):
    detected_text: str
    detected_language: str