import { defineMessages } from 'react-intl'

const scope = 'app.student'

const StudentHomeMessages = defineMessages({
  felicitationContent: {
    id: `${scope}.felicitationContent`,
    defaultMessage:
      'لطفا روز مناسب هفته را برای شرکت در مصاحبه ورودی انتخاب نمایید.',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'تایید',
  },
  submitFormText: {
    id: `${scope}.submitFormText`,
    defaultMessage:
    'انتخاب شما با موفقیت ثبت شد <br /> همکاران ما طی ۲۴ ساعت آینده با شما تماس خواهند گرفت.',
  },
})
export default StudentHomeMessages
