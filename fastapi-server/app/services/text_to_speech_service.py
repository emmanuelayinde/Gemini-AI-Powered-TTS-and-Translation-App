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



# class TextToSpeechService:
#     def __init__(self) -> None:
#         self.client = texttospeech.TextToSpeechClient()

#     def convert_text_to_speech(self, text: str, language_code: str, voice_gender: str) -> str:   

#         # Set the text input to be synthesized
#         synthesis_input = texttospeech.SynthesisInput(text)

#         # Build the voice request, select the language code ("en-US") and the ssml
#         # voice gender ("neutral")
#         voice = texttospeech.VoiceSelectionParams(
#             language_code, ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
#         )

#         # Select the type of audio file you want returned
#         audio_config = texttospeech.AudioConfig(
#             audio_encoding=texttospeech.AudioEncoding.MP3
#         )

#         # Perform the text-to-speech request on the text input with the selected
#         # voice parameters and audio file type
#         response = self.client.synthesize_speech(
#             input=synthesis_input, voice=voice, audio_config=audio_config
#         )

#         # The response's audio_content is binary.
#         with open("output.mp3", "wb") as out:
#             # Write the response to the output file.
#             out.write(response.audio_content)
#             print('Audio content written to file "output.mp3"')