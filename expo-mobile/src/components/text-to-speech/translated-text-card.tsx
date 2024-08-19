import React from 'react'
import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { theme } from '@/constants';
import { IconButton } from '@/components/common';

interface IProps {
    showLanguage?: boolean
}

const OriginalTextCard = ({ showLanguage = true }: IProps) => {
    return (
        <View className='w-full min-h-80 px-4 py-6 gap-4 rounded-lg bg-blue'>
            {showLanguage && <View>
                <Text className='text-xl text-gray font-semibold capitalize'>language</Text>
            </View>}
            <View className='w-full flex-1'>
                <Text className='text-2xl text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a dolorum officiis sapiente est vel possimus minima.
                    At doloremque, veniam molestias vel facilis earum a minus! Error eos ullam quas.
                </Text>
            </View>
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