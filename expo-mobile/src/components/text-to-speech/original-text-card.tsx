import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { IconButton } from '@/components/common';
import { theme } from '@/constants';


const OriginalTextCard = () => {
    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
            <View>
                <Text className='text-xl text-gray font-semibold capitalize'>language</Text>
            </View>
            <TextInput
                className='w-full text-2xl flex-1 items-start justify-start placeholder:text-gray'
                placeholder='Enter text to be translate or listen to here'
                style={{ textAlignVertical: 'top' }}
                multiline={true}
            />
            <View className='flex flex-row items-center justify-between'>
                <View className='flex flex-row gap-4'>
                    <IconButton
                        icon={<FontAwesome6 name="copy" size={24} color={theme.gray} />}
                    />
                    <IconButton
                        icon={<Feather name="share-2" size={24} color={theme.gray} />}
                    />
                </View>
                <IconButton
                    icon={<Feather name="volume-2" size={24} color={theme.gray} />}
                />
            </View>
        </View>
    )
}

export default OriginalTextCard