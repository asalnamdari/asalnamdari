import { Overrides } from '@material-ui/core/styles/overrides'
import { pxToRem } from './helpers'
import palette from './palette'

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      'html,body': {
        width: '100%',
        height: '100%',
        fontFamily: 'DiodrumArabic, sans-serif',
      },
    },
  },
  MuiFormControl: {
    root: {
      width: '100%',
      height: 80,
    },
    marginNormal: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  MuiLink: {
    underlineHover: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  MuiInputBase: {
    root: {
      color: '#fff',
    },
    input: {
      '&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus': {
        '-webkit-text-fill-color': '#fff',
        '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
  },
  MuiInputLabel: {
    root: {
      color: palette.primary[50],
      '&.Mui-focused': {
        color: palette.primary[300],
      },
    },
    outlined: {
      transform: 'translate(14px, 17px) scale(1)',
    },
  },
  MuiOutlinedInput: {
    root: {
      '&:hover': {
        '& $notchedOutline': {
          borderColor: palette.primary[300],
        },
      },
      '&.Mui-focused': {
        '& $notchedOutline': {
          borderColor: palette.primary[300],
        },
      },
    },
    input: {
      padding: '15.5px 14px',
      transform: 'translate(0, -5px) scale(1)',
    },
    notchedOutline: {
      borderColor: palette.primary[50],
      '& legend span': {
        color: palette.primary[300],
      },
    },
  },

  MuiButton: {
    root: {
      minHeight: 40,
    },
    label: {
      fontWeight: 300,
      fontFamily: 'IRANSans',
    },
    containedPrimary: {
      color: 'unset',
      backgroundColor: 'unset',
    },
    sizeLarge: {
      fontSize: pxToRem(18),
      lineHeight: '40px',
      '@media (max-width:600px)': {
        fontSize: pxToRem(14),
        lineHeight: '22px',
      },
    },
  },
  MuiTypography: {
    root: {
      placeSelf: 'center',
    },
  },
}

export default overrides
