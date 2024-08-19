import { useRef, useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { TranslatedTextCard } from '../text-to-speech';
import { LanguagesSwitch } from '../translation';
import { theme } from '@/constants';

const StyledCamera = () => {
    const [image, setImage] = useState(null)
    const [cameraIsReady, setCameraIsReady] = useState(false)
    const [permission, requestPermission] = useCameraPermissions();

    const cameraRef = useRef<CameraView | null>(null)

    const captureImage = async () => {
        if (!cameraIsReady) return
        const photo = await cameraRef.current?.takePictureAsync()
        console.log({ photo })
        setImage(photo?.uri);
        return
    };

    if (!permission) {
        // Camera permissions are still loading.
        return <View >
            <Text>No permission granted</Text>
        </View>
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    return (
        <View className='relative flex flex-1 justify-center'>
            {image ?
                <>
                    <ImageBackground src={image} style={styles.imageBg} />
                    <View className=' px-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <View className='mb-20'>
                            <TranslatedTextCard showLanguage={false} />
                        </View>
                        <LanguagesSwitch
                            languageToTranslateFrom='English'
                            languageToTranslateTo='Chinese'
                        />
                    </View>
                    <TouchableOpacity className='bg-orange flex justify-center items-center absolute top-12 righ-12'>

                    </TouchableOpacity>
                </> :
                <>
                    <CameraView style={styles.camera} facing={'back'} ref={cameraRef}

                        onCameraReady={() => setCameraIsReady(true)}
                    />
                    <View className='absolute bottom-40 left-1/2 -translate-x-1/2'>
                        <CaptureButton capture={captureImage} />
                    </View>
                </>
            }
        </View>
    );
}

export default StyledCamera


const CaptureButton = ({ capture }: { capture: () => void }) => {
    return <TouchableOpacity onPress={capture}>
        <View className='w-20 h-20 rounded-full bg-blue flex justify-center items-center'>
            <MaterialIcons name="camera" size={45} color={theme.white} />
        </View>
    </TouchableOpacity>
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageBg: {
        flex: 1,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',

    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
