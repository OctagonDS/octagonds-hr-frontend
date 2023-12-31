import Header from '../components/bar/header.jsx'
import Content from '../page/content.jsx'
import CookieConsent from 'react-cookie-consent'
import { Cookie } from '../assets/img/svg/cookie.jsx'
import { useTranslation, Trans } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../page/notFound.jsx'
import Footer from '../components/page/footer.jsx'
import useWindowSize from '../hooks/useWindowSize.jsx'
import FooterTablet from '../components/page/footerTablet.jsx'
import FooterMobile from '../components/page/footerMobile.jsx'
import ContentMobile from '../page/contentMobile.jsx'

export function MainPage() {
  const { t } = useTranslation()
  const size = useWindowSize()

  return (
    <div className="body-page" style={{ position: 'relative' }}>
      <Header />
      <div className="footer-block">
        <Routes>
          <Route
            path={'/'}
            index={true}
            element={size.mobile ? <ContentMobile /> : <Content />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {size.tablet ? (
          <FooterTablet />
        ) : size.mobile ? (
          <FooterMobile />
        ) : (
          <Footer />
        )}
      </div>
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
