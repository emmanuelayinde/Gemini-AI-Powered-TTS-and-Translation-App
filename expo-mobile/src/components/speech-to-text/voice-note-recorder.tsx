import React from 'react'
import { View, Text, Button } from 'react-native'
import useRecorder from '@/hooks/useRecorder'

const VoiceNoteRecorder = () => {
    const { recording, startRecording, stopRecording, playSound, pauseSound, status } = useRecorder()
    return (
        <View>
            <Text>VoiceNoteRecorder</Text>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
            <Button
                title={status ?? 'Play'}
                onPress={status === 'playing' ? pauseSound : playSound}
            />
        </View>
    )
}

export default VoiceNoteRecorder