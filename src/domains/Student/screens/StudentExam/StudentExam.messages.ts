import { defineMessages } from 'react-intl'

const scope = 'app.student.exam'

const StudentExamMessages = defineMessages({
  felicitationTitle: {
    id: `${scope}.felicitationTitle`,
    defaultMessage:
      'در کارراه‌های آوید، در هر ترم و هر رشته <span>حداکثر ۱۲</span> نفر از طریق <br/> مصاحبه ورودی پذیرش می‌شوند.',
  },
  felicitationContent: {
    id: `${scope}.felicitationContent`,
    defaultMessage:
      'پس از انجام آزمون علاقه‌مندی شغلی پارسه، برای انتخاب روز مصاحبه اقدام نمایید. <br/> دبیرخانه‌ی «گروه مصاحبه ورودی در رشته‌ی تحصیلی شما»، <br />برای تایید زمان مصاحبه با شما تماس خواهند گرفت.',
  },
  subminText: {
    id: `${scope}.subminText`,
    defaultMessage: 'شروع آزمون (رایگان)',
  },
})
export default StudentExamMessages
