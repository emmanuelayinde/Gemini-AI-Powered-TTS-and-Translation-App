import React from 'react'
import { View, Text } from 'react-native'
import DarkThemeSwitch from './dark-theme-switch'
import { SafeAreaView } from 'react-native-safe-area-context'

interface IProps {
    children: React.ReactNode,
    label: string
}

const ScreenLayout = ({ children, label }: IProps) => {
    return (
        <SafeAreaView>
            <View className='flex flex-row items-center justify-between p-4'>
                <DarkThemeSwitch />
                <Text className='text-lg font-semibold text-gray uppercase'>{label}</Text>
            </View>
            {children}
        </SafeAreaView>
    )
}

export default ScreenLayout