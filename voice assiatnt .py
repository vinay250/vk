import pyttsx3
import speech_recognition as sr

# Initialize the text-to-speech engine
engine = pyttsx3.init()

# Initialize the speech recognizer
recognizer = sr.Recognizer()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def start_assistant():
    print("Listening...")
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    try:
        print("Recognizing...")
        query = recognizer.recognize_google(audio)
        print("You said:", query)
        # Process the query and perform actions on your website
        speak("You said: " + query)
    except Exception as e:
        print("Could not understand audio")
        speak("Could not understand audio")

# Example usage
speak("Hello! How can I help you?")
start_assistant()
