import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation, Trans } from 'react-i18next'
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
      <div className="content" style={{ marginBottom: 0, marginTop: 10 }}>
        <div className="content__title" style={{ marginBottom: 10 }}>
          {t('content.pythonDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setPortal('-open')}
            onTouchEnd={() => setPortal('-close')}
            onMouseDown={() => setPortal('-open')}
            onMouseUp={() => setPortal('-close')}
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
                    ? { width: 162, top: '-65px' }
                    : { width: 162, top: '-35px' }
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
        style={{ marginBottom: 0, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 10 }}>
          {t('content.frontendDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setMcgonagall(true)}
            onTouchEnd={() => setMcgonagall(false)}
            onMouseDown={() => setMcgonagall(true)}
            onMouseUp={() => setMcgonagall(false)}
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
        style={{ marginBottom: 0, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 10 }}>
          {t('content.mlDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setBMO(true)}
            onTouchEnd={() => setBMO(false)}
            onMouseDown={() => setBMO(true)}
            onMouseUp={() => setBMO(false)}
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
                  style={bmo ? { transform: 'translate(57px, 51px)' } : {}}
                />
                <div
                  className="bmo__mouth-right"
                  style={bmo ? { transform: 'translate(69px, 51px)' } : {}}
                />
              </div>
              <div className="bubble left bmo__dialog" style={{ width: 170 }}>
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
          <ContentItemSmall arr={bmoData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 10, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 10 }}>
          {t('content.devopsEngineer')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setGodfather(true)}
            onTouchEnd={() => setGodfather(false)}
            onMouseDown={() => setGodfather(true)}
            onMouseUp={() => setGodfather(false)}
          >
            <div className="godfather__box">
              <div className="godfather">
                {godfather && <div className="godfather__money" />}
              </div>
              <div
                className="bubble left godfather__dialog"
                style={{ width: 150 }}
              >
                <div className="content__bit__text">
                  {godfather ? t('content.thatsBetter') : t('content.youAskMe')}
                </div>
              </div>
            </div>
          </div>
          <ContentItemSmall arr={godfatherData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 10, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 10 }}>
          hr
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setMorpheus(true)}
            onTouchEnd={() => setMorpheus(false)}
            onMouseDown={() => setMorpheus(true)}
            onMouseUp={() => setMorpheus(false)}
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
                className={`bubble left_red_morf${
                  morpheus ? '-open' : ''
                } morpheus__dialog`}
                style={
                  morpheus
                    ? { width: 120, top: -101 }
                    : { width: 120, top: -13 }
                }
              >
                <div className="content__bit__text">
                  {morpheus
                    ? t('content.youTakeRedPill')
                    : t('content.youreProgrammerHarry')}
                </div>
              </div>
              {morpheus && (
                <div className="bubble left_morf morpheus__dialog-right">
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
          <ContentItemSmall arr={morpheusData} />
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 10, marginTop: 10 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 10 }}>
          {t('content.aqaEngineer')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onTouchStart={() => setGlados('-open')}
            onTouchEnd={() => setGlados('-close')}
            onMouseDown={() => setGlados('-open')}
            onMouseUp={() => setGlados('-close')}
          >
            <div className="glados__box">
              <div className="glados">
                <div
                  className="glados__eye"
                  style={
                    glados === '-open'
                      ? { transform: 'translate(110.5px, 145px)' }
                      : {}
                  }
                />
              </div>
              <div
                className="bubble left glados__dialog"
                style={{ width: 155 }}
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
            onTouchStart={() => setYoda(true)}
            onTouchEnd={() => setYoda(false)}
            onMouseDown={() => setYoda(true)}
            onMouseUp={() => setYoda(false)}
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
          <ContentItemSmall arr={yodaData} />
        </div>
      </div>
    </div>
  )
}

export default ContentMobile
