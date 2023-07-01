import { useTranslation } from 'react-i18next'

const ContentItemBig = ({ arr }) => {
  const { t } = useTranslation()

  return (
    <div className="content__item-big">
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
      <p>*{t('content.salaryByInterviewResults')}</p>
    </div>
  )
}

export default ContentItemBig
