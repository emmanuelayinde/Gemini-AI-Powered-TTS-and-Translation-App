from google.cloud import translate_v2 as translate
import google.generativeai as genai
from ...config import GOOGLE_GEMINI_API_KEY

class GeminiService:
    def __init__(self):
        self.client = translate.Client()
        
    def config_gemini_model(self):
        genai.configure(api_key=GOOGLE_GEMINI_API_KEY)
        return genai.GenerativeModel('gemini-1.5-flash')

    def extract_text_from_image(self, image):
        model = self.config_gemini_model()
        prompt = "Write an advertising jingle showing how the product in the first image could solve the problems shown in the second two images."
        response = model.generate_content([prompt, image])
        return response

