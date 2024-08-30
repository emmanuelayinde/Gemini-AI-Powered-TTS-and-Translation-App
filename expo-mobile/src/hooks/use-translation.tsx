import { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getSupportedLanguagesApi, translateTextApi } from '@/services/translation'
import { useAppDispatch, useAppSelector } from '@/redux'
import { setCanTranslate, switchSelectedLanguages, updateTranslationResponse } from '@/redux/slices'


const useTranslation = () => {
    const [textToTranslate, setTextToTranslate] = useState('')
    const { languageToTranslateFrom, languageToTranslateTo, canTranslate, translationResponse } = useAppSelector(state => state.translation)

    const dispatch = useAppDispatch()

    // Fetching Supported Translate Languages
    const fetchSupportedLanguages = useQuery({
        queryKey: ['translation-supported-languages'],
        queryFn: getSupportedLanguagesApi,
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    const { error: translationError, mutateAsync: mutateAsyncTranslation, status: translationStatus, data: translationRes, reset: resetTranslationMutation } = useMutation({
        mutationFn: translateTextApi
    })

    const translateText = async () => {
        if (!textToTranslate.trim()) return
        return await mutateAsyncTranslation({
            textToTranslate,
            sourceLanguage: languageToTranslateFrom,
            targetLanguage: languageToTranslateTo,
        })
    }

    const switchLanguages = useCallback(() => {
        dispatch(switchSelectedLanguages())
    }, [languageToTranslateTo, languageToTranslateFrom]);



    useEffect(() => {
        if (translationStatus === 'success') {
            dispatch(updateTranslationResponse({
                translationText: translationRes.translated_text,
                detectedLanguage: translationRes.detected_language,
            }))
        }
    }, [translationStatus, translationRes, translationError])


    useEffect(() => {

        if (textToTranslate.trim().length > 0) {
            resetTranslationMutation()
            dispatch(setCanTranslate(true))
            return
        }
        dispatch(setCanTranslate(false))
        return
    }, [textToTranslate])


    return {
        languageToTranslateFrom,
        languageToTranslateTo,
        fetchSupportedLanguages,
        textToTranslate,
        canTranslate,
        ...translationResponse,
        translationError,
        translationStatus,
        translateText,
        setTextToTranslate,
        switchLanguages,
    }
}

export default useTranslation