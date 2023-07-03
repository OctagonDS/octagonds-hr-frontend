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

export const BmoData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.creatingMLModels'),
        t('content.designingArchitectureMLModels'),
        t('content.dataCollectionAndPreparation'),
        t('content.refiningProgramCode'),
        t('content.analysisAndTesting'),
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
      data: [
        'Python',
        'TensorFlow',
        'Keras',
        'NumPy',
        'nltk',
        'Pandas',
        'Git',
        'Jira',
      ],
    },
  ]
}

export const GodfatherData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.CICDImplemAndOptim'),
        t('content.releaseNewApp'),
        t('content.microserviceArchitecture'),
        t('content.databaseOrganizAndManag'),
        t('content.codeRefactoringAndOptimization'),
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
      data: [
        'Linux',
        'Python',
        'Bash',
        'Docker',
        'Kubernetes',
        'RabbitMQ || Kafka',
        'Grafana',
        'SQL',
        'REST',
        'Git',
        'Jira',
      ],
    },
  ]
}

export const MorpheusData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.searchAndRecruitment'),
        t('content.participationInSkillsAssessment'),
        t('content.adaptation'),
        t('content.employeeDevelopment'),
        t('content.corporateCulture'),
        t('content.HRAnalytics'),
        t('content.workingWithDocum'),
      ],
    },
    {
      title: t('content.softSkills'),
      data: [t('content.creativAndFlex'), t('content.responsAndDiscipline')],
    },
    {
      title: t('content.stack'),
      data: [t('content.understandITTechnology'), t('content.digitalTools')],
    },
  ]
}

export const GladosData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.appQualityControl'),
        t('content.errorDetectionAndAnalysis'),
        t('content.testAutomation'),
        t('content.testingApplication'),
        t('content.accompanyingEliminationErrors'),
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
      data: [
        'Python',
        'SQL и ORM',
        'Selenium',
        'Pytest',
        'Postman',
        'REST',
        'Git',
        'Jira',
      ],
    },
  ]
}

export const YodaData = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('content.whatYouGoingToDo'),
      data: [
        t('content.assessmentTasksAndDeadlines'),
        t('content.sprintPlanning'),
        t('content.holdingMeetings'),
        t('content.taskControl'),
        t('content.helpingTeamSolveProblems'),
        t('content.approvalSprintResultsByCustomer'),
        t('content.participateInTeamSelection'),
        t('content.collectingAnalyticsTeam'),
      ],
    },
    {
      title: t('content.softSkills'),
      data: [
        t('content.leadershipSkills'),
        t('content.timeManagement'),
        t('content.analyticalThinking'),
        t('content.creativAndFlex'),
        t('content.responsAndDiscipline'),
      ],
    },
    {
      title: t('content.stack'),
      data: ['Python', 'SQL', 'REST', 'Git', 'SCRUM', 'Jira'],
    },
  ]
}
