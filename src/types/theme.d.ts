type Color = import('@material-ui/core').Color
type SimplePaletteColorOptions = import('@material-ui/core/styles/createPalette').SimplePaletteColorOptions
type TypeText = import('@material-ui/core/styles/createPalette').TypeText
type Theme = import('@material-ui/core/styles/createMuiTheme').Theme
type ThemeOptions = import('@material-ui/core/styles').ThemeOptions
type Breakpoints = import('@material-ui/core/styles/createBreakpoints').Breakpoint

declare interface ITheme extends Omit<Theme, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: Breakpoints
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: BreakpointsOptions
}

declare interface IPalette {
  primary: DefaultPalette
  secondary: DefaultPalette
  accent: DefaultPalette
  error: DefaultPalette
  info: DefaultPalette
  warning: DefaultPalette
  text: TypeText
  common: {
    //TODO
    black: string
    white: string
  }
  background: {
    default: string
    paper: string
  }
}

declare type DefaultPalette = SimplePaletteColorOptions &
  Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>
