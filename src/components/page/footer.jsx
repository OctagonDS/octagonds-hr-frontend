import BatDuck from '../../assets/img/svg/duck/batDuck'
import FirstRow from '../../assets/img/svg/city/firstRow'
import MiddleRow from '../../assets/img/svg/city/middleRow'
import LastRow from '../../assets/img/svg/city/lastRow'
import { useContext } from 'react'
import PostContext from '../../context/postContext'
import { Trans } from 'react-i18next'

const Footer = () => {
  const { sendFeedback, successForm, errorForm } = useContext(PostContext)
  const year = new Date().getFullYear()

  return (
    <>
      <div></div>
      <div className="sky">
        <div className="moon"></div>
      </div>
      <div
        className="last_city"
        style={
          successForm
            ? { transform: 'scale(1.25) translateX(-10%)' }
            : { transform: 'scale(1) translateX(0)' }
        }
      >
        <LastRow />
      </div>
      <div
        className="skyline"
        style={
          successForm
            ? { transform: 'scale(1.25) translateX(-10%)' }
            : { transform: 'scale(1) translateX(0)' }
        }
      >
        <MiddleRow />
      </div>
      <div
        className="light"
        style={
          successForm
            ? {
                opacity: 1,
                animation: 'start 1s ease 0s 1, blink-on 0.15s ease 0s 2',
                cursor: 'none',
              }
            : { animationIterationCount: 0 }
        }
      >
        <div id="batman-logo">
          <div id="left-white"></div>
          <div id="right-white"></div>
          <div id="top-white"></div>
        </div>
      </div>
      <div
        className="skyline"
        style={
          successForm
            ? { transform: 'scale(1.25) translateX(-10%)' }
            : { transform: 'scale(1) translateX(0)' }
        }
      >
        <FirstRow />
      </div>
      <div
        className={`hr_form${
          successForm || errorForm ? '-inactive' : '-active'
        }`}
      >
        {/* <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне.
        </p> */}
        <p>
          Вот она, форма обратной связи, которая отделяет тебя от того, чтобы
          стать частью нашей команды. Просто заполни её, и мы свяжемся с тобой.
        </p>
        <form onSubmit={sendFeedback}>
          <input
            type="text"
            name="name"
            placeholder={'Имя'}
            required
            style={{ borderRight: '2px solid #ff4b55' }}
          />
          <input type="email" name="email" placeholder="Email" />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            style={{ borderRight: '2px solid #ff4b55' }}
          />
          <input
            type="tel"
            name="messenger"
            placeholder="Название мессенджера для контакта"
          />
          <button type="submit">Хочу в команду</button>
        </form>
      </div>
      <div
        className="batman"
        style={
          successForm
            ? { transform: 'scale(0.75)' }
            : { transform: 'scale(0.5)' }
        }
      >
        <BatDuck />
        <div className="cape">
          <div className="cape-shape"></div>
        </div>
        <div
          className={`bubble right batman__dialog${
            successForm || errorForm ? '-active' : '-inactive'
          }`}
        >
          <div className="batman__dialog__text">
            Мы скоро свяжемся с тобой. Знаешь почему я уверен? <div>...</div>
            Потому что я Batduck!
          </div>
        </div>
        <div className="watchtower">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="copyright">
        <Trans i18nKey="footer.copyright" year={year}>
          Все права защищены © {{ year }}{' '}
          <a href="https://octagonds.tech/">Octagon DS</a>
        </Trans>
      </div>
    </>
  )
}

export default Footer
