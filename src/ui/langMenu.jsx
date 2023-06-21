import { useTranslation } from 'react-i18next'

const LangMenu = () => {
  const { i18n } = useTranslation()

  return (
    <div className="header__menu__lang">
      <div
        className={`header__menu__lang__title${
          i18n.language === 'en' || i18n.language === 'en-EN' ? '--active' : ''
        }`}
        onClick={() => {
          i18n.changeLanguage('en')
          localStorage.setItem('langOctagon', 'en')
        }}
      >
        EN
      </div>
      <div
        className={`header__menu__lang__title${
          i18n.language === 'ru' || i18n.language === 'ru-RU' ? '--active' : ''
        }`}
        onClick={() => {
          i18n.changeLanguage('ru')
          localStorage.setItem('langOctagon', 'ru')
        }}
      >
        RU
      </div>
    </div>
  )
}

export default LangMenu
