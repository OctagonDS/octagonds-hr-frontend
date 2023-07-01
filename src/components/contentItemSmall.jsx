import { useTranslation } from 'react-i18next'

const ContentItemSmall = ({ arr }) => {
  const { t } = useTranslation()

  return (
    <div className="content__item-small">
      <h5>{t('content.clickableSprite')}</h5>
      <div className="content__item-small-row">
        {arr.map((e) => (
          <div key={e.title}>
            <h4>{e.title}:</h4>
            <ul>
              {e.data.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p>*{t('content.salaryByInterviewResults')}</p>
    </div>
  )
}

export default ContentItemSmall
