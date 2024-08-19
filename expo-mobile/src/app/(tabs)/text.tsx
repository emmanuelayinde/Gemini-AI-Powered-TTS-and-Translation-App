import React from 'react'
import { View } from 'react-native'

import { ScreenLayout } from '@/components/common'
import { OriginalTextCard, TranslatedTextCard } from '@/components/text-to-speech'
import { LanguagesSwitch } from '@/components/translation'

const TextScreen = () => {
    return (
        <ScreenLayout label='Translator'>
            <View className='flex gap-8 p-4' >
                <OriginalTextCard />
                <TranslatedTextCard />
                <LanguagesSwitch
                    languageToTranslateFrom='English'
                    languageToTranslateTo='French'
                />
            </View>
        </ScreenLayout>
    )
}

export default TextScreen