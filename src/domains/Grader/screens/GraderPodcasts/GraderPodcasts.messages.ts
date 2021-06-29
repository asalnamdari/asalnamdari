import { defineMessages } from 'react-intl'

const scope = 'app.grader.podcasts'

const GraderPodcastsMessages = defineMessages({
  felicitationTitle: {
    id: `${scope}.felicitationTitle`,
    defaultMessage: 'پادکست حرفه‌ای‌های پارسه',
  },
  felicitationContent: {
    id: `${scope}.felicitationContent`,
    defaultMessage:
      'رتبه‌های برتر آزمون‌های کارشناسی ارشد و دکتری از چگونگی موفقیت در <br /> رشته‌های مورد علاقه شما می‌گویند.',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'ادامه مسیر',
  },
})
export default GraderPodcastsMessages
