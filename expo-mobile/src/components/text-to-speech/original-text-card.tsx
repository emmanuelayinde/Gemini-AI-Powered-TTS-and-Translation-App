import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { useTranslation } from '@/hooks';

const OriginalTextCard = () => {
    const { languageToTranslateFrom, canTranslate, textToTranslate, setTextToTranslate, translateText, translationStatus } = useTranslation()

    console.log({ translationStatus })
    
    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
            <View>
                <Text className='text-xl text-gray font-semibold capitalize'>{languageToTranslateFrom}</Text>
            </View>
            <TextInput
                className=' w-full text-2xl text-white flex-1 items-start justify-start placeholder:text-gray'
                placeholder='Enter text to be translate or listen to here'
                style={{ textAlignVertical: 'top' }}
                multiline={true}
                numberOfLines={8}
                onChangeText={setTextToTranslate}
                value={textToTranslate}
            />
            {canTranslate && <View className='flex flex-row items-center justify-end'>
                <TouchableOpacity onPress={translateText} className='w-fit px-8 py-3 rounded-full bg-orange'>
                    <Text className='text-2xl text-white font-medium capitalize'>translate</Text>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default OriginalTextCard