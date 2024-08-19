import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from '@/constants';


const DarkThemeSwitch = () => {
    const [isDarkMode, setisDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setisDarkMode(prev => !prev)
    }

    return (
        <Pressable onPress={toggleDarkMode}>
            <View className={`${isDarkMode ? 'bg-darkBlue' : 'bg-blue'} w-20 h-10 flex flex-row p-1 rounded-lg`}>
                <View className={`${isDarkMode && 'translate-x-9'} w-1/2 h-full flex items-center justify-center transition-transform duration-300`} >
                    {isDarkMode ?
                        <MaterialIcons name="dark-mode" size={24} color={theme.gray} /> :
                        <Entypo name="light-down" size={24} color={theme.gray} />
                    }
                </View>
            </View>
        </Pressable>
    )
}

export default DarkThemeSwitch 