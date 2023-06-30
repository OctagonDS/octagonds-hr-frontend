import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation, Trans } from 'react-i18next'

const Content = () => {
  const { t, i18n } = useTranslation()
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

  console.log(portal)

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
      <div className="content" style={{ marginBottom: 20 }}>
        <div className="content__title" style={{ marginBottom: 20 }}>
          {t('content.pythonDeveloper')}
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => setPortal('-open')}
            onMouseOut={() => setPortal('-close')}
          >
            <div className={`portal__box${portal}`}>
              <div className="portal" />
            </div>
            <div className="rick" />
            <div
              className="bubble bottom rick__dialog"
              style={
                portal === '-open'
                  ? { width: 240, top: '-103px' }
                  : { width: 240, top: '-61px' }
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
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>{t('content.backendDevelopment')}</li>
              <li>{t('content.designingProjectArchitecture')}</li>
              <li>{t('content.databaseOrganizAndManag')}</li>
              <li>{t('content.codeRefactoringAndOptimization')}</li>
              <li>{t('content.refiningProgramCode')}</li>
              <li>{t('content.preparationDocum')}</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Django</li>
              <li>FastAPI</li>
              <li>REST</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
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
            onMouseOver={() => setMcgonagall(true)}
            onMouseOut={() => setMcgonagall(false)}
          >
            {!mcgonagall && (
              <>
                <div className="mcgonagall" />
                <div
                  className="bubble left mcgonagall__dialog"
                  style={
                    i18n.language === 'en' ? { width: 220 } : { width: 270 }
                  }
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
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>{t('content.devFrontendLogic')}</li>
              <li>{t('content.designingProjectArchitecture')}</li>
              <li>{t('content.appLayout')}</li>
              <li>{t('content.refactAndOptimApp')}</li>
              <li>{t('content.refiningProgramCode')}</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>HTML</li>
              <li>Sass</li>
              <li>React</li>
              <li>REST</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
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
            onMouseOver={() => setBMO(true)}
            onMouseOut={() => setBMO(false)}
          >
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
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>{t('content.creatingMLModels')}</li>
              <li>{t('content.designingArchitectureMLModels')}</li>
              <li>{t('content.dataCollectionAndPreparation')}</li>
              <li>{t('content.refiningProgramCode')}</li>
              <li>{t('content.analysisAndTesting')}</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Python</li>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>NumPy</li>
              <li>nltk</li>
              <li>Pandas</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
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
            onMouseOver={() => setGodfather(true)}
            onMouseOut={() => setGodfather(false)}
          >
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
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>{t('content.CICDImplemAndOptim')}</li>
              <li>{t('content.releaseNewApp')}</li>
              <li>{t('content.microserviceArchitecture')}</li>
              <li>{t('content.databaseOrganizAndManag')}</li>
              <li>{t('content.codeRefactoringAndOptimization')}</li>
              <li>{t('content.refiningProgramCode')}</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Linux</li>
              <li>Python</li>
              <li>Bash</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>RabbitMQ || Kafka</li>
              <li>Grafana</li>
              <li>SQL</li>
              <li>REST</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
        </div>
      </div>
      {/* <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          ios-разработчик
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setBMO(true)}
          onMouseOut={() => setBMO(false)}
        >
          <div className="content__bit">
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
                  <>Или нет...</>
                ) : (
                  <>
                    Мне нужна твоя одежда и мотоцикл.
                    <div>...</div>
                    <div>А-ха-ха-ха, я пошутил!</div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="content__item">
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн.
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          HR
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => setMorpheus(true)}
            onMouseOut={() => setMorpheus(false)}
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
                style={morpheus ? { width: 290 } : { width: 215 }}
              >
                <div className="content__bit__text">
                  {morpheus ? (
                    <>
                      Примешь красную таблетку — получишь дружный коллектив,
                      интересные задачи и возможность карьерного роста.
                    </>
                  ) : (
                    <>Ты программист, Гарри.</>
                  )}
                </div>
              </div>
              {morpheus && (
                <div className="bubble left morpheus__dialog-right">
                  <div className="content__bit__text">
                    Примешь синюю таблетку — и сказке конец.
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
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>Поиск и подбор персонала</li>
              <li>Участие в оценке скиллов</li>
              <li>Адаптация</li>
              <li>Развитие персонала</li>
              <li>Корпоративная культура</li>
              <li>HR-аналитика</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Разбираться в IT-технологиях (желательно)</li>
              <li>Digital-инструменты</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          aqa-инженер
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div
            className="content__bit"
            onMouseOver={() => setGlados('-open')}
            onMouseOut={() => setGlados('-close')}
          >
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
            <div className="bubble left glados__dialog" style={{ width: 270 }}>
              <div className="content__bit__text">
                {glados === '-open' ? (
                  <>
                    Я серьезно, тут так и сказано: "ужасный код".{' '}
                    <div>Хотя мы на это даже не тестировали.</div>
                  </>
                ) : (
                  <>Прекрасно. Вот результаты теста: у тебя ужасный код.</>
                )}
              </div>
            </div>
          </div>
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>Контроль качества приложения</li>
              <li>Выявление и анализ ошибок</li>
              <li>Автоматизация тестирования</li>
              <li>Тестирование приложения</li>
              <li>Сопровождение процесса ликвидации ошибок</li>
              <li>{t('content.preparationDocum')}</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>{t('content.workingWithDocum')}</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Python</li>
              <li>SQL и ORM</li>
              <li>Selenium</li>
              <li>Pytest</li>
              <li>Postman</li>
              <li>REST</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
        </div>
      </div>

      {/* <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          продажник
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setMorpheus(true)}
          onMouseOut={() => setMorpheus(false)}
        >
          <div className="content__item">
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн.
            </p>
          </div>
          <div className="content__bit">
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
                style={morpheus ? { width: 250 } : { width: 215 }}
              >
                <div className="content__bit__text">
                  {morpheus ? (
                    <>
                      Примешь синюю таблетку — и сказке конец.{' '}
                      <div>
                        Примешь красную таблетку — войдешь в IT тусовку.
                      </div>
                    </>
                  ) : (
                    <>Ты программист, Гарри.</>
                  )}
                </div>
              </div>
            </div>
            {morpheus && (
              <div className="blue__box">
                <div className="blue" />
                <div className="blue__neon" />
              </div>
            )}
          </div>
        </div>
      </div> */}
      {/* <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          бизнес-аналитик
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setYoda(true)}
          onMouseOut={() => setYoda(false)}
        >
          <div className="content__bit">
            <div className="yoda">
              <div className="yoda__sword" style={yoda ? {} : { height: 0 }} />
            </div>
            <div className="bubble left yoda__dialog" style={{ width: 256 }}>
              <div className="content__bit__text">
                {yoda ? (
                  <>
                    Испробовать их все должны вы. Да пребудет с вами
                    stackoverflow.
                  </>
                ) : (
                  <>Всегда много путей вовремя таски закрыть есть.</>
                )}
              </div>
            </div>
          </div>
          <div className="content__item">
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн.
            </p>
          </div>
        </div>
      </div> */}
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
            onMouseOver={() => setYoda(true)}
            onMouseOut={() => setYoda(false)}
          >
            <div className="yoda">
              <div className="yoda__sword" style={yoda ? {} : { height: 0 }} />
            </div>
            <div className="bubble left yoda__dialog" style={{ width: 256 }}>
              <div className="content__bit__text">
                {yoda ? (
                  <>
                    Испробовать их все должны вы. Да пребудет с вами
                    stackoverflow.
                  </>
                ) : (
                  <>Всегда много путей вовремя таски закрыть есть.</>
                )}
              </div>
            </div>
          </div>
          <div className="content__item">
            <h4>{t('content.whatYouGoingToDo')}:</h4>
            <ul>
              <li>Оценка задач и сроков всех этапов</li>
              <li>Планирование спринтов</li>
              <li>Проведение митингов</li>
              <li>Контроль выполнения задач</li>
              <li>Помощь команде в решении задач</li>
              <li>Согласование с заказчиком результатов спринта</li>
              <li>Участие в подборе команды и оценке скиллов</li>
              <li>Сбор аналитики по работе команды</li>
            </ul>
            <h4>{t('content.softSkills')}:</h4>
            <ul>
              <li>Лидерские навыки</li>
              <li>Тайм-менеджмент</li>
              <li>Аналитическое мышление</li>
              <li>{t('content.creativAndFlex')}</li>
              <li>{t('content.responsAndDiscipline')}</li>
            </ul>
            <h4>{t('content.stack')}:</h4>
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>REST</li>
              <li>Git</li>
              <li>SCRUM</li>
              <li>Jira</li>
            </ul>
            <p>*{t('content.salaryByInterviewResults')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
