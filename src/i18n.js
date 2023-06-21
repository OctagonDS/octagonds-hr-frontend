import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
}

i18n
  // подгрузка файлов json
  .use(Backend)
  // определение языка пользователя
  .use(LanguageDetector)
  //
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    detection: DETECTION_OPTIONS,
    fallbackLng: localStorage.getItem('langOctagon') || 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
