import React, { useMemo, useState, useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useTranslation, Trans } from 'react-i18next'

export function AboutUsPage(props) {
  const [leftFocuse, setLeftFocuse] = useState(false)
  const [rightFocuse, setRightFocuse] = useState(false)
  const [specialtyWebFocuse, setSpecialtyWebFocuse] = useState(true)
  const [specialtyMobileFocuse, setSpecialtyMobileFocuse] = useState(false)
  const [duckHover, setDuckHover] = useState(false)
  const [load, setLoad] = useState(false)
  const { t } = useTranslation()

  useMemo(() => {
    return () => {}
  }, [
    leftFocuse,
    rightFocuse,
    load,
    specialtyWebFocuse,
    specialtyMobileFocuse,
    duckHover,
  ])

  useEffect(() => {
    let intervalLoad = setInterval(() => {
      setLoad(true)
      AOS.init({ duration: 1000 })
    }, 1000)
    return () => {
      clearInterval(intervalLoad)
      setLeftFocuse(false)
      setRightFocuse(false)
      setSpecialtyWebFocuse(true)
      setDuckHover(false)
      setSpecialtyMobileFocuse(false)
      setLoad(false)
    }
  }, [])
  return (
    <div>
      <div style={load === true ? { display: 'none' } : {}}>
        <div className={'slide-block'}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div>
              <div>
                <div style={{ paddingRight: '185px' }}>
                  <div className="pac-man" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={load === false ? { display: 'none' } : {}}>
        <div className={'slide-block'}>
          <div className="page-404">
            <div className="code-area">
              <span
                style={{ color: '#777', fontStyle: 'italic' }}
                className="Text-Selection"
              >
                {'// 404 page not found.'}
              </span>
              <span>
                <span style={{ color: '#bb9af7' }} className="Text-Selection">
                  if{' '}
                </span>
                <span style={{ color: '#7dcfff' }} className="Text-Selection">
                  {'('}
                </span>
                <span style={{ color: '#bb9af7' }} className="Text-Selection">
                  !
                </span>
                <span style={{ color: '#ffffff' }} className="Text-Selection">
                  found
                </span>
                <span style={{ color: '#7dcfff' }} className="Text-Selection">
                  {') '}
                </span>
                <span style={{ color: '#bb9af7' }} className="Text-Selection">
                  {'{'}
                </span>
              </span>
              <span>
                <span
                  style={{ paddingLeft: '15px', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  <i style={{ width: '10px', display: 'inline-block' }}></i>
                  throw{' '}
                </span>
                <span>
                  <span style={{ color: '#bb9af7' }} className="Text-Selection">
                    {'('}
                  </span>
                  <span style={{ color: '#ffd369' }} className="Text-Selection">
                    <span
                      style={{ color: '#7dcfff' }}
                      className="Text-Selection"
                    >
                      {'"'}
                    </span>
                    {'(╯°□°)╯︵ ┻━┻'}
                    <span
                      style={{ color: '#7dcfff' }}
                      className="Text-Selection"
                    >
                      {'"'}
                    </span>
                  </span>
                  <span style={{ color: '#bb9af7' }} className="Text-Selection">
                    {')'}
                  </span>
                </span>
                <span
                  style={{ display: 'block', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  {'}'}
                </span>
                <br />
                <span
                  style={{
                    color: '#777',
                    fontStyle: 'italic',
                  }}
                  className="Text-Selection"
                >
                  {'// '}
                  <span
                    style={{ color: '#777', fontStyle: 'italic' }}
                    className="Text-Selection"
                  >
                    К сожалению,
                  </span>
                  <br />
                  {'// '}
                  <span
                    style={{ color: '#777', fontStyle: 'italic' }}
                    className="Text-Selection"
                  >
                    раздел пока не работает.
                  </span>
                  <br />
                  {'// '}
                  <span
                    style={{ color: '#777', fontStyle: 'italic' }}
                    className="Text-Selection"
                  >
                    Зато мы работаем над ним.
                  </span>
                </span>
                <br />
                <br />
                <span
                  style={{
                    color: '#777',
                    fontStyle: 'italic',
                  }}
                  className="Text-Selection"
                >
                  {'// '}
                  <span
                    style={{ color: '#777', fontStyle: 'italic' }}
                    className="Text-Selection"
                  >
                    Получить информацию
                  </span>
                </span>
                <br />
                <span>
                  <span style={{ color: '#bb9af7' }} className="Text-Selection">
                    if{' '}
                  </span>
                  <span style={{ color: '#7dcfff' }} className="Text-Selection">
                    {'('}
                  </span>
                  <span style={{ color: '#ffffff' }} className="Text-Selection">
                    phone
                  </span>
                  <span style={{ color: '#7dcfff' }} className="Text-Selection">
                    {') '}
                  </span>
                  <span style={{ color: '#bb9af7' }} className="Text-Selection">
                    {'{'}
                  </span>
                </span>
                <br />
                <span
                  style={{ paddingLeft: '15px', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  <i style={{ width: '10px', display: 'inline-block' }}></i>
                  return{' '}
                </span>
                <span className="link-404">
                  <a className="Text-Selection" href="tel:+78007775312">
                    8 800 777 53 12
                  </a>
                </span>
                <span
                  style={{ display: 'block', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  {'} '} else {' {'}
                </span>
                <span
                  style={{ paddingLeft: '15px', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  <i style={{ width: '10px', display: 'inline-block' }}></i>
                  return{' '}
                </span>
                <span className="link-404">
                  <a
                    className="Text-Selection"
                    href="mailto:hello@octagonds.tech"
                  >
                    hello@octagonds.tech
                  </a>
                </span>
                <span
                  style={{ display: 'block', color: '#bb9af7' }}
                  className="Text-Selection"
                >
                  {'} '}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
