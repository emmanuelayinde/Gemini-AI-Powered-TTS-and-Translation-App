from google.cloud import speech
from app.models.speech_to_text_model import SpeechToTextResponse

class SpeechToTextService:
    def __init__(self):
        self.client = speech.SpeechClient()

    def convert_speech_to_text(self, audio_url: str, language_code: str) -> SpeechToTextResponse:
        audio = speech.RecognitionAudio(uri=audio_url)
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=16000,
            language_code=language_code,
        )

        response = self.client.recognize(config=config, audio=audio)
        transcribed_text = response.results[0].alternatives[0].transcript if response.results else ""
        return SpeechToTextResponse(transcribed_text=transcribed_text)



# from google.cloud import speech

# class SpeechToTextService:
#     def __init__(self):
#         self.speechClient = self.speech.SpeechClient()

#     def run_quickstart(self) -> speech.RecognizeResponse:
#         # Instantiates a client
      
#         # The name of the audio file to transcribe
#         gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"

#         audio = self.speechClient.RecognitionAudio(uri=gcs_uri)

#         config = self.speechClient.RecognitionConfig(
#             encoding=self.speechClient.RecognitionConfig.AudioEncoding.LINEAR16,
#             sample_rate_hertz=16000,
#             language_code="en-US",
#         )

#         # Detects speech in the audio file
#         response = self.speechClient.recognize(config=config, audio=audio)

#         for result in response.results:
#             print(f"Transcript: {result.alternatives[0].transcript}")