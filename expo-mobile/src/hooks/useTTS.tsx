import { useEffect, useState } from "react"
import * as Speech from 'expo-speech';
import { ISpeechStatus, IUtteranceProps } from "@/types";

const useTTS = () => {
    const [status, setStatus] = useState<ISpeechStatus>(null)
    const [error, setError] = useState<Error | null>(null)
    const [playBackSpeed, setPlayBackSpeed] = useState(1.0)
    const [availableSpeechVoices, setAvailableSpeechVoices] = useState<Speech.Voice[]>([])
    const [maxSpeechLength, setMaxSpeechLength] = useState(0)

    const utterSpeech = ({ text, language = 'en', }: IUtteranceProps) => {
        Speech.speak(text, {
            language,
            rate: playBackSpeed,
            onStart: () => setStatus('speaking'),
            onResume: () => setStatus('speaking'),
            onDone: () => setStatus('done'),
            onPause: () => setStatus('paused'),
            onStopped: () => setStatus('stopped'),
            onError: (error) => setError(error),
        });
    };

    const pauseSpeech = async () => {
        await Speech.pause()
    }

    const resumeSpeech = async () => {
        await Speech.resume()
    }
    const stopSpeech = async () => {
        await Speech.stop()
    }

    const getAvailableSpeechVoices = async () => {
        const voices = await Speech.getAvailableVoicesAsync()
        setAvailableSpeechVoices(voices)
    }

    const getMaxSpeechLength = () => {
        setMaxSpeechLength(Speech.maxSpeechInputLength)
    }

    useEffect(() => {
        getAvailableSpeechVoices()
        getMaxSpeechLength()
    }, [])

    return {
        utterSpeech,
        setPlayBackSpeed,
        pauseSpeech,
        resumeSpeech,
        stopSpeech,
        status,
        voices: availableSpeechVoices,
        hasError: Boolean(error),
        playBackSpeed,
        maxSpeechLength,
        error
        // isSpeaking: status === 'speaking',
        // isPaused: status === 'speaking',
        // isStopped: status === 'speaking',
        // isDone: status === 'done',
    }
}

export default useTTS