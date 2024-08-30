import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { IRecorderStatus } from '@/types';

const useRecorder = () => {
    const [status, setStatus] = useState<IRecorderStatus>(null)
    const [recording, setRecording] = useState<Audio.Recording>();
    const [recordedSoundUri, setRecordedSoundUri] = useState('');
    const [recordedSound, setRecordedSound] = useState<Audio.Sound>();
    const [permissionResponse, requestPermission] = Audio.usePermissions();

    const [recordingWaveDB, setRecordingWaveDB] = useState(0)

    const startRecording = async () => {
        try {
            setStatus('recording')
            requestMicPermission()
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY, ({ metering }) => { console.log({ metering }); setRecordingWaveDB(metering) })
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            setStatus('stopped')
            console.error('Failed to start recording', err);
        }
    }

    const stopRecording = async () => {
        console.log('Stopping recording..');
        setStatus('stopped')
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        });
        const uri = recording.getURI();
        setRecordedSoundUri(uri)
        console.log('Recording stopped and stored at', uri);
    }

    const playSound = async () => {
        setStatus('playing')
        if (!recordedSoundUri) return
        const { sound } = await Audio.Sound.createAsync({ uri: recordedSoundUri })
        setRecordedSound(sound);
        await sound.playAsync();
    }

    const pauseSound = async () => {
        setStatus('paused')
        if (!recordedSound) return
        await recordedSound.pauseAsync();
    }

    const requestMicPermission = async () => {
        if (permissionResponse.status !== 'granted') {
            await requestPermission();
        }
    }

    useEffect(() => {
        requestMicPermission()
    }, [])


    return {
        status,
        recording,
        recordingWaveDB,
        playSound,
        pauseSound,
        startRecording,
        stopRecording,
    }
}

export default useRecorder