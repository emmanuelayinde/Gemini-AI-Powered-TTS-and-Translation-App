from google.cloud import vision
from app.models.image_to_text_model import ImageTextDetectionResponse

class ImageToTextService:
    def __init__(self):
        self.client = vision.ImageAnnotatorClient()

    def convert_image_to_text(self, image_url: str) -> ImageTextDetectionResponse:
        image = vision.Image()
        image.source.image_uri = image_url
        response = self.client.text_detection(image=image)
        texts = response.text_annotations
        # print('🚀====>', texts , '<====🚀')
        # print('🚀====>', texts[0])
        return ImageTextDetectionResponse(detected_text=texts[0].description, detected_language=texts[0].locale)








# from google.cloud import vision

# class ImageToTextService:
#     def __init__(self):
#         self.visionClient = vision.ImageAnnotatorClient()

#     def extract_text_from_image(self, path):
#         """Detects document features in an image."""

#         with open(path, "rb") as image_file:
#             content = image_file.read()

#         image = self.visionClient.Image(content=content)

#         response = self.visionClient.document_text_detection(image=image)

#         for page in response.full_text_annotation.pages:
#             for block in page.blocks:
#                 print(f"\nBlock confidence: {block.confidence}\n")

#                 for paragraph in block.paragraphs:
#                     print("Paragraph confidence: {}".format(paragraph.confidence))

#                     for word in paragraph.words:
#                         word_text = "".join([symbol.text for symbol in word.symbols])
#                         print(
#                             "Word text: {} (confidence: {})".format(
#                                 word_text, word.confidence
#                             )
#                         )

#                         for symbol in word.symbols:
#                             print(
#                                 "\tSymbol: {} (confidence: {})".format(
#                                     symbol.text, symbol.confidence
#                                 )
#                             )

#         if response.error.message:
#             raise Exception(
#                 "{}\nFor more info on error messages, check: "
#                 "https://cloud.google.com/apis/design/errors".format(response.error.message)
#             )


#     def extract_handwritten_text_from_image(self,path):
#         with open(path, "rb") as image_file:
#             content = image_file.read()

#         image = self.visionClient.Image(content=content)

#         response = self.visionClient.document_text_detection(image=image)

#         for page in response.full_text_annotation.pages:
#             for block in page.blocks:
#                 print(f"\nBlock confidence: {block.confidence}\n")

#                 for paragraph in block.paragraphs:
#                     print("Paragraph confidence: {}".format(paragraph.confidence))

#                     for word in paragraph.words:
#                         word_text = "".join([symbol.text for symbol in word.symbols])
#                         print(
#                             "Word text: {} (confidence: {})".format(
#                                 word_text, word.confidence
#                             )
#                         )

#                         for symbol in word.symbols:
#                             print(
#                                 "\tSymbol: {} (confidence: {})".format(
#                                     symbol.text, symbol.confidence
#                                 )
#                             )

#         if response.error.message:
#             raise Exception(
#                 "{}\nFor more info on error messages, check: "
#                 "https://cloud.google.com/apis/design/errors".format(response.error.message)
#             )
