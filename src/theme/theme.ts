import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

import overrides from './overrides'
import palette from './palette'
import shadows from './shadows'
import transitions from './transitions'
import typography from './typography'

const options: IThemeOptions = {
  direction: 'rtl',
  breakpoints: {},
  palette,
  shadows,
  typography,
  spacing: 4,
  transitions,
  overrides,
  shape: { borderRadius: 4 },
}

const theme = (createMuiTheme(options as ThemeOptions) as unknown) as ITheme

export default theme
