import React, { useState } from 'react'
import { View, Text, Platform } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { theme } from '@/constants';
import { IconButton } from '@/components/common';
import { useTTS } from '@/hooks';

interface IProps {
    showLanguage?: boolean
}


const OriginalTextCard = ({ showLanguage = true }: IProps) => {
    const [text, _] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
    const { utterSpeech, pauseSpeech, resumeSpeech, stopSpeech, status } = useTTS()

    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
            {showLanguage && <View>
                <Text className='text-xl text-gray font-semibold capitalize'>language</Text>
            </View>}
            <View className='w-full flex-1'>
                <Text className='text-2xl text-white'>
                    {text}
                </Text>
            </View>
            {text && <View className='flex flex-row items-center justify-between'>
                <View className='flex flex-row gap-4'>
                    <IconButton
                        icon={<FontAwesome6 name="copy" size={24} color={theme.gray} />}
                    />
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
                        handleOnPress={() => utterSpeech({ text })}
                    />
                }
            </View>}
        </View>
    )
}

export default OriginalTextCard