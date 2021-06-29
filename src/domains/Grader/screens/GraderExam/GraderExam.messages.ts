import { defineMessages } from 'react-intl'

const scope = 'app.grader.exam'

const GraderExamMessages = defineMessages({
  felicitationTitle: {
    id: `${scope}.felicitationTitle`,
    defaultMessage:
      'تبریک میگیم! \n اولین قدم برای مهم‌ترین تصمیم زندگی حرفه‌ای‌ت رو برداشتی.',
  },
  felicitationContent: {
    id: `${scope}.felicitationContent`,
    defaultMessage:
      'حالا اگه دلت میخواد از علاقه هات ارزیابی دقیق تری به دست بیاری \n سه دقیقه از وقتتو برای شرکت در آزمون استاندارد پارسه اختصاص بده.',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'شروع آزمون (رایگان)',
  },
})
export default GraderExamMessages
