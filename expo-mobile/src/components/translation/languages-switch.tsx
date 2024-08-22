import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';

import { IconButton } from '../common'
import { theme } from '@/constants';
import { useTranslation } from '@/hooks';
import { getSupportedLanguages } from '@/services/translation';

interface IProps {
    languageToTranslateFrom: string,
    languageToTranslateTo: string,
}

const LanguagesSwtich = ({ languageToTranslateFrom, languageToTranslateTo }: IProps) => {

    const { fetchSupportedLanguages } = useTranslation()

    useEffect(() => {
        (async () => { const res = await getSupportedLanguages(); console.log({ res }) })()
    }, [])


    const { data, error } = fetchSupportedLanguages

    console.log({ error, data })

    return (
        <View >
            <View className='w-full h-20 px-8 py-4 rounded-lg bg-blue flex flex-row items-center justify-between'>
                <Text className='w-1/3 text-center text-white text-2xl font-semibold capitalize'>{languageToTranslateFrom}</Text>
                <IconButton
                    icon={<Switch />}
                />
                <Text className='w-1/3 text-center text-white text-2xl font-semibold capitalize'>{languageToTranslateTo}</Text>
            </View>
        </View>
    )
}

export default LanguagesSwtich


const Switch = () => {
    return (
        <View className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-darkBlue shadow-lg '>
            <Octicons name="arrow-switch" size={20} color={theme.white} />
        </View>
    )
}