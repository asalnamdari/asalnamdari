import { defineMessages } from 'react-intl'

const scope = 'app.student.result'

const StudentResaultMessages = defineMessages({
  podcastTitle: {
    id: `${scope}.podcastTitle`,
    defaultMessage:
      'در کارراه‌های آوید، در هر ترم و هر رشته حداکثر ۱۲ نفر از طریق مصاحبه ورودی پذیرش می‌شوند.',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'انتخاب زمان مصاحبه',
  },
  chart: {
    id: `${scope}.chart`,
    defaultMessage: 'نمودار تحلیل آزمون شما',
  },
})
export default StudentResaultMessages
