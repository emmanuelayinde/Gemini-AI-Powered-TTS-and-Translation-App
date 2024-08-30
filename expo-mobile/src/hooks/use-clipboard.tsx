import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from 'react';


const useClipboard = () => {
    const [copied, setCopied] = useState(false)


    const copyToClipboard = async (text: string) => {
        const copied = await Clipboard.setStringAsync(text);
        if (copied) {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 4000);
        }
    };

    const fetchCopiedText = async () => {
        await Clipboard.getStringAsync();
    };

    useEffect(() => {
        (async () => { fetchCopiedText() })()
    }, [])


    return {
        copied,
        copyToClipboard,
    }
}

export default useClipboard