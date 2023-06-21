import React from 'react'
import { SocialIconMainMini } from '../../ui/mainSocialMini'
import { useTranslation } from 'react-i18next'
import { LogoHeadSVG } from '../../assets/img/logo-head'
import LangMenu from '../../ui/langMenu'

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className="header_flex">
      <div className="logo">
        <LogoHeadSVG
          onClick={() => window.open('https://octagonds.tech/', '_blank')}
        />
      </div>
      <div className="header_flex__right">
        <div className="header_flex__right__social">
          <LangMenu />
          <div className="top-header-area-flex">
            <SocialIconMainMini />
          </div>
        </div>
        <div className="header_flex__right__social">
          <div className="header_flex__mail">
            <a href="mailto:hello@octagonds.tech">hello@octagonds.tech</a>
          </div>
          <div className="header_flex__phone">
            <a href="tel:+78007775312">8 800 777 53 12</a>
            <div>{t('footer.freeСall')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
