import { useState, useCallback, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSupportedLanguages } from '@/services/translation'
import { defaultUserFirstLanguage, defaultUserSecondLanguage } from '@/constants'

const useTranslation = () => {
    const [languageToTranslateFrom, setLanguageToTranslateFrom] = useState(defaultUserFirstLanguage)
    const [languageToTranslateTo, setLanguageToTranslateTo] = useState(defaultUserSecondLanguage)

    // Data Fetching
    const fetchSupportedLanguages = useQuery({
        queryKey: ['translation-supported-languages'],
        queryFn: getSupportedLanguages,
        // Add staleTime to prevent unnecessary refetches
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    // Use useCallback to memoize the switchLanguages function
    const switchLanguages = useCallback(() => {
        const l1 = languageToTranslateFrom
        const l2 = languageToTranslateTo
        setLanguageToTranslateFrom(l2)
        setLanguageToTranslateTo(l1)
    }, [])

    // Use useMemo to memoize the return object
    const translationUtils = useMemo(() => ({
        languageToTranslateFrom,
        languageToTranslateTo,
        switchLanguages,
        fetchSupportedLanguages,
    }), [languageToTranslateFrom, languageToTranslateTo, switchLanguages, fetchSupportedLanguages])

    return translationUtils
}

export default useTranslation