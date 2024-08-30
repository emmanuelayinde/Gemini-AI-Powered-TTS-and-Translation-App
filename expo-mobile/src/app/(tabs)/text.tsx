import React from 'react'
import { ScrollView, View } from 'react-native'

import { ScreenLayout } from '@/components/common'
import { OriginalTextCard, TranslatedTextCard } from '@/components/text-to-speech'
import { LanguagesSwitch } from '@/components/translation'

const TextScreen = () => {
    return (
        <ScreenLayout label='Translator'>
            <ScrollView>
                <View className='flex gap-4 p-4' >
                    <LanguagesSwitch />
                    <OriginalTextCard />
                    <TranslatedTextCard />
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}

export default TextScreen