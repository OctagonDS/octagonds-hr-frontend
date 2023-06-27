import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  const [portal, setPortal] = useState('')
  const [glados, setGlados] = useState('')
  const [morpheus, setMorpheus] = useState(false)
  const [yoda, setYoda] = useState(false)
  const [bmo, setBMO] = useState(false)
  const [godfather, setGodfather] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    return () => {}
  }, [])

  console.log(portal)

  return (
    <div className="content_block">
      <div className="content">
        <div className="content__title">
          этому городу нужен новый{' '}
          <span className="title_back_color">герой</span>
        </div>
        <div className="content__desc">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </div>
      </div>
      <div className="content" style={{ marginBottom: 20 }}>
        <div className="content__title" style={{ marginBottom: 20 }}>
          python-разработчик
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setPortal('-open')}
          onMouseOut={() => setPortal('-close')}
        >
          <div className="content__bit">
            <div className={`portal__box${portal}`}>
              <div className="portal" />
            </div>
            <div className="rick" />
            <div
              className="bubble bottom rick__dialog"
              style={
                portal === '-open'
                  ? { width: 240, top: '-82px' }
                  : { width: 240, top: '-41px' }
              }
            >
              <div className="content__bit__text">
                {portal === '-open' ? (
                  <>
                    <div>Давай.</div> Вошли и вышли. Приключение на 20 минут.
                  </>
                ) : (
                  <>Пришли новые таски.</>
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
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          frontend-разработчик
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setYoda(true)}
          onMouseOut={() => setYoda(false)}
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
        </div>
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          ml-разработчик
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
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          devops-инженер
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setGodfather(true)}
          onMouseOut={() => setGodfather(false)}
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
            <div className="godfather">
              {godfather && <div className="godfather__money" />}
            </div>
            <div
              className="bubble left godfather__dialog"
              style={godfather ? { width: 276 } : { width: 270 }}
            >
              <div className="content__bit__text">
                {godfather ? (
                  <>Так-то лучше.</>
                ) : (
                  <>
                    Ты просишь меня настроить докер, но делаешь это без
                    уважения...
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
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
      </div>
      <div
        className="content"
        style={{ marginBottom: 20, marginTop: 20 }}
        data-aos="fade-up"
      >
        <div className="content__title" style={{ marginBottom: 20 }}>
          тестировщик
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setGlados('-open')}
          onMouseOut={() => setGlados('-close')}
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
            <div className="glados">
              <div
                className="glados__eye"
                style={
                  glados === '-open'
                    ? { transform: 'translate(165px, 234px)' }
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
        </div>
      </div>
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
        <div
          className="content__item__row"
          onMouseOver={() => setMorpheus(true)}
          onMouseOut={() => setMorpheus(false)}
        >
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
      </div>
      <div
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
      </div>
      <div
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
        <div
          className="content__item__row"
          onMouseOver={() => setYoda(true)}
          onMouseOut={() => setYoda(false)}
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
        </div>
      </div>
    </div>
  )
}

export default Content
