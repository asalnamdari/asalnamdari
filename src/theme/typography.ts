// import {  } from "@material-ui/core/styles/createTypography";
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import ThemeConstants from './constants'
import { pxToRem } from './helpers'

const {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
} = ThemeConstants

const typography: TypographyOptions = {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  h1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(34),
    lineHeight: 1.5,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(28),
    lineHeight: 1,
    letterSpacing: '-0.00833em',
    marginBottom: pxToRem(48),
  },
  h3: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(24),
    lineHeight: 1.04,
    letterSpacing: '0em',
  },
  h4: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(18),
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(16),
    lineHeight: 1.33,
    letterSpacing: '0em',
  },
  h6: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(22),
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(20),
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(12),
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(12),
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(12),
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
}

export default typography
