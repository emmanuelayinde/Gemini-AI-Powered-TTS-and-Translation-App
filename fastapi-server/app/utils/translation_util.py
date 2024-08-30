from markupsafe import Markup

def format_translated_text(text: str) -> str:
    return Markup(text).unescape()