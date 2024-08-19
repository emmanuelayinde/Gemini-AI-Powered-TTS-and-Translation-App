import React from 'react'
import { Pressable } from 'react-native'

interface IProps {
    icon: React.ReactNode,
    className?: string,
    handleOnPress?: () => void
}

const IconButton = ({ icon, className, handleOnPress }: IProps) => {
    return (
        <Pressable className={className} onPress={handleOnPress}>
            {icon}
        </Pressable>
    )
}

export default IconButton