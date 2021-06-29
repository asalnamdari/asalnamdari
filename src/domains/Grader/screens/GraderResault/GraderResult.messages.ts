import { defineMessages } from 'react-intl'

const scope = 'app.grader.result'

const GraderResultMessages = defineMessages({
  podcastTitle: {
    id: `${scope}.podcastTitle`,
    defaultMessage:
      'رتبه‌های برتر آزمون‌های کارشناسی ارشد و دکتری از چگونگی موفقیت در رشته‌های مورد علاقه شما می‌گویند.',
  },
  submitText: {
    id: `${scope}.submitText`,
    defaultMessage: 'پادکست',
  },
  chart: {
    id: `${scope}.chart`,
    defaultMessage: 'نمودار تحلیل آزمون شما',
  },
})
export default GraderResultMessages
