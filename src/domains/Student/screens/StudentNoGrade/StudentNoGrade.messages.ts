import { defineMessages } from 'react-intl'

const scope = 'app.student.noGrade'

const StudentNoGradeMessages = defineMessages({
  inputTitle: {
    id: `${scope}.inputTitle`,
    defaultMessage: 'اگر تمایل دارید، هدف خود را بیان کنید',
  },
  pageTitle: {
    id: `${scope}.pageTitle`,
    defaultMessage: 'با شرکت در آزمون علاقه‌مندی شغلی پارسه:',
  },
  pageContent: {
    id: `${scope}.pageContent`,
    defaultMessage:
      'گروه ارزیابی پارسه، کارراهه‌ی مناسب و منطبق با هدف‌گذاری شما را پیشنهاد می‌دهد',
  },
  submitMsg: {
    id: `${scope}.submitMsg`,
    defaultMessage: 'ارسال',
  },
  submitBtn: {
    id: `${scope}.submitBtn`,
    defaultMessage: 'شروع آزمون (رایگان)',
  },
  successRequestText: {
    id: `${scope}.successRequestText`,
    defaultMessage: 'پیام شما با موفقیت ارسال شد.',
  },
})
export default StudentNoGradeMessages
