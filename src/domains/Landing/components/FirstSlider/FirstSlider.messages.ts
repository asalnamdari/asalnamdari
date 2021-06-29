import { defineMessages } from 'react-intl'

const scope = 'app.landing.firstSlider'

const FirstSliderMessages = defineMessages({
  txt1: {
    id: `${scope}.txt1`,
    defaultMessage: 'کـارگـردان زندگی',
  },
  txt2: {
    id: `${scope}.txt2`,
    defaultMessage: 'خـــودت شــــو...',
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
export default FirstSliderMessages
