import React, { useState } from 'react'
import { View, Text, TextInput, Platform } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { IconButton } from '@/components/common';
import { theme } from '@/constants';
import { useTTS } from '@/hooks';


const OriginalTextCard = () => {
    const [text, setText] = useState('Okay')
    const { utterSpeech, pauseSpeech, resumeSpeech, stopSpeech, status } = useTTS()
    console.log({ text })
    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
           
            <View>
                <Text className='text-xl text-gray font-semibold capitalize'>language</Text>
            </View>
            {/* <TextInput
                className='bg-red-300 w-full text-2xl flex-1 items-start justify-start placeholder:text-gray'
                placeholder='Enter text to be translate or listen to here'
                style={{ textAlignVertical: 'top' }}
                multiline={true}
                numberOfLines={8}
                onChangeText={setText}
                defaultValue={text}
                keyboardType='ascii-capable'
            /> */}
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