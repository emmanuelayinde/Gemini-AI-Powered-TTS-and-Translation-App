import { useState } from "react"

type IVoiceRecordingStatus = 'playing' | 'recording' | 'paused' | null

const useSTT = () => {
    const [voiceRecordingStatus, setVoiceRecordingStatus] = useState<IVoiceRecordingStatus>(null)


    const startVoiceNoteRecording = () => { }
    const stopVoiceNoteRecording = () => { }
    const pauseVoiceNoteRecording = () => { }

    return {
        voiceRecordingStatus,
        startVoiceNoteRecording,
        pauseVoiceNoteRecording,
        stopVoiceNoteRecording
    }
}

export default useSTT