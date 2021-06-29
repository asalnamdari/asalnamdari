import { defineMessages } from 'react-intl'

const scope = 'app.grader.skills'

const GraderHomeMessages = defineMessages({
  felicitationTitle: {
    id: `${scope}.felicitationTitle`,
    defaultMessage: 'بسیار عالی',
  },
  felicitationContent: {
    id: `${scope}.felicitationContent`,
    defaultMessage:
      'مهارت‌های اصلی حرفه‌ای که شایسته است در <b>زمینه‌های انتخابی </b> خود یاد بگیرید:',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'ادامه مسیر',
  },
})
export default GraderHomeMessages
