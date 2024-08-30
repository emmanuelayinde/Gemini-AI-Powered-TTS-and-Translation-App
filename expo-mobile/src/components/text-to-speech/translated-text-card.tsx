import React from 'react'
import { View, Text, Platform } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

import { theme } from '@/constants';
import { IconButton } from '@/components/common';
import { useClipboard, useTranslation, useTTS } from '@/hooks';

interface IProps {
    showLanguage?: boolean
}


const OriginalTextCard = ({ showLanguage = true }: IProps) => {
    const { utterSpeech, pauseSpeech, resumeSpeech, stopSpeech, status } = useTTS()
    const { languageToTranslateTo, translationStatus, translationText } = useTranslation()
    const { copied, copyToClipboard } = useClipboard()

    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
            {showLanguage && <View>
                <Text className='text-xl text-gray font-semibold capitalize'>{languageToTranslateTo}</Text>
            </View>}
            <View className='w-full flex-1'>
                <Text className='text-2xl text-white'>
                    {translationText}
                </Text>
            </View>
            {translationText && <View className='flex flex-row items-center justify-between'>
                <View className='flex flex-row gap-4'>
                    {copied ? <IconButton
                        icon={<Ionicons name="checkmark-done" size={24} color={theme.gray} />}
                    /> :
                        <IconButton
                            handleOnPress={async () => await copyToClipboard(translationText)}
                            icon={<FontAwesome6 name={copied ? "" : "copy"} size={24} color={theme.gray} />}
                        />
                    }
                    <IconButton
                        icon={<Feather name="share-2" size={24} color={theme.gray} />}
                    />
                </View>
                {status === 'speaking' &&
                    <View className='flex flex-row items-center gap-4'>
                        {Platform.OS != 'android' && <IconButton
                            icon={<Feather name="pause" size={24} color={theme.gray} />}
                            handleOnPress={pauseSpeech}
                        />}
                        <IconButton
                            icon={<Feather name="stop-circle" size={24} color={theme.gray} />}
                            handleOnPress={stopSpeech}
                        />
                    </View>
                }
                {Platform.OS != 'android' && status === 'paused' &&
                    <IconButton
                        icon={<Feather name="play" size={24} color={theme.gray} />}
                        handleOnPress={resumeSpeech}
                    />
                }
                {(status === null || status === 'done' || status === 'stopped') &&
                    <IconButton
                        icon={<Feather name="volume-2" size={24} color={theme.gray} />}
                        handleOnPress={() => utterSpeech({ text: translationText, language: 'fr' })}
                    />
                }
            </View>}
        </View>
    )
}

export default OriginalTextCard