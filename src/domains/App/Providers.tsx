import React, { FC, memo, ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LanguageProvider from './LanguageProvider'
import ReactQueryProvider from './ReactQueryProvider'
import PrThemeProvider from './ThemeProvider'

interface IProvidersProps {
  children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => (
  <ReactQueryProvider>
    <LanguageProvider>
      <PrThemeProvider>
        <Router>{children}</Router>
      </PrThemeProvider>
    </LanguageProvider>
  </ReactQueryProvider>
)

export default memo(Providers)
