import { defineMessages } from 'react-intl'

const scope = 'app.grader.honorary'

const HonoraryMessages = defineMessages({
  felicitationTitle: {
    id: `${scope}.title`,
    defaultMessage: 'رهبانان افتخاری',
  },
  felicitationContent: {
    id: `${scope}.content`,
    defaultMessage:
      'آن دسته از اعضا برجسته خانواده پارسه که با سخت کوشی خویش، دانش را برای خلق ارزش به خدمت گرفتند. و اینک تجربه‌های زیسته خود را در اختیار نسل جوان ایران زمین قرار می‌دهند.',
  },
})
export default HonoraryMessages
