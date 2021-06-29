import { defineMessages } from 'react-intl'

const scope = 'app.exam.result'

const ExamResaultMessages = defineMessages({
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'توی باشگاه کشف استعداد چه خبره؟',
  },
  chart:{
    id:`${scope}.chart`,
    defaultMessage:'نمودار تحلیل آزمون شما'
  }
})
export default ExamResaultMessages
