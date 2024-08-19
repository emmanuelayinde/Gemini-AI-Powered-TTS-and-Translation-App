import React from 'react'
import { View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { VoiceNoteRecorder, VoiceNoteWave } from '@/components/speech-to-text'
import { IconButton } from '@/components/common'
import { theme } from '@/constants';
import { useTTS } from '@/hooks';

const VoiceNotePlayer = () => {
    return (
        <View className='w-full min-h-40 flex flex-row items-center pr-4 py-6 gap-4 rounded-lg bg-blue'>
            <View className='flex flex-1'>
                <VoiceNoteWave />
                <VoiceNoteRecorder />
            </View>
            <VoiceNoteStatus />
        </View>
    )
}

export default VoiceNotePlayer

const VoiceNoteStatus = () => {
    const { status, utterSpeech, pauseSpeech, resumeSpeech } = useTTS()
    return (
        <View className='w-12 h-12 flex items-center justify-center rounded-full p-2 bg-orange'>
            {!status && (
                <IconButton
                    handleOnPress={() => utterSpeech({ text: 'I love you, Emmanuel Ishola' })}
                    icon={<FontAwesome5 name="play" size={24} color={theme.darkBlue} />}
                />)
            }
            {(status === 'stopped' || status === 'done') && (
                <IconButton
                    handleOnPress={() => utterSpeech({ text: 'I love you, Emmanuel Ishola' })}
                    icon={<FontAwesome5 name="play" size={24} color={theme.darkBlue} />}
                />)
            }
            {status === 'speaking' && (
                <IconButton
                    handleOnPress={pauseSpeech}
                    icon={<FontAwesome6 name="pause" size={24} color={theme.darkBlue} />}
                />)
            }
            {status === 'paused' && (
                <IconButton
                    handleOnPress={resumeSpeech}
                    icon={<FontAwesome5 name="play" size={24} color={theme.darkBlue} />}
                />)
            }
        </View>
    )
}