from fastapi import FastAPI
from app.controllers.translate_controller import router as translate_router
from app.controllers.speech_to_text_controller import router as speech_to_text_router
from app.controllers.image_to_text_controller import router as image_to_text_router

app = FastAPI()

app.include_router(translate_router, prefix="/api/v1/translation", tags=["Translation"])
app.include_router(image_to_text_router, prefix="/api/v1/image-to-text",  tags=["Image To Text"])
app.include_router(speech_to_text_router, prefix="/api/v1/speech-to-text", tags=["Speech To Text"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)