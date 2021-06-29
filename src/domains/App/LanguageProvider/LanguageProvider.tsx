import fa from 'i18n/fa-IR.json'
import { FC } from 'react'
import { IntlProvider } from 'react-intl'

const LanguageProvider: FC = ({ children }) => (
  <IntlProvider locale="fa-IR" messages={fa as any}>
    {children}
  </IntlProvider>
)

export default LanguageProvider
