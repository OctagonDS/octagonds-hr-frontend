import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    return () => {}
  }, [])

  return (
    <div className="footer-block">
      <div className="content_block">
        <div className="content">
          <div className="content__title">
            этому городу ножен новый{' '}
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
            время, программы электронной вёрстки типа Aldus PageMaker, в
            шаблонах которых используется Lorem Ipsum.
          </div>
        </div>
        <div className="content">
          <div className="content__title">вакансии</div>
        </div>
        <div className="content" data-aos="fade-up">
          <div className="content__item__row">
            <div className="content__bit"></div>
            <div className="content__item"></div>
          </div>
        </div>
        <div className="content" data-aos="fade-up">
          <div className="content__item__row">
            <div className="content__item"></div>
            <div className="content__bit"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
