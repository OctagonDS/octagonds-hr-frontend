import Header from '../components/bar/header.jsx'
import Content from '../components/page/content.jsx'
import CookieConsent from 'react-cookie-consent'
import { Cookie } from '../assets/img/svg/cookie.jsx'
import { useTranslation, Trans } from 'react-i18next'

export function MainPage() {
  const { t } = useTranslation()

  return (
    <div className="body-page" style={{ position: 'relative' }}>
      <Header />
      <Content />
      <CookieConsent
        location="bottom"
        buttonText={t('main.cookieButton')}
        cookieName="OctagonDS-HR"
        contentStyle={{
          flex: 0,
        }}
        containerClasses="cookie-container"
        buttonClasses="button-cookie"
        expires={150}
      >
        <div>
          <div className="cookie-svg">
            <Cookie />
          </div>
          <div className="cookies-title">cookie</div>
          <div className="cookies-text">
            <Trans i18nKey="main.cookie">
              Мы используем cookie,
              <br /> чтобы сделать наш сайт лучше
            </Trans>
          </div>
        </div>
      </CookieConsent>
    </div>
  )
}
