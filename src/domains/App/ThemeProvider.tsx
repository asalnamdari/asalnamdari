import { ThemeProvider } from '@material-ui/core'
import { jssPreset, StylesProvider } from '@material-ui/core/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import React, { FC } from 'react'
import theme from 'theme/index'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const PrThemeProvider: FC = ({ children }) => (
  <StylesProvider {...{ jss }}>
    <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
  </StylesProvider>
)

export default PrThemeProvider
