import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="slide-block">
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
                <span style={{ color: '#7dcfff' }} className="Text-Selection">
                  {'"'}
                </span>
                {'(╯°□°)╯︵ ┻━┻'}
                <span style={{ color: '#7dcfff' }} className="Text-Selection">
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
                {t('notFound.unfortunately')},
              </span>
              <br />
              {'// '}
              <span
                style={{ color: '#777', fontStyle: 'italic' }}
                className="Text-Selection"
              >
                {t('notFound.sectionNotOperational')}
              </span>
              <br />
              {'// '}
              <span
                style={{ color: '#777', fontStyle: 'italic' }}
                className="Text-Selection"
              >
                {t('notFound.pageNotExist')}.
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
                {t('notFound.getInformation')}
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
              <a className="Text-Selection" href="mailto:hello@octagonds.tech">
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
  )
}

export default NotFound
