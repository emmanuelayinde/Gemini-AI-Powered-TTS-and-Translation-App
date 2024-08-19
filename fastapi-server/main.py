from fastapi import FastAPI
from .app.controllers.translate_controller import router as translate_router
from .config import GOOGLE_APPLICATION_CREDENTIALS
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = GOOGLE_APPLICATION_CREDENTIALS

app = FastAPI()

app.include_router(translate_router, prefix="/api/v1")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)