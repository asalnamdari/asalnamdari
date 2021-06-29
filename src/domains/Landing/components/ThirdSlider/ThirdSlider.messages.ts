import { defineMessages } from 'react-intl'

const scope = 'app.landing.thirdSlider'

const ThirdSliderMessages = defineMessages({
  txt1: {
    id: `${scope}.txt1`,
    defaultMessage: 'شما کجای راه هستید؟',
  },
  education: {
    id: `${scope}.education`,
    defaultMessage: 'مدرک\nدانشگاهی\nدارم',
  },
  grader: {
    id: `${scope}.grader`,
    defaultMessage: 'هنوز\nوارد دانشگاه\nنشدم',
  },
  student: {
    id: `${scope}.student`,
    defaultMessage: 'دانشـــــجو\nهســـــتم',
  },
  examText: {
    id: `${scope}.examText`,
    defaultMessage:
      'آزمون پردیس پارسه، برای شما که می‌خواهید علاقه‌های تحصیلی ــ شغلی خود را ارزیابی کنید.',
  },
  examTime: {
    id: `${scope}.examTime`,
    defaultMessage: '3 دقیقه',
  },
  examCost: {
    id: `${scope}.examCost`,
    defaultMessage: 'رایگان',
  },
})
export default ThirdSliderMessages
