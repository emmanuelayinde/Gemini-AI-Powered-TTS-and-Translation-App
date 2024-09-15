from google.cloud import texttospeech_v1 as texttospeech
from app.models.text_to_speech_model import TextToSpeechResponse, VoicesResponse, Voice
import base64

class TextToSpeechService:
    def __init__(self):
        self.client = texttospeech.TextToSpeechClient()
        self.request = texttospeech.ListVoicesRequest()

    def text_to_speech(self, text: str, language_code: str, voice_name: str, speaking_rate: float) -> TextToSpeechResponse:
        synthesis_input = texttospeech.SynthesisInput(text=text)

        voice = texttospeech.VoiceSelectionParams(
            language_code=language_code,
            name=voice_name
        )

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3,
            speaking_rate=speaking_rate
        )

        response = self.client.synthesize_speech(
            input=synthesis_input,
            voice=voice,
            audio_config=audio_config
        )

        # Encode the audio content as base64
        audio_content_base64 = base64.b64encode(response.audio_content).decode('utf-8')

        return TextToSpeechResponse(audio_content_base64=audio_content_base64)


    def get_available_voices(self) -> VoicesResponse:
        response = self.client.list_voices(request=self.request)
        voices = [
            Voice(
                name=voice.name,
                language_codes=voice.language_codes,
                ssml_gender=texttospeech.SsmlVoiceGender(voice.ssml_gender).name
            )
            for voice in response.voices
        ]
        return VoicesResponse(voices=voices)
