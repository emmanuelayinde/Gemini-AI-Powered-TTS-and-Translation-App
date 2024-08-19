import { useState } from 'react'
import { defaultUserFirstLanguage, defaultUserSecondLanguage } from '@/constants'


const useTranslation = () => {
    const [languageToTranslateFrom, setLanguageToTranslateFrom] = useState(defaultUserFirstLanguage)
    const [languageToTranslateTo, setLanguageToTranslateTo] = useState(defaultUserSecondLanguage)


    const switchLanguages = () => {
        const l1 = languageToTranslateFrom
        const l2 = languageToTranslateTo
        setLanguageToTranslateFrom(l2)
        setLanguageToTranslateTo(l1)
    }

    return {
        languageToTranslateFrom,
        languageToTranslateTo,
        switchLanguages
    }
}

export default useTranslation