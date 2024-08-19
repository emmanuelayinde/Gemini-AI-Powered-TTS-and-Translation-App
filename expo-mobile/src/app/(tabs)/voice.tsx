import React from 'react'
import { View } from 'react-native'

import { ScreenLayout } from '@/components/common'
import { TranslatedTextCard } from '@/components/text-to-speech'
import { LanguagesSwitch } from '@/components/translation'
import { VoiceNotePlayer } from '@/components/speech-to-text'

const VoiceScreen = () => {
    return (
        <ScreenLayout label='Voice to Text'>
            <View className='flex gap-8 p-4' >
                <VoiceNotePlayer />
                <TranslatedTextCard />
                <LanguagesSwitch
                    languageToTranslateFrom='English'
                    languageToTranslateTo='French'
                />
            </View>
        </ScreenLayout>
    )
}

export default VoiceScreen