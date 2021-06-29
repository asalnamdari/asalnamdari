import { defineMessages } from 'react-intl'

const scope = 'app.student.home'

const StudentHomeMessages = defineMessages({
  pageTitle: {
    id: `${scope}.pageTitle`,
    defaultMessage:
      'حالا برای شروع سه زمینه حرفه‌ای به ترتیبی که دوست داری انتخاب کن',
  },
  podcastTitle: {
    id: `${scope}.podcastTitle`,
    defaultMessage: 'دانشجویی شغل نیست',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'ثبت',
  },
  grade1: {
    id: `${scope}.grade1`,
    defaultMessage: 'اول',
  },
  grade2: {
    id: `${scope}.grade2`,
    defaultMessage: 'دوم',
  },
  grade3: {
    id: `${scope}.grade3`,
    defaultMessage: 'سوم',
  },
  noGrade: {
    id: `${scope}.noGrade`,
    defaultMessage: 'هیچکدام',
  },
})
export default StudentHomeMessages
