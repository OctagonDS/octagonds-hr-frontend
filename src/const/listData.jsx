import { useTranslation } from 'react-i18next'

export const RickData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.backendDevelopment'),
        t('content.designingProjectArchitecture'),
        t('content.databaseOrganizAndManag'),
        t('content.codeRefactoringAndOptimization'),
        t('content.refiningProgramCode'),
        t('content.preparationDocum'),
      ],
    },
    {
      title: t('content.softSkills'),
      data: [
        t('content.workingWithDocum'),
        t('content.creativAndFlex'),
        t('content.responsAndDiscipline'),
      ],
    },
    {
      title: t('content.stack'),
      data: ['Django', 'FastAPI', 'REST', 'Git', 'Jira'],
    },
  ]
}

export const McgonagallData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.devFrontendLogic'),
        t('content.designingProjectArchitecture'),
        t('content.appLayout'),
        t('content.refactAndOptimApp'),
        t('content.refiningProgramCode'),
      ],
    },
    {
      title: t('content.softSkills'),
      data: [
        t('content.workingWithDocum'),
        t('content.creativAndFlex'),
        t('content.responsAndDiscipline'),
      ],
    },
    {
      title: t('content.stack'),
      data: ['HTML', 'Sass', 'React', 'REST', 'Git', 'Jira'],
    },
  ]
}
