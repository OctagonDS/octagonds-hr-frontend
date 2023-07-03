import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation, Trans } from 'react-i18next'
import useWindowSize from '../hooks/useWindowSize'
import ContentItemBig from '../components/contentItemBig'
import ContentItemSmall from '../components/contentItemSmall'
import {
  BmoData,
  GladosData,
  GodfatherData,
  McgonagallData,
  MorpheusData,
  RickData,
  YodaData,
} from '../const/listData'

const ContentMobile = () => {
  const { t } = useTranslation()
  const size = useWindowSize()
  const rickData = RickData()
  const mcgonagallData = McgonagallData()
  const bmoData = BmoData()
  const godfatherData = GodfatherData()
  const morpheusData = MorpheusData()
  const gladosData = GladosData()
  const yodaData = YodaData()
  const [portal, setPortal] = useState('')
  const [glados, setGlados] = useState('')
  const [morpheus, setMorpheus] = useState(false)
  const [yoda, setYoda] = useState(false)
  const [bmo, setBMO] = useState(false)
  const [godfather, setGodfather] = useState(false)
  const [mcgonagall, setMcgonagall] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    return () => {}
  }, [])

  return (
    <div className="content_block">
      <div className="content">
        <div className="content__title">
          <Trans i18nKey="content.newHero">
            этому городу нужен новый{' '}
            <span className="title_back_color">герой</span>
          </Trans>
        </div>
        <div className="content__desc">
          <p>{t('content.newHeroDescOne')}</p>
          <p>{t('content.newHeroDescTwo')}</p>
          <b>{t('content.newHeroDescThree')}</b>
          <p>{t('content.newHeroDescFour')}:</p>
        </div>
      </div>
      <div className="content" style={{ marginBottom: 10, marginTop: 10 }}>
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.pythonDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setPortal('-open')}
            onTouchEnd={() => setPortal('-close')}
          >
            <div className="rick__box">
              <div className={`portal__box${portal}`}>
                <div className="portal" />
              </div>
              <div className="rick" />
              <div
                className="bubble bottom rick__dialog"
                style={
                  portal === '-open'
                    ? { width: 162, top: '-70px' }
                    : { width: 162, top: '-40px' }
                }
              >
                <div className="content__bit__text">
                  {portal === '-open' ? (
                    <Trans i18nKey="content.rick">
                      Давай.
                      <br /> Вошли и вышли.
                      <br /> Приключение на 20 минут.
                    </Trans>
                  ) : (
                    t('content.newTasksCameIn')
                  )}
                </div>
              </div>
            </div>
          </div>
          <ContentItemSmall arr={rickData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 10, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.frontendDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setMcgonagall(true)}
            onTouchEnd={() => setMcgonagall(false)}
          >
            <div className="mcgonagall__box">
              {!mcgonagall && (
                <>
                  <div className="mcgonagall" />
                  <div
                    className="bubble left mcgonagall__dialog"
                    style={{ width: 160 }}
                  >
                    <div className="content__bit__text">
                      {t('content.mcgonagall')}
                    </div>
                  </div>
                </>
              )}
              {mcgonagall && (
                <>
                  <div className="js">
                    <div className="js__heir" />
                  </div>
                  <div className="html">
                    <div className="html__heir" />
                  </div>
                  <div className="css">
                    <div className="css__heir" />
                  </div>
                </>
              )}
            </div>
          </div>
          <ContentItemSmall arr={mcgonagallData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.mlDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => (size.mobile ? {} : setBMO(true))}
            onMouseOut={() => (size.mobile ? {} : setBMO(false))}
            onTouchStart={() => (size.mobile ? setBMO(true) : {})}
            onTouchEnd={() => (size.mobile ? setBMO(false) : {})}
            onMouseDown={() => (size.mobile ? setBMO(true) : {})}
            onMouseUp={() => (size.mobile ? setBMO(false) : {})}
          >
            <div className="bmo__box">
              <div className="bmo">
                <div
                  className="bmo__eye-left"
                  style={bmo ? { background: 'red' } : {}}
                />
                <div
                  className="bmo__eye-right"
                  style={bmo ? { background: 'red' } : {}}
                />
                <div
                  className="bmo__mouth-left"
                  style={bmo ? { transform: 'translate(95px, 85px)' } : {}}
                />
                <div
                  className="bmo__mouth-right"
                  style={bmo ? { transform: 'translate(115px, 85px)' } : {}}
                />
              </div>
              <div className="bubble left bmo__dialog" style={{ width: 256 }}>
                <div className="content__bit__text">
                  {bmo ? (
                    t('content.orNot')
                  ) : (
                    <>
                      {t('content.iNeedYourClothesAndYourMotorcycle')}
                      <div>...</div>
                      <div>{t('content.iWasKidding')}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ContentItemBig arr={bmoData} />
          <ContentItemSmall arr={bmoData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.devopsEngineer')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => (size.mobile ? {} : setGodfather(true))}
            onMouseOut={() => (size.mobile ? {} : setGodfather(false))}
            onTouchStart={() => (size.mobile ? setGodfather(true) : {})}
            onTouchEnd={() => (size.mobile ? setGodfather(false) : {})}
            onMouseDown={() => (size.mobile ? setGodfather(true) : {})}
            onMouseUp={() => (size.mobile ? setGodfather(false) : {})}
          >
            <div className="godfather__box">
              <div className="godfather">
                {godfather && <div className="godfather__money" />}
              </div>
              <div
                className="bubble left godfather__dialog"
                style={{ width: 270 }}
              >
                <div className="content__bit__text">
                  {godfather ? t('content.thatsBetter') : t('content.youAskMe')}
                </div>
              </div>
            </div>
          </div>
          <ContentItemBig arr={godfatherData} />
          <ContentItemSmall arr={godfatherData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          hr
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => (size.mobile ? {} : setMorpheus(true))}
            onMouseOut={() => (size.mobile ? {} : setMorpheus(false))}
            onTouchStart={() => (size.mobile ? setMorpheus(true) : {})}
            onTouchEnd={() => (size.mobile ? setMorpheus(false) : {})}
            onMouseDown={() => (size.mobile ? setMorpheus(true) : {})}
            onMouseUp={() => (size.mobile ? setMorpheus(false) : {})}
          >
            {morpheus && (
              <div className="red__box">
                <div className="red" />
                <div className="red__neon" />
              </div>
            )}
            <div className="morpheus__box">
              <div className="morpheus" />
              <div
                className="bubble right morpheus__dialog"
                style={morpheus ? { width: 290 } : { width: 250 }}
              >
                <div className="content__bit__text">
                  {morpheus
                    ? t('content.youTakeRedPill')
                    : t('content.youreProgrammerHarry')}
                </div>
              </div>
              {morpheus && (
                <div className="bubble left morpheus__dialog-right">
                  <div className="content__bit__text">
                    {t('content.youTakeBluePill')}
                  </div>
                </div>
              )}
            </div>
            {morpheus && (
              <div className="blue__box">
                <div className="blue" />
                <div className="blue__neon" />
              </div>
            )}
          </div>
          <ContentItemBig arr={morpheusData} />
          <ContentItemSmall arr={morpheusData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.aqaEngineer')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => (size.mobile ? {} : setGlados('-open'))}
            onMouseOut={() => (size.mobile ? {} : setGlados('-close'))}
            onTouchStart={() => (size.mobile ? setGlados('-open') : {})}
            onTouchEnd={() => (size.mobile ? setGlados('-close') : {})}
            onMouseDown={() => (size.mobile ? setGlados('-open') : {})}
            onMouseUp={() => (size.mobile ? setGlados('-close') : {})}
          >
            <div className="glados__box">
              <div className="glados">
                <div
                  className="glados__eye"
                  style={
                    glados === '-open'
                      ? { transform: 'translate(171px, 225px)' }
                      : {}
                  }
                />
              </div>
              <div
                className="bubble left glados__dialog"
                style={{ width: 270 }}
              >
                <div className="content__bit__text">
                  {glados === '-open' ? (
                    <Trans i18nKey="content.glados">
                      Я серьезно, тут так и сказано: "ужасный код".
                      <br /> Хотя мы на это даже не тестировали.
                    </Trans>
                  ) : (
                    t('content.hereResultsTest')
                  )}
                </div>
              </div>
            </div>
          </div>
          <ContentItemBig arr={gladosData} />
          <ContentItemSmall arr={gladosData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          team lead
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => (size.mobile ? {} : setYoda(true))}
            onMouseOut={() => (size.mobile ? {} : setYoda(false))}
            onTouchStart={() => (size.mobile ? setYoda(true) : {})}
            onTouchEnd={() => (size.mobile ? setYoda(false) : {})}
            onMouseDown={() => (size.mobile ? setYoda(true) : {})}
            onMouseUp={() => (size.mobile ? setYoda(false) : {})}
          >
            <div className="yoda__box">
              <div className="yoda">
                <div
                  className="yoda__sword"
                  style={yoda ? {} : { height: 0 }}
                />
              </div>
              <div className="bubble left yoda__dialog" style={{ width: 256 }}>
                <div className="content__bit__text">
                  {yoda
                    ? t('content.mayStackoverflow')
                    : t('content.alwaysALotWaysToClose')}
                </div>
              </div>
            </div>
          </div>
          <ContentItemBig arr={yodaData} />
          <ContentItemSmall arr={yodaData} />
        </div>
      </div>
    </div>
  )
}

export default ContentMobile
