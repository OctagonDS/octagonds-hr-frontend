import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  const [portal, setPortal] = useState('')
  const [glados, setGlados] = useState('')

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
          наши вакансии
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
            <h4>Python разработчик</h4>
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
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          onMouseOver={() => setGlados('-open')}
          onMouseOut={() => setGlados('-close')}
        >
          <div className="content__item">
            <h4>Тестировщик</h4>
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
                    Я серьезно, тут так и сказано: "ужасный человек". Хотя мы на
                    это даже не тестировали.
                  </>
                ) : (
                  <>Прекрасно. Вот результаты теста: ты ужасный человек.</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content" data-aos="fade-up">
        <div
          className="content__item__row"
          // onMouseOver={() => setPortal('-open')}
          // onMouseOut={() => setPortal('-close')}
        >
          <div className="content__bit">
            <div className="knight" />
          </div>
          <div className="content__item">
            <h4>HR</h4>
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
      <div className="content" data-aos="fade-up">
        <div className="content__item__row">
          <div className="content__item">
            <h4>Team Lead</h4>
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
            <div className="knight" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
