import { defineMessages } from 'react-intl'

const scope = 'app.grader.avids.quest'

const GraderAvidsQuestMessages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage:
      'یادت نره که بیمه‌نامه‌ آوید رو از پارسه درخواست کنی <br /> و آینده حرفه‌ای‌ت رو تضمین کنی',
  },
  headerText: {
    id: `${scope}.headerText`,
    defaultMessage: 'هرچی دوست داری بپرس',
  },
  submitMsg: {
    id: `${scope}.submitMsg`,
    defaultMessage: 'ارسال',
  },
  successRequestText: {
    id: `${scope}.successRequestText`,
    defaultMessage: '.پرسش شما در سامانه پارسه دریافت شد <br /> همکاران ما ظرف سه روز کاری با شما تماس خواهند گرفت.',
  },
})
export default GraderAvidsQuestMessages
